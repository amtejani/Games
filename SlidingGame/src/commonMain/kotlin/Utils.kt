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
