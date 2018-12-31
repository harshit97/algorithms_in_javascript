/* 
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass? 
*/

function twoSumToK(array, k) {
    let map = new Map(),
        flag = 0;
    for (let i = 0; i < array.length; i++) {
        if (map.has(k - array[i])) {
            flag = 1;
            break;
        } else {
            map.set(array[i], array[i]);
        }
    }
    return (flag === 1);
}

console.log(twoSumToK([10, 15, 3, 7], 17));