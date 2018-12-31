function countingSort(array) {
    let max_number = Math.max(...array),
        min_number = Math.min(...array);
    let new_array = new Array(max_number + 1);
    new_array.fill(0);
    array.forEach(element => {
        new_array[element] += 1;
    });
    for (let i = min_number + 1; i <= max_number; i++) {
        new_array[i] += new_array[i - 1];
    }
    let result_array = new Array(array.length);
    array.forEach(element => {
        result_array[new_array[element] - 1] = element;
        new_array[element]--;
    });
    return result_array;
}

let array = [9, 4, 10, 8, 2, 4];
console.log(countingSort(array));