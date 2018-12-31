function insertionSort(array) {
    let array_length = array.length;
    let j;
    for (let i = 1; i < array_length; i++) {
        j = i;
        while (array[j] < array[j - 1] && j >= 1) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            j--;
        }
    }
    return array;
}

console.time("InsertionSort");
console.log(insertionSort([14, 18, 19, 37, 23, 40, 29, 30, 11]));
console.timeEnd("InsertionSort");