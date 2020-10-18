import com.soywiz.kds.Array2
import com.soywiz.korma.geom.PointInt
import kotlinx.coroutines.channels.Channel

object Solver {
	fun solve(board: Board, channel: Channel<List<Pair<PointInt, Direction>>>) {

	}

	fun getPath(start: PointInt, end: PointInt, board: Array2<Cell>): List<Pair<PointInt, Direction>> {
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
}
