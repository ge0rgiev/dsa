/**
 * Ternary Search
 * 
 * Time Complexity: O(log3 n)
 * Memory Complexity: O(1)
 * 
 * @param {number} left - Pointer to the First array element 
 * @param {number} right - Pointer to the Last array element
 * @param {number[]} arr - Sorted array
 * @param {number} search - Searched number
 * @returns {number} - Index of the founded element or -1
 */
const fn = (left, right, arr, search) => {
    if (right >= left) {
        const pivot1 = left + Math.floor((right - left) / 3);
        const pivot2 = right - Math.floor((right - left) / 3);

        if (search === arr[pivot1]) return pivot1;
        if (search === arr[pivot2]) return pivot2;

        // [X][][]
        if (search < arr[pivot1]) return fn(left, pivot1 - 1, arr, search);
        // [][][X]
        else if (search > arr[pivot2]) return fn(pivot2 + 1, right, arr, search);
        // [][X][]
        else return fn(pivot1 + 1, pivot2 - 1, arr, search);
    }

    return -1;
}

const tests = [
    [
        [1, 2, 3], 4, -1
    ],
    [
        [1, 2, 3, 4, 5], 3, 2
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10], 1, 0
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10], 5, 4
    ],
];

for (const i in tests) {
    const [arr, search, expected] = tests[i];
    const result = fn(0, arr.length - 1, arr, search);
    if (result === expected) {
        console.log(`${search} in ${arr} => ${result}`)
    }
    console.assert(result === expected, 
        `${search} in ${arr} => Expected: ${expected} Actual: ${result}`
    )
}