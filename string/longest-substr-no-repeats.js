/**
 * Longest substring in a string with no repeats
 * 
 * @param {string} str - Original string
 * @returns {string} - Longest substring
 */
const fn = (str) => {
    let start = 0, maxLength = 0;
    const charMap = new Map();

    for (let end = 0; end < str.length; end++) {
        const currChar = str[end];

        // New substring when repetition is found.
        if (charMap.has(currChar)) {
            start = Math.max(start, charMap.get(currChar) + 1);
        }

        // (Re)Set char`s position
        charMap.set(currChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}


const tests = [
    'abcdefff',
    'abceee',
    'abcd',
    'aaaaaa'
];

for (const i in tests) {
    const str = tests[i];
    console.log(`${str} ? -> ${fn(str)}`)
}
