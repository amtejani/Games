import com.soywiz.kds.Array2
import com.soywiz.kds.Queue
import com.soywiz.kmem.isEven
import com.soywiz.kmem.isOdd
import com.soywiz.korma.geom.PointInt
import com.soywiz.korma.geom.ds.get

/**
 * Map an [Array2] to another [Array2]
 */
inline fun <T, R : Any> Array2<T>.map(transform: (T) -> R): Array2<R> {
	return Array2(width, height) { transform(get(it % width, it / width)) }
}

/**
 * Clone a [PointInt]
 */
fun PointInt.clone() = PointInt(this.x, this.y)

/**
 * Add a difference to a point
 */
operator fun PointInt.plus(diff: Pair<Int, Int>) = PointInt(x + diff.first, y + diff.second)

/**
 * Count from [this] value to [to]. Count up or down depending on whether [this] is greater than [to]
 */
fun Int.countTo(to: Int): IntProgression {
	return if (this < to) {
		this..to
	} else {
		this.downTo(to)
	}
}


/**
 * Get [Direction] of [to] point relative to this point
 * Return null if same position or not in same column or row
 */
fun PointInt.getRelativePosition(to: PointInt): Direction? {
	return when {
		this == to -> null
		y == to.y -> {
			if (x < to.x) Direction.RIGHT
			else Direction.LEFT
		}
		x == to.x -> {
			if (y < to.y) Direction.DOWN
			else Direction.UP
		}
		else -> null
	}
}

fun assert(cond: Boolean, message: Any? = null) {
	if (!cond) throw AssertionError(message)
}

/**
 * Return true if direction is vertical
 */
val Direction.isVertical
	get() = this == Direction.UP || this == Direction.DOWN

/**
 * Returns whether board is solvable.
 * Based on: https://www.geeksforgeeks.org/check-instance-15-puzzle-solvable/
 *
 * If width is odd, Board is solvable if inversions is even
 * If width is even, Board is solvable if empty position is on even row from bottom and number of inversions is odd
 * or if empty position is on odd row from bottom and number of inversions is even
 */
val Board.isSolvable: Boolean
	get() {
		val data = board.data.filterIsInstance<Board.FragmentCell>().map { it.index }
		// Get total number of inversions
		val inversions = data.foldIndexed(0) { index, acc, i ->
			acc + data.subList(index + 1, data.size).count { i > it }
		}
		return width.isOdd && inversions.isEven || (height - emptyPos.y).isOdd xor inversions.isOdd
	}

data class PathCell<T>(
	val item: T,
	var mark: Boolean = false, // Whether path finding has seen this cell
	var lastPos: PointInt? = null // previous position in this path
)

/**
 * Get path from [start] to [end]
 * Ignore items that match [ignorePredicate]
 */
fun <T> Array2<T>.getPath(start: PointInt, end: PointInt, ignorePredicate: ((T) -> Boolean)? = null): List<T> {
	val board = map { PathCell(it) }
	// BFS
	board[start].mark = true
	val queue = Queue<PointInt>()
	queue.enqueue(start)
	var pathFound = false
	while (queue.isNotEmpty()) {
		val startPos = queue.dequeue()
		for (dir in Direction.directions) {
			val nextPos = startPos + dir.diff
			if (!board.inside(nextPos.x, nextPos.y)) {
				continue
			}
			if (nextPos == end) {
				pathFound = true
				break
			}

			val next = board[nextPos]
			if (!next.mark && ignorePredicate?.invoke(next.item) == true) {
				next.lastPos = startPos
				next.mark = true
				queue.enqueue(nextPos)
			}
		}
	}
	assert(pathFound, "No path found from $start to $end")

	// Recreate path
	return sequence {
		var next = end
		while (next != start) {
			val nextCell = board[next]
			yield(nextCell.item)
			val lastPos = nextCell.lastPos ?: throw AssertionError("Path is not complete")
			next = lastPos
		}
		yield(board[start].item)
	}.toList().reversed()
}
