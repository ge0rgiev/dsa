/**
 * Merge Sort
 * 
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} arr - Unsorted Array 
 * @returns {number[]} = Sorted Array
 */
const fn = (arr) => {
    // Already sorted
    if (arr.length <= 1) return arr;

    // Split the array in two halves
    const midIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, midIndex);
    const rightHalf = arr.slice(midIndex);

    // Recursively sort both halves
    const sortedLeft = fn(leftHalf);
    const sortedRight = fn(rightHalf);

    return merge(sortedLeft, sortedRight);
}

const merge = (leftArr, rightArr) => {
    const result = [];
    let leftIndex = 0, rightIndex = 0;

    // Compare elements from both arrays and merge them into the result array
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from both arrays (if any)
    while(leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
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