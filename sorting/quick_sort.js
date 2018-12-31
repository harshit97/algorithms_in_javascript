function partition(array, low, high) {
    random_pivot(array, low, high);
    let i = low,
        j = high,
        pivot = array[high];
    while (i < j) {
        while (array[i] < pivot)
            i++;
        while (array[j] >= pivot)
            j--;
        if (i < j)
            [array[i], array[j]] = [array[j], array[i]];
    }
    [array[i], array[high]] = [array[high], array[i]];
    return i;
}

function quicksort(array, low, high) {
    if (low < high) {
        let pivot_index = partition(array, low, high);
        quicksort(array, low, pivot_index - 1);
        quicksort(array, pivot_index + 1, high);
    }
}

function random_pivot(array, low, high) {
    if (low < high) {
        let random_number = Math.random() * (high - low) + low;
        random_number = Math.floor(random_number);
        [array[random_number], array[high]] = [array[high], array[random_number]];
    }
}

let array = [6, 5, 8, 9, 3, 10, 15, 12, 16];
quicksort(array, 0, array.length - 1);

console.log(array);