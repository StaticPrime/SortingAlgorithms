function binarySearch(arr: number[], num: number): number {
    let index = 0
    let limit = arr.length - 1
    
    while (index < limit) {
        const point = Math.ceil((index + limit) / 2)
        const entry = arr[point]

        if (num > entry) {
            index = point + 1
        } else if (num < entry) {
            limit = point - 1
        } else {
            return point
        }
    }
    return -1
}

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch(testArray, 6))