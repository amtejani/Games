import com.soywiz.kmem.isEven
import com.soywiz.kmem.isOdd
import com.soywiz.korma.geom.PointInt

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
