/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 function listSorting(haystack, needle) {
    if (!needle.length) return 0;

    // Loop through the haystack's letters
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check if the current letter matches the start of the needle
        if (haystack[i] === needle[0]) {
            // Loop through the needle
            for (let j = 0; ; j++) {
                // Reached the end of the needle (and thus fully found it at i)
                if (j == needle.length) {
                    return i;
                }
                // Letters not matched (needle not found at i)
                else if (haystack[i + j] !== needle[j]) {
                    break;
                }
            }
        }
    }
    return haystack;
}

console.log(listSorting(5, [1, 2, 3, 4, 5]));

module.exports = listSorting;