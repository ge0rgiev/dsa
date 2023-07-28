/**
 * Linear search
 * 
 * Time Compexity: O(n)
 * Memory Compexity: O(1)
 *  
 * @param {number[]} arr 
 * @param {number} search 
 * @returns {number}
 */
const fn = (arr, search) => {
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] === search) return i;
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
    ]
];

for (const i in tests) {
    const [arr, search, expected] = tests[i];
    const result = fn(arr, search);
    if (result === expected) {
        console.log(`${search} in ${arr} => ${result}`)
    }
    console.assert(result === expected, 
        `${search} in ${arr} => Expected: ${expected} Actual: ${result}`
    )
}
