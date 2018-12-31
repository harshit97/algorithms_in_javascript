function sortPeakValley(array) {
    let array_size = array.length,
        max_index;
    for (let index = 1; index < array_size; index += 2) {
        max_index = findMaxIndex(array, index, index + 1, index - 1);
        if (index != max_index)
            [array[index], array[max_index]] = [array[max_index], array[index]];
    }
    return array;
}

function findMaxIndex(array, index, indexNext, indexBefore) {
    let array_size = array.length,
        element = (index < array_size && index >= 0) ? array[index] : Number.MIN_SAFE_INTEGER,
        elementNext = (indexNext < array_size && indexNext >= 0) ? array[indexNext] : Number.MIN_SAFE_INTEGER,
        elementBefore = (indexBefore < array_size && indexBefore >= 0) ? array[indexBefore] : Number.MIN_SAFE_INTEGER;

    let max_value = Math.max(element, elementBefore, elementNext);
    if (element == max_value)
        return index;
    else if (elementBefore == max_value)
        return indexBefore;
    else
        return indexNext;
}

console.log(sortPeakValley([0, 1, 4, 7, 8, 9]));