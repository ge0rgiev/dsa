/**
 * Bubble Sort
 * 
 * Time Complexity: O(n^2)
 * Memory Complexity: O(1)
 * 
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} - Sorted array
 */
const fn = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    return arr;
}

const tests = [
    [
        [1, 3, 2], [1, 2, 3]
    ],
    [
        [5, 3, 2, 4, 1], [1, 2, 3, 4, 5]
    ],
    [
        [1, 6, 5, 4, 3, 9, 7, 8, 2 , 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ]
];

for (const i in tests) {
    const [unsorted, sorted] = tests[i];
    const unsortedCopy = JSON.parse(JSON.stringify(unsorted));
    const result = fn(unsorted);
    if (result.toString() === sorted.toString()) {
        console.log(`${unsortedCopy} => ${result}`)
    }
    console.assert(result.toString() === sorted.toString(), 
        `${unsorted} => Expected: ${sorted} Actual: ${result}`
    )
}