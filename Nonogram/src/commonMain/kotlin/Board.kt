import com.soywiz.kds.Array2
import com.soywiz.kds.Extra
import com.soywiz.korio.async.Signal
import com.soywiz.korma.geom.PointInt
import com.soywiz.korma.geom.ds.get
import com.soywiz.korma.geom.ds.set
import kotlin.random.Random

enum class MineState { UNMARKED, EMPTY, MARKED, MINE }

/**
 * Class to maintain board state
 */
class Board(val width: Int = 5, val height: Int = 5, private val mineCount: Double = 0.25) : Extra by Extra.Mixin() {

    data class CountPosition(
            // Use this value and the column position of the cell to get the count
            val rowPosition: Int = -1,
            // Use this value and the row position of the cell to get the count
            val colPosition: Int = -1
    )

    /**
     * Class to maintain the consecutive empty block count and signal when all the blocks in this span are done.
     */
    data class EmptyCount(
            val numEmpty: Int = 0,
            var numFlagged: Int = 0,
            var lastPoint: Int? = null,
            val signalDone: Signal<Int> = Signal()
    )

    data class Count(
            val numEmpty: Int = 0,
            val comlete: Boolean = false,
            val lastPoint: Int? = null
    )

    /**
     * Class to maintain cell state
     */
    inner class Cell(x: Int, y: Int) : Extra by Extra.Mixin() {
        val pos = PointInt(x, y)
        var state = MineState.UNMARKED
            private set

        fun mark() {
            if (state == MineState.UNMARKED) state = MineState.MARKED
        }

        fun unmark() {
            if (state == MineState.MARKED) state = MineState.UNMARKED
        }

        fun check() {
            if (state == MineState.UNMARKED) {
                if (mineMap[pos]) {
                    state = MineState.MINE
                    mistakeSignal(Unit)
                } else {
                    state = MineState.EMPTY
                    emptyFlaggedSignal(pos)
                }
            }
        }
    }

    private val gameOverSignal = Signal<Int>()
    private val emptyFlaggedSignal = Signal<PointInt>()
    private val mistakeSignal = Signal<Unit>()

    private val mineMap = Array2(width, height) { Random.nextDouble() < mineCount }
    val cells = Array2(width, height) { Cell(it % width, it / width) }

    private val emptyCount = mineMap.count { !it }
    private var emptyFlaggedCount = 0
    private var mistakeCount = 0

    private val countMap = Array2(width, height) { CountPosition() }
    private val colEmptyCount: List<List<EmptyCount>>
    private val rowEmptyCount: List<List<EmptyCount>>

    /**
     * List of size [width], holds the counts for each column
     */
    val emptyCountCol: List<List<Count>>
        get() = colEmptyCount.map { list ->
            list.map { Count(it.numEmpty, it.numFlagged == it.numEmpty, it.lastPoint) }
        }

    /**
     * List of size [height], holds the counts for each row
     */
    val emptyCountRow: List<List<Count>>
        get() = rowEmptyCount.map { list ->
            list.map { Count(it.numEmpty, it.numFlagged == it.numEmpty, it.lastPoint) }
        }

    init {
        // generate the counts for each row/column
        val emptyCountCol = List(width) { mutableListOf<Int>() }
        val emptyCountRow = List(height) { mutableListOf<Int>() }
        cells.forEach {
            if (!mineMap[it.pos]) {
                val posX = it.pos.x
                val posY = it.pos.y
                val countCol = emptyCountCol[posX]
                val countRow = emptyCountRow[posY]
                // For this row, if first empty position since last mine, add 1 to list.
                // Otherwise, increment last value
                if (posX == 0 || mineMap[posX - 1, posY]) {
                    countRow.add(1)
                } else {
                    countRow[countRow.size - 1] = countRow.last().inc()
                }
                // For this col, if first empty position since last mine, add 1 to list.
                // Otherwise, increment last value
                if (posY == 0 || mineMap[posX, posY - 1]) {
                    countCol.add(1)
                } else {
                    countCol[countCol.size - 1] = countCol.last().inc()
                }
                // Maintain position of count relating to this cell
                countMap[it.pos] = CountPosition(countRow.size - 1, countCol.size - 1)
            }
        }
        this.rowEmptyCount = emptyCountRow.map { list ->
            list.map { EmptyCount(it) }
        }
        this.colEmptyCount = emptyCountCol.map { list ->
            list.map { EmptyCount(it) }
        }


        emptyFlaggedSignal {
            // Check if count done value changed
            val countPosition = countMap[it]
            val colCount = colEmptyCount[it.x][countPosition.colPosition]
            colCount.numFlagged += 1
            if (colCount.numFlagged >= colCount.numEmpty) {
                colCount.lastPoint = it.y
                colCount.signalDone(it.y)
            }
            val rowCount = rowEmptyCount[it.y][countPosition.rowPosition]
            rowCount.numFlagged += 1
            if (rowCount.numFlagged >= rowCount.numEmpty) {
                rowCount.lastPoint = it.x
                rowCount.signalDone(it.x)
            }

            // Check if game over
            emptyFlaggedCount++
            println("Remaining count ${emptyCount - emptyFlaggedCount}")
            if (emptyFlaggedCount == emptyCount) {
                gameOverSignal(mistakeCount)
            }
        }

        mistakeSignal {
            mistakeCount++
        }
    }

    operator fun get(x: Int, y: Int) = cells[x, y]

    /**
     * Register [handler] for game over event
     */
    fun gameOver(handler: (Int) -> Unit) = gameOverSignal.once(handler)

    /**
     * Register [handler] for count done change event
     */
    fun onColCountDone(col: Int, count: Int, handler: (Int) -> Unit) = colEmptyCount[col][count].signalDone.once(handler)

    /**
     * Register [handler] for count done change event
     */
    fun onRowCountDone(row: Int, count: Int, handler: (Int) -> Unit) = rowEmptyCount[row][count].signalDone.once(handler)

    fun cleanUp() {
        mistakeSignal.clear()
        emptyFlaggedSignal.clear()
        gameOverSignal.clear()
        colEmptyCount.forEach { list ->
            list.forEach {
                it.signalDone.clear()
            }
        }
        rowEmptyCount.forEach { list ->
            list.forEach {
                it.signalDone.clear()
            }
        }
    }
}