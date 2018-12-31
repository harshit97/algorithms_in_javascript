function bubbleSort(arr) {
  let swapped = 1,
    arr_length = arr.length;
  for (let i = arr_length - 1; i >= 0 && swapped; i--) {
    swapped = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = 1;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
