import kotlin.random.Random
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class UtilsTest {
    @Test
    fun testFactorial() {
        assertEquals(1, 0.factorial())
        assertEquals(1, 1.factorial())
        assertEquals(2, 2.factorial())
        assertEquals(6, 3.factorial())
        assertEquals(24, 4.factorial())
        assertEquals(120, 5.factorial())

        assertEquals(3, 3.factorial(3))
        assertEquals(12, 4.factorial(3))
        assertEquals(4, 4.factorial(4))
        assertEquals(60, 5.factorial(3))
        assertEquals(20, 5.factorial(4))
        assertEquals(5, 5.factorial(5))
    }

    @Test
    fun testChoose() {
        assertEquals(10, 5.choose(2))
        assertEquals(210, 10.choose(6))
    }

    @Test
    fun testEnumerate() {
        val combinations = enumerateCombinations(10, 6)
        println(combinations.joinToString("\n") { it.joinToString() })
        assertEquals(10.choose(6), combinations.size)
    }

    @Test
    fun testPartition() {
        val n = 10
        val k = 6
        val dividers = k - 1
        val total = n + dividers
        val combinations = enumerateCombinations(total, dividers)
        val partitions = partition(n, k)
        assertEquals(combinations.size, partitions.size)

        for (i in partitions.indices) {
            val partition = partitions[i]
            val combination = combinations[i]
            println(i)
            println(combination.joinToString())
            println(partition.joinToString())
            assertEquals(k, partition.size)
            assertEquals(dividers, combination.size)
            assertEquals(n, partition.sum())

            val test = mutableListOf(-1)
            test.addAll(combination)
            test.add(total)
            for (j in 0 until test.size - 1) {
                assertEquals(test[j + 1], test[j] + partition[j] + 1)
            }
        }
    }

    @Test
    fun testCountRanges() {
        val len = 100
        val condition: (Boolean) -> Boolean = { !it }
        val mineList = List(len) { Random.nextBoolean() }
        val countList = mineList.countConsecutiveRange(condition)

        println("Mines: " + mineList.joinToString())
        println("Counts: " + countList.joinToString())

        val indexes = countList.fold((0 until 0).toSet()) { acc, value ->
            acc.union(value)
        }
        val match = mineList.mapIndexed { i, value ->
            // return true if condition is true and index is in countList
            // or if condition is false and index is not in countList
            !condition(value).xor(i in indexes)
        }.all { it }
        assertTrue(match)
    }
}