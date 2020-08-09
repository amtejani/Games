import com.soywiz.kds.Extra
import com.soywiz.korev.MouseButton
import com.soywiz.korge.input.*
import com.soywiz.korge.view.View
import com.soywiz.korim.color.Colors
import com.soywiz.korma.geom.PointInt
import kotlin.reflect.KFunction1

var Board.Cell.view by Extra.Property<View?> { null }
var Board.drag by Extra.Property<DragInfo?> { null }

enum class Action(val execute: KFunction1<Board.Cell, Unit>) {
    NONE(Board.Cell::noAction),
    UNMARK(Board.Cell::unmark),
    MARK(Board.Cell::mark),
    CHECK(Board.Cell::check)
}

enum class Direction { NONE, ROW, COL }

data class DragInfo(
        val action: Action = Action.NONE,
        val start: PointInt = PointInt(0, 0),
        var direction: Direction = Direction.NONE
)

fun Board.Cell.noAction() {}

/**
 * Update cell to reflect current state
 */
fun Board.Cell.update() {
    view?.colorMul = when (state) {
        MineState.UNMARKED -> Colors.WHITE
        MineState.EMPTY -> Colors.DARKGRAY
        MineState.MARKED -> Colors.RED
        MineState.MINE -> Colors.PURPLE
    }
}

/**
 * Setup [view] mouse event handlers
 */
fun Board.Cell.init(view: View, parent: Board) {
    this.view = view

    view.onDown {
        // Set initial action and perform.
        val action = getAction(it)
        if (action == Action.NONE) return@onDown

        parent.drag = DragInfo(action, pos)
        performAction(action)
        if (state == MineState.MINE) {
            // end action if mine
            parent.drag = null
        }
    }

    view.onDownFromOutside {
        // Perform action on drag in
        // End if mine.
        if (state == MineState.MINE) {
            parent.drag = null
            return@onDownFromOutside
        }

        val drag = parent.drag ?: return@onDownFromOutside
        val sameX = pos.x == drag.start.x
        val sameY = pos.y == drag.start.y
        if (drag.direction == Direction.NONE) {
            if (sameX.xor(sameY)) {
                drag.direction = if (sameX) Direction.COL else Direction.ROW
            }
        }
        if (sameX && drag.direction == Direction.COL || sameY && drag.direction == Direction.ROW) {
            performAction(drag.action)
        }
        if (state == MineState.MINE) {
            // end action if mine
            parent.drag = null
        }
    }
    view.onUp {
        parent.drag = null
    }
}

/**
 * Get [Action] to perform given the [event] and current [MineState]
 * If left click and unmarked, return [Action.CHECK]
 * If right click and unmarked, return [Action.MARK]
 * If right click and marked, return [Action.UNMARK]
 */
fun Board.Cell.getAction(event: MouseEvents) =
        when {
            event.button == MouseButton.RIGHT ||
            event.button == MouseButton.MIDDLE ||
            event.button == MouseButton.LEFT && (event.isShiftDown || event.isCtrlDown) -> when (state) {
                MineState.MARKED -> Action.UNMARK
                MineState.UNMARKED -> Action.MARK
                else -> Action.NONE
            }
            event.button == MouseButton.LEFT -> {
                when (state) {
                    MineState.UNMARKED -> Action.CHECK
                    else -> Action.NONE
                }
            }
            else -> Action.NONE
        }

/**
 * Perform action specified by [action]
 */
fun Board.Cell.performAction(action: Action) {
    action.execute(this)
    update()
}