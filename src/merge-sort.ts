const mergeArrays = (left: number[], right: number[]): number[] => {
    let sortedArr: number[] = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

const mergeSort = (arr: number[]) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    
    return mergeArrays(left, right)
}

export { mergeSort}