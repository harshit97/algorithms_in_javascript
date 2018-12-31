/* 
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division? 
*/

function productArray(array) {
    if (array.length <= 1)
        return;
    let right_to_left = new Array(array.length),
        left_to_right = new Array(array.length);
    left_to_right[0] = array[0];
    right_to_left[array.length - 1] = array[array.length - 1];
    for (let i = 1; i < array.length; i++) {
        left_to_right[i] = left_to_right[i - 1] * array[i];
        right_to_left[array.length - 1 - i] = right_to_left[array.length - 1 - i + 1] * array[array.length - 1 - i];
    }
    /*     console.log(array);
        console.log(left_to_right);
        console.log(right_to_left); */
    array[0] = right_to_left[1];
    array[array.length - 1] = left_to_right[array.length - 2];
    for (let i = 1; i < array.length - 1; i++) {
        array[i] = left_to_right[i - 1] * right_to_left[i + 1];
    }
    return array;
}

// console.log(productArray([1, 2, 3, 4, 5]));

console.log(productArray([3,2,1]));