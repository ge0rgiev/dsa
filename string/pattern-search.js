/**
 * How many times pattern occurs in string
 * 
 * Time complexity: O(n)
 * Memory complexity: On(1)
 * 
 * @param {*} str - Original string
 * @param {*} pattern - Searched pattern
 * @returns {number}
 */
const fn = (str, pattern) => {
    let occurences = 0, patternIndex = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === pattern[patternIndex]) {
            patternIndex++;
            if (patternIndex === pattern.length) {
                occurences++;
                patternIndex = str[i] === pattern[0] ? 1 : 0;
            }
        } else {
            patternIndex = str[i] === pattern[0] ? 1 : 0;
        }
    }

    return occurences;
}

const tests = [
    ['lollol', 'lol'],
    ['lolol', 'lol'],
    ['lolol', 'abc'],
];

for (const i in tests) {
    const [str, search] = tests[i];
    console.log(`${search} in ${str} ? -> ${fn(str, search)} times`)
}
