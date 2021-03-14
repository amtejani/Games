import com.soywiz.kds.Array2
import com.soywiz.korma.geom.PointInt
import com.soywiz.korma.geom.ds.get
import kotlinx.coroutines.channels.Channel

object Solver {
	fun solve(board: Board, channel: Channel<List<Pair<PointInt, Direction>>>) {

	}

	/**
	 * Create a path from [start] to [end] on the [board]
	 * The cell at [start] is always a non-empty cell
	 */
	fun createPath(start: PointInt, end: PointInt, board: Array2<Cell>): List<Pair<PointInt,Direction>> {
		// make sure start position does not contain empty cell
		assert(board[start].index != EMPTY_CELL_INDEX)
		// get path for cell to end position
		val path = board.getPath(start, end) { it.lock }
		val pathPairs = path.dropLast(1).zip(path.drop(1))
		var emptyPos = board.find { it.index == EMPTY_CELL_INDEX }?.pos ?: throw AssertionError("No empty cell")
		var cellPos = start
		return sequence {
			pathPairs.forEach {
				// get path for empty cell to start position + 1
				val emptyPath = getEmptyPath(emptyPos, it.first.pos, board)
				yieldAll(emptyPath)
				// move cell to empty position
				yield(Pair(cellPos, cellPos.getRelativePosition(it.second.pos)!!))
				// repeat with new empty cell position to next position in list
				emptyPos = cellPos
				cellPos = it.second.pos
			}
		}.toList()
	}

	/**
	 * Create path for the empty cell from [start] to [end] on [board]
	 * The cell at [start] is always an empty cell
	 * Output will be list of positions that will be moved in a [Direction] to replace the empty cell
	 */
	private fun getEmptyPath(start: PointInt, end: PointInt, board: Array2<Cell>): List<Pair<PointInt, Direction>> {
		val path = board.getPath(start, end) { it.lock }
		return sequence {
			val iterator = path.iterator()
			if (!iterator.hasNext()) throw AssertionError("Bad path")
			var cell = iterator.next().pos
			while (iterator.hasNext()) {
				val next = iterator.next().pos
				val dir = next.getRelativePosition(cell) ?: throw AssertionError("Bad path")
				yield(Pair(next, dir))
				cell = next
			}
		}.toList()
	}

	data class Cell(
		val pos: PointInt,
		val index: Int,
		var lock: Boolean = false // Whether path finding should consider this cell
	)

	private const val EMPTY_CELL_INDEX = -1
}
