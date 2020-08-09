import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.ui.textButton
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.AsyncSignal
import com.soywiz.korio.lang.Closeable
import kotlin.math.min

suspend fun main() = Korge(width = 1600, height = 900, bgcolor = Colors["#2b2b2b"]) {
	var board: Board? = null
	var boardContainer: Container? = null
	var gameOverText: Text? = null
	var gameOverCloseable: Closeable? = null
	val newGame = AsyncSignal<Unit>()
	var boardWidth = 4
	var boardHeight = 4

	val buttonContainer = container {
		position(40, 40)
		val newGameButton = textButton(text = "New Game") {
			onClick {
				newGame(Unit)
			}
		}
		textButton(text = "Solve") {
			alignLeftToRightOf(newGameButton, 20.0)
			onClick {
			}
		}
		val widthConf = configuration(
			"Width:",
			boardWidth,
			{ "$it" },
			0..Int.MAX_VALUE,
			{ boardWidth = it }
		) {
			alignTopToBottomOf(newGameButton, 20.0)
		}
		configuration(
			"Height:",
			boardHeight,
			{ "$it" },
			0..Int.MAX_VALUE,
			{ boardHeight = it }
		) {
			alignTopToTopOf(widthConf)
			alignLeftToRightOf(widthConf, 40.0)
		}
	}

	newGame {
		removeChild(boardContainer)
		removeChild(gameOverText)
		gameOverCloseable?.close()
		board?.cleanUp()

		board = Board(boardWidth, boardHeight).also {
			position(100, 100)
			val blockSize = min(views.virtualWidth / (boardWidth * 1.1) * 4 / 5, views.virtualHeight / (boardHeight * 1.1) / 2)
			boardContainer = createBoard(it, blockSize)
			boardContainer?.alignTopToBottomOf(buttonContainer, 20.0)
			gameOverCloseable = it.gameOver {
				gameOverText = text("Game Over") {
					position(20.0, 20.0)
				}
			}
		}
	}

	newGame(Unit)
}

/**
 * Generate [Board] UI.
 * Show the empty counts next to the rows/columns
 */
fun Container.createBoard(board: Board, blockSize: Double = 100.0) =
	container {
		val size = blockSize.coerceAtMost(100.0)
		val padding = size / 10
		for (i in 0 until board.width) {
			for (j in 0 until board.height) {
				val cell = board[i, j]
				if (cell is Board.FragmentCell) {
					solidRect(size, size, color = Colors.WHITE) {
						position(i * (size + padding), j * (size + padding))
						text(cell.index.toString(), textSize = (size / 2).coerceAtMost(16.0), color = Colors.BLACK) {
							position(5, 5)
						}
						cell.init(this, board, size * 1.1)
					}
				}
			}
		}
		board.init(this, size * 1.1)
	}

fun Container.configuration(
	label: String,
	initial: Int,
	format: (Int) -> String,
	range: IntRange,
	ntfy: suspend (Int) -> Unit,
	callback: @ViewsDslMarker Container.() -> Unit = {}
) = container {
	var newVal = initial
	val countSignal = AsyncSignal<Int>()
	countSignal.add(ntfy)
	val countLabel = text(label)
	val countMinus = text("-") {
		alignLeftToRightOf(countLabel, 20.0)
		onClick {
			newVal = (newVal - 1).coerceIn(range)
			countSignal(newVal)
		}
	}
	val countText = text(format(newVal)) {
		alignLeftToRightOf(countMinus, 20.0)
		countSignal {
			text = format(newVal)
		}
	}
	text("+") {
		alignLeftToRightOf(countText, 20.0)
		onClick {
			newVal = (newVal + 1).coerceIn(range)
			countSignal(newVal)
		}
	}
}.apply(callback)
