function partition(arr: number[], start: number, end: number) {
    const pivotValue = arr[start]
    let swapIndex = start
    
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            swapIndex++
            if (i !== swapIndex) {
                // SWAP
                [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
            }
        }
    }
    if (swapIndex !== start) {
        // Swap pivot into correct place
        [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
}

function quickSort(arr: number[], start: number, end: number) {
    // Base case
    if (start >= end) return
    
    let pivotIndex = partition(arr, start, end)
    
    // Left
    quickSort(arr, start, pivotIndex - 1)
    
    // Right
    quickSort(arr, pivotIndex + 1, end)
    
    return arr
}

// Run Test
var testArray = [9, 32, 0, 15, 7, 3, 2, 1, 1, 11, 23, 24, 30, 16, 6, 5, 2, 19, 21, 4]
console.log(quickSort(testArray, 0, testArray.length - 1))