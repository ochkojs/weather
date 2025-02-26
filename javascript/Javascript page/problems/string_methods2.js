// 1. 'Ad est cupidatat culpa dolor.' //      string to array bolgo 'Whitespace' (use split)// 

        // const title = "Ad est cupidatat culpa dolor.";

        // let array1 = (title.split(" "));

        // console.log(array1);

// 2. '  Et dolor culpa do deserunt exercitation proident enim. '
// trim hiigeed araas split hiij array bolgo.// // 

        // let title1 = "  Et dolor culpa do deserunt exercitation proident enim. ";

        // title1 = title1.trim();

        // console.log(title1);

        // let array2 = title1.split(" ");

        // console.log(array2);

// 3. 'Eu commodo consequat do cillum eu occaecat deserunt enim.'
// 'a' useg orson text hevle  

// const title2 = "Eu commodo consequat do cillum eu occaecat deserunt enim.";

        // function textA(titleA){
        //     let array3 = titleA.split(" ");
        //     for (let i = 0; i < array3.length; i++) {
        //         if(array3[i].includes("a")){
        //             console.log(array3[i]);
        //         }
        //     }
        // }

// let title2 = "Earlier in this tutorial, you learned that functions are declared with the following syntax";

        // console.log(textA("Earlier in this tutorial, you learned that functions are declared with the following syntax"));


// 4. Count Occurrences of a Character//    function countChar(str, char) {//    //    }//    console.log(countChar("hello world", "")); // 3


        // function countChar(str, char) {
        //     let count = 0;
        //     for (let i = 0; i < str.length; i++) {
        //         if (str[i] == char) {
        //             count = count + 1;
        //         }
        //     }
        //     console.log(count);
        // }
        // console.log(countChar("anonymous self-invoking function", "n"));



//  5. Reverse Each Word// function reverseEachWord(sentence) {// }//  console.log(reverseEachWord("hello world")); // olloeh dlrow//  

function reverseEachWord(sentence){
    sentenceArray = sentence.split(' ');
    for (let i = 0; i < sentenceArray.length; i++) {
        console.log(sentence.sentenceArray[i]);
        
    }
}

console.log(reverseEachWord("hello world"));





// 6. Split a String into Chunks//   function chunkString(str, size) {// }// console.log(chunkString("HelloWorld", 3)); // ["Hel", "loW", "orl", "d"]