function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        const curVal = arr[i]
        
        let j: number
        for (j = i -1; j >= 0 && arr[j] > curVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = curVal
    }
    return arr
}

// Run Test
var testArray = [9, 32, 0, 15, 7, 3, 2, 1, 1, 11, 23, 24, 30, 16, 6, 5, 2, 19, 21, 4]
console.log(...insertionSort(testArray))