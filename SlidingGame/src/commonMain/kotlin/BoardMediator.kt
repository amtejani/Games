import com.soywiz.kds.Extra
import com.soywiz.klock.milliseconds
import com.soywiz.korev.Key
import com.soywiz.korge.input.onClick
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.View
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korma.geom.PointInt
import com.soywiz.korma.interpolation.Easing
import kotlin.coroutines.coroutineContext

var Board.FragmentCell.view by Extra.Property<View?> { null }

/**
 * Setup cell click handlers
 */
fun Board.FragmentCell.init(view: View, parent: Board, space: Double) {
	this.view = view

	view.onClick {
		val emptyPos = parent.emptyPos
		val pos = position
		val dir = getRelativePosition(emptyPos) ?: return@onClick
		if (dir.isVertical) {
			val from = emptyPos.y
			val to = pos.y
			from.countTo(to).map { PointInt(pos.x, it) }
		} else {
			val from = emptyPos.x
			val to = pos.x
			from.countTo(to).map { PointInt(it, pos.y) }
		}.drop(1).forEach { i ->
			val cell = parent[i]
			if (cell is Board.FragmentCell) {
				cell.move(dir, space)
			}
		}
	}
}

/**
 * Setup arrow key listeners
 */
fun Board.init(view: View, space: Double) {
	view.onKeyUp { event ->
		event.key.direction?.let {
			val cellPos = emptyPos + it.diff
			if (board.inside(cellPos.x, cellPos.y)) {
				(this[cellPos] as? Board.FragmentCell)?.move(it.inv(), space)
			}
		}
	}
}

/**
 * Move cell in [direction] by [space] pixels
 */
suspend fun Board.FragmentCell.move(direction: Direction, space: Double) {
	launchImmediately(coroutineContext) {
		if (move(direction)) {
			val view = view ?: return@launchImmediately
			view.tween(
				view::x[view.x, view.x + space * direction.diff.first],
				view::y[view.y, view.y + space * direction.diff.second],
				easing = Easing.EASE_IN_OUT,
				time = 100.milliseconds
			)
		}
	}
}

/**
 * Get [Direction] for [Key]
 */
val Key.direction
	get() = when (this) {
		Key.UP -> Direction.UP
		Key.DOWN -> Direction.DOWN
		Key.LEFT -> Direction.LEFT
		Key.RIGHT -> Direction.RIGHT
		else -> null
	}
