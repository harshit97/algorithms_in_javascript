function selectionSort(arr) {
    let arr_length = arr.length,
        min_number,
        min_index = 0;
    for (let i = 0; i < arr_length; i++) {
        min_number = Number.MAX_SAFE_INTEGER;
        for (let j = i; j < arr_length; j++) {
            if (arr[j] < min_number) {
                min_number = arr[j];
                min_index = j;
            }
        }
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
    return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1]));