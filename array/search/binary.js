/**
 * Binary search
 * 
 * Time Compexity: O(log n)
 * Space Compexity: O(1)
 * 
 * @param {number[]} arr - Sorted array
 * @param {number} search - Searched number
 * @returns {boolean}
 */
const fn = (arr, search) => {
    let start = 0, end = arr.length - 1;

    while(start <= end) {
        const pivot = Math.floor((start + end) / 2);

        if (search === arr[pivot]) return pivot;

        if (search > arr[pivot]) start = pivot + 1;
        else end = pivot - 1;
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