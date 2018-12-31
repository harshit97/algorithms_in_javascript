// Shell sort is generalized version of insertion sort
// Shell sort formula from Yusuf Shakeel video, it can vary depending on situation

function shellSort(array) {
    let array_length = array.length;
    for (let gap = Math.floor(array_length / 2); gap >= 1; gap--) {
        for (let i = 0; i + gap < array_length; i++) {
            if (array[i] > array[i + gap])
                [array[i], array[i + gap]] = [array[i + gap], array[i]];
        }
    }
    return array;
}

console.time("ShellSort");
console.log(shellSort([14, 18, 19, 37, 23, 40, 29, 30, 11]));
console.timeEnd("ShellSort");