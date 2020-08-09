import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.ui.textButton
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.AsyncSignal
import com.soywiz.korio.async.launch
import com.soywiz.korio.lang.Closeable
import com.soywiz.korma.geom.PointInt
import kotlinx.coroutines.channels.Channel
import kotlin.math.min

suspend fun main() = Korge(width = 1600, height = 900, bgcolor = Colors["#2b2b2b"]) {
    var board: Board? = null
    var boardContainer: Container? = null
    var gameOverText: Text? = null
    var gameOverCloseable: Closeable? = null
    val newGame = AsyncSignal<Unit>()
    var channel: Channel<PointInt>? = null
    var boardWidth = 5
    var boardHeight = 5
    var minePercent = 5

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
                board?.let { board ->
                    enabled = false
                    Solver.solve(board) {
                        channel?.send(it)
                    }
                    enabled = true
                }
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
        val heightConf = configuration(
                "Height:",
                boardHeight,
                { "$it" },
                0..Int.MAX_VALUE,
                { boardHeight = it }
        ) {
            alignTopToTopOf(widthConf)
            alignLeftToRightOf(widthConf, 40.0)
        }
        configuration(
                "Mine Percent:",
                minePercent,
                { "${it * 10}%" },
                0..10,
                { minePercent = it }
        ) {
            alignTopToTopOf(heightConf)
            alignLeftToRightOf(heightConf, 40.0)
        }
    }

    newGame {
        removeChild(boardContainer)
        removeChild(gameOverText)
        gameOverCloseable?.close()
        board?.cleanUp()
        channel?.close()

        board = Board(boardWidth, boardHeight, (minePercent.toDouble() / 10).coerceIn(0.0, 1.0)).also {
            val blockSize = min(views.virtualWidth / (boardWidth * 1.2), views.virtualHeight / (boardHeight * 1.2)) / 2
            boardContainer = createBoard(it, blockSize)
            boardContainer?.alignTopToBottomOf(buttonContainer, 20.0)
            gameOverCloseable = it.gameOver { mistakes ->
                println("Game Over, mistakes: $mistakes")
                gameOverText = text("Game Over, Mistakes made: $mistakes") {
                    position(20.0, 20.0)
                }
            }
        }
        channel = Channel()
        launch {
            channel?.also {
                for (i in it) {
                    board?.get(i.x, i.y)?.update()
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
fun Container.createBoard(board: Board, blockSize: Double = 40.0) =
        container {
            position(100, 100)
            val size = blockSize.coerceAtMost(40.0)
            val padding = size / 5
            for (i in 0 until board.width) {
                for (j in 0 until board.height) {
                    solidRect(size, size, color = Colors.WHITE) {
                        position(i * (size + padding), j * (size + padding))
                        board[i, j].init(this, board)
                    }
                }
            }
            for (i in 0 until board.width) {
                for (j in board.emptyCountCol[i].indices) {
                    text(board.emptyCountCol[i][j].numEmpty.toString(), textSize = (size/2).coerceAtMost(16.0)) {
                        position(i * (size + padding), (j + board.height) * (size + padding))
                        board.onColCountDone(i, j) {
                            color = Colors.DARKGRAY
                        }
                    }
                }
            }
            for (j in 0 until board.height) {
                for (i in board.emptyCountRow[j].indices) {
                    text(board.emptyCountRow[j][i].numEmpty.toString(), textSize = (size/2).coerceAtMost(16.0)) {
                        position((i + board.width) * (size + padding), j * (size + padding))
                        board.onRowCountDone(j, i) {
                            color = Colors.DARKGRAY
                        }
                    }
                }
            }
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