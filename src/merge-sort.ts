function merge(left: number[], right: number[]): number[] {
    // the sorted items will go here
    let sortedArr = []

    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr: number[]) {
    // Base case
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    
    return merge(left, right)
}

// Run the test
var testArray = [9, 32, 0, 15, 7, 3, 2, 1, 1, 11, 23, 24, 30, 16, 6, 5, 2, 19, 21, 4]
console.log( mergeSort(testArray))