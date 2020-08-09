import com.soywiz.kds.Array2
import com.soywiz.kds.Extra
import com.soywiz.korio.async.Signal
import com.soywiz.korma.geom.PointInt
import com.soywiz.korma.geom.ds.get
import com.soywiz.korma.geom.ds.set

enum class Direction(val diff: Pair<Int, Int>) {
	UP(Pair(0, -1)),
	DOWN(Pair(0, 1)),
	LEFT(Pair(-1, 0)),
	RIGHT(Pair(1, 0));

	/**
	 * Invert direction
	 */
	fun inv() = when(this) {
		UP -> DOWN
		DOWN -> UP
		LEFT -> RIGHT
		RIGHT -> LEFT
	}
}

/**
 * Class to manage board state
 */
class Board(val width: Int = 4, val height: Int = 4) {
	interface Cell
	object EmptyCell : Cell
	inner class FragmentCell(x: Int, y: Int, val index: Int) : Cell, Extra by Extra.Mixin() {
		private val pos = PointInt(x, y)
		val position
			get() =  pos.clone()

		/**
		 * Get [Direction] of [to] point relative to this cell
		 * Return null if same position or not in same column or row
		 */
		fun getRelativePosition(to: PointInt): Direction? {
			val pos = position
			return when {
				pos == to -> null
				pos.y == to.y -> {
					if (pos.x < to.x) Direction.RIGHT
					else Direction.LEFT
				}
				pos.x == to.x -> {
					if (pos.y < to.y) Direction.DOWN
					else Direction.UP
				}
				else -> null
			}
		}

		/**
		 * Move cell to empty position in [direction] if adjacent cell is empty
		 */
		fun move(direction: Direction): Boolean {
			val newPos = position + direction.diff
			if (board.inside(newPos.x, newPos.y) && board[newPos] is EmptyCell) {
				val old = position
				pos.setTo(newPos)
				board[old] = EmptyCell
				board[pos] = this
				moveSignal(old)
				return true
			}
			return false
		}
	}

	val board: Array2<Cell>

	private val gameOverSignal = Signal<Unit>()
	private val moveSignal = Signal<PointInt>()

	init {
		// generate board
		val arr = List(width * height) {
			it
		}.shuffled()
		board = Array2(width, height) {
			val index = arr[it]
			if (index + 1 < width * height) {
				FragmentCell(it % width, it / width, index + 1)
			} else {
				EmptyCell
			}
		}
		moveSignal {
			val cell = board[it]
			// If empty cell is in last position and all cells are lined up, game is over.
			if (cell is EmptyCell && it.x == width - 1 && it.y == height - 1 && checkComplete()) {
				gameOverSignal(Unit)
			}
		}
	}

	/**
	 * Get position of empty cell
	 */
	val emptyPos
		get() = board.getPositionsWithValue(EmptyCell).first().let { PointInt(it.first, it.second) }

	operator fun get(x: Int, y: Int) = board[x, y]
	operator fun get(point: PointInt) = board[point]

	/**
	 * Signal game over
	 */
	fun gameOver(handler: (Unit) -> Unit) = gameOverSignal.once(handler)

	/**
	 * Clean up board
	 */
	fun cleanUp() {
		moveSignal.clear()
		gameOverSignal.clear()
	}

	/**
	 * Check if board is complete
	 */
	private fun checkComplete() = board.mapIndexed { i, value ->
		when (value) {
			is EmptyCell -> i + 1 == width * height
			is FragmentCell -> i + 1 == value.index
			else -> false
		}
	}.all { it }
}
