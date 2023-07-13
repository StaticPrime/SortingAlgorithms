/**
 * This is not memory optimized, as it doesn't perform the sort in place. However, this is a simple
 * quick sort.
 * @param array
 * @returns 
 */
function simpleQuickSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return simpleQuickSort(left).concat(pivot, simpleQuickSort(right));
}

// Run the test
var testArray = [9, 32, 0, 15, 7, 3, 2, 1, 1, 11, 23, 24, 30, 16, 6, 5, 2, 19, 21, 4]
console.log(simpleQuickSort(testArray))