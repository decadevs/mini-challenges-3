// function listSorting(needle, haystack) {}

// module.exports = listSorting;


function listSorting(needle, haystack) {
    return [findFirstOccurrence(needle, haystack), findLastOccurrence(needle, haystack)];
};

const findFirstOccurrence = (needle, haystack) => {
    // Left and right pointers
    let left = 0;
    let right = needle.length - 1;
    // Index of first occurrence
    let firstOccurrence = -1;
    // Loop until the two pointers meet
    while (left <= right) {
        // Middle index
        let middle = left + parseInt((right - left) / 2);
        // Check if we have found the value
        if (needle[middle] === haystack) {
            firstOccurrence = middle;
            right = middle - 1;
        }
        // If the haystack is less than the element
        // at the middle index
        else if (haystack < needle[middle]) {
            right = middle - 1;
        }
        // If the haystack is greater than the element
        // at the middle index
        else {
            left = middle + 1;
        }
    }
    return firstOccurrence;
};

const findLastOccurrence = (needle, haystack) => {
    // Left and right pointers
    let left = 0;
    let right = needle.length - 1;
    // Index of first occurrence
    let lastOccurrence = -1;
    // Loop until the two pointers meet
    while (left <= right) {
        // Middle index
        let middle = left + parseInt((right - left) / 2);
        // Check if we have found the value
        if (needle[middle] === haystack) {
            lastOccurrence = middle;
            left = middle + 1;
        }
        // If the haystack is less than the element
        // at the middle index
        else if (haystack < needle[middle]) {
            right = middle - 1;
        }
        // If the haystack is greater than the element
        // at the middle index
        else {
            left = middle + 1;
        }
    }
    return lastOccurrence;
};

module.exports = listSorting;

console.log(listSorting([1, 2, 3, 4, 5], 5))





