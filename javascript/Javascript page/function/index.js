// Exercise 1: Sum of all numbers in an array

        // const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];

        // function sumArray(numbers) {
        //     let sum = 0;
        //     for (let i = 0; i < numbers.length; i++) {
        //         sum = sum + numbers[i];
        //     }
        //     return sum;
        // }
        // console.log(sumArray(numbers)); // Output: 52



// Exercise 2: Find the largest number in an array


        // let max = numbers[0];
        // function findLargest(numbers) {
        //     for (let i = 1; i < numbers.length; i++) {
        //         if (max > numbers[i]) {
                    
        //         }
        //         console.log(max);
        // }
        // }

        // console.log(findLargest(numbers)); // Output: 10


// Exercise 3: Filter out even numbers from an array

        // function filterEvenNumbers(numbers) {

        //     let oddNumbers = numbers.map((value, index, array) => {
        //         if (value % 2 == 0) {
        //         }
        //     });
        //     console.log(oddNumbers);
        //     // for (let i = 0; i < numbers.length; i++) {
        //     //     if (numbers[i] % 2 == 0) {
        //     //         console.log(numbers[i]);
        //     //     }
        //     // }
        // }

        // console.log(filterEvenNumbers(numbers)); // Output: [1, 3, 5, -1, -3, 7, 9]



// Exercise 5: Check if all elements in an array are positive

        // let n = true;
        // function allPositive(numbers) {
        //     for (let i = 0; i < numbers.length; i++) {
        //         if (numbers[i] >= 0) {
        //             console.log(false);
        //             break;
        //         }
        //         console.log(n);
        //     }
        // }

        // console.log(allPositive(numbers)); // Output: false


// Exercise 4: Double the values in an array

        // function doubleValues(numbers) {
        //     const doubleNumbers = numbers.map((value, index, array) => {
        //         return value * 2;
        //     });
        //     console.log(doubleNumbers);
        // }
        // console.log(doubleValues(numbers)); // Output: [2, 4, 6, 8, 10, -2, -4, 12, 14, 16, 18, 20]


// Exercise 6: Find the first negative number in an array

        // function findFirstNegative(numbers) {
        //     for (let i = 0; index < numbers.length; index++) {
        //         if (numbers[i] < 0) {
        //             console.log(numbers[i]);
        //             break;
        //         }
                
        //     }

        //     }

        // console.log(findFirstNegative(numbers)); // Output: -1


// Exercise 7: Sort an array in ascending order
// Exercise 9: Reverse an array
// Exercise 10: Flatten a nested array





// const arr = [4, -2, 0 , 3, 2];

// for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     if (arr[i] > arr[i+1]) {
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }

// }
// console.log(arr);

// console.log(sortArray(numbers)); // Output: [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
        let element;
        for (let j = numbers.length-1; j >= 0; j--) {
                element = numbers[i];
                numbers[i] = array[j];
                numbers[j] = element;
        }
}
console.log(numbers);

// console.log(reverseArray(numbers)); // Output: [10, 9, 8, 7, 6, -2, -1, 5, 4, 3, 2, 1]
// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]






