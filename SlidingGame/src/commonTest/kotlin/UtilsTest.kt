import com.soywiz.kds.Array2
import com.soywiz.korma.geom.PointInt
import kotlin.test.*

class UtilsTest {

	// 4x4, 0 inversions, last row empty cell
	private val solvableBoard1 = sequence {
		yieldAll(0..15)
	}

	// 4x4, 1 inversion, second row from bottom empty cell
	private val solvableBoard2 = sequence {
		yield(1)
		yield(0)
		yieldAll(2..8)
		yield(15) // empty cell, 2nd row from bottom
		yieldAll(9..14)
	}

	// 4x4, 1 inversion, last row empty cell
	private val unsolvableBoard1 = sequence {
		yield(1)
		yield(0)
		yieldAll(2..15)
	}

	// 4x4, 0 inversion, second row from bottom empty cell
	private val unsolvableBoard2 = sequence {
		yieldAll(0..8)
		yield(15) // empty cell, 2nd row from bottom
		yieldAll(9..14)
	}

	// 3x3, 2 inversions
	private val solvableBoard3 = sequence {
		yieldAll(0..4)
		yieldAll(7..8)
		yieldAll(5..6)
	}

	// 3x3, 1 inversion
	private val unsolvableBoard3 = sequence {
		yieldAll(0..4)
		yield(6)
		yield(5)
		yieldAll(7..8)
	}

	@Test
	fun testIsSolvable() {
		assertTrue(Board(4, 4, solvableBoard1.toList()).isSolvable)
		assertTrue(Board(4, 4, solvableBoard2.toList()).isSolvable)
		assertTrue(Board(3, 3, solvableBoard3.toList()).isSolvable)
		assertFalse(Board(4, 4, unsolvableBoard1.toList()).isSolvable)
		assertFalse(Board(4, 4, unsolvableBoard2.toList()).isSolvable)
		assertFalse(Board(3, 3, unsolvableBoard3.toList()).isSolvable)
	}

	private val pathGrid1 = listOf(
		listOf(false, false),
		listOf(false, false),
		listOf(false, false),
		listOf(false, false)
	).mapIndexed { i: Int, list: List<Boolean> ->
		list.mapIndexed { j: Int, value: Boolean ->
			Pair(value, PointInt(j, i))
		}
	}.let { Array2(it) }

	private val pathGrid2 = listOf(
		listOf(false, false),
		listOf(false, false),
		listOf(true, false),
		listOf(false, false)
	).mapIndexed { i: Int, list: List<Boolean> ->
		list.mapIndexed { j: Int, value: Boolean ->
			Pair(value, PointInt(j, i))
		}
	}.let { Array2(it) }

	private val pathGrid3 = listOf(
		listOf(false, false),
		listOf(false, false),
		listOf(true, true),
		listOf(false, false)
	).mapIndexed { i: Int, list: List<Boolean> ->
		list.mapIndexed { j: Int, value: Boolean ->
			Pair(value, PointInt(j, i))
		}
	}.let { Array2(it) }

	@Test
	fun testPath() {
		val path1 = pathGrid1.getPath(PointInt(0, 3), PointInt(0, 0)) { it.first }
		testPath(path1, 4)
		val path2 = pathGrid2.getPath(PointInt(0, 3), PointInt(0, 0)) { it.first }
		testPath(path2, 6)
		assertFails {
			pathGrid3.getPath(PointInt(0, 3), PointInt(0, 0)) { it.first }
		}
	}

	private fun testPath(path: List<Pair<Boolean, PointInt>>, expectedLength: Int) {
		// Check if all items in path are adjacent
		val allAdjacent = path.map { it.second }.fold(Pair<Boolean, PointInt?>(true, null)) { acc, pointInt ->
			Pair(acc.first && acc.second?.isAdjacent(pointInt) != false, pointInt)
		}.first
		assertTrue(allAdjacent, "All items in path should be adjacent")
		assertEquals(expectedLength, path.size, "Path length does not match expected")
		assertTrue("Path should not include ignored blocks") { path.all { !it.first } }
	}
}
