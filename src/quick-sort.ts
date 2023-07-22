const partition = (arr: number[], start: number, end: number) => {
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

const quickSort = (arr: number[], start: number, end: number) => {
    // Base case
    if (start >= end) return

    let pivotIndex = partition(arr, start, end)

    // Left
    quickSort(arr, start, pivotIndex - 1)

    // Right
    quickSort(arr, pivotIndex + 1, end)

    return arr
}

export { quickSort }