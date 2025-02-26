//Array Excercise

//1. Print All Elements
//2. Sum of all elements

const numbers = [10, 55, 9, 13, 68, 90, 9, 38, 69, 31, 55, 38, 90];
let sum = 0;
let reverseArray = [];
        // for (let i = 0; i < numbers.length; i++) {
        //     console.log(`Element ${i+1}: ${numbers[i]}`);
        //     //Sum
        //     sum = sum + numbers[i];
        // }
        // console.log(`Sum elements: ${sum}`);

//3. find the Largest number

        // let max = numbers[0];
        // for (let j = 1; j < numbers.length; j++) {
        // if (max < numbers[j]) {
        //     max = numbers[j]
        // }
        // }
        // console.log(max);

// 4. Reverse an array

        // for (let i = numbers.length-1; i >= 0; i--) {
        //     reverseArray.push(numbers[i]);
        // }
        // console.log(reverseArray);

// 5. Count odd and even numbers

        // let oddNumbers = [];
        // let evenNumbers = [];
        // for(let j = 0; j < numbers.length; j++){
        //     if(numbers[j] % 2 == 0){
        //         evenNumbers.push(numbers[j]);
                
        //     } else{
        //         oddNumbers.push(numbers[j]);
                
        //     }
        // }
        // console.log(`Тэгш тоонууд: ${evenNumbers.length} - ${evenNumbers}`);
        // console.log(`Сондгой тоонууд: ${oddNumbers.length} - ${oddNumbers}`);


// 6. remove duplicates
        // const array = [1, 2, 1, 2, 3, 1];
        // const removedDuplicates = []
        // for (let i = 0; i < array.length; i++) {
        //     let isDuplicate = false;
        //     for (let j = i + 1; j < array.length; j++) {
        
        //         if(array[i] === array[j]) {
        //             isDuplicate = true;            
        //             console.log('is duplicate');
        //             break;
        //         }        
        //     }
        //     if(!isDuplicate) {
        //         removedDuplicates.push(array[i]);
        //     }
        // }
        // console.log(removedDuplicates);
       

//7. Find Index 0f Element

        let element = 13;
        for(let i=0; i < numbers.length; i++){
            if(element == numbers[i]){
                console.log(`${element} гэдэг тоо нь ${i} дахь элемент юм.`);
                break;
            }
        }




