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