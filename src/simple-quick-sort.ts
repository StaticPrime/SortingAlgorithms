const simpleQuickSort = (array: number[]): number[] => {
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

export { simpleQuickSort }