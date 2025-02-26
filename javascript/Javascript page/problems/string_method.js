const str = "Hello world Mongolia";

//Array List болгох
console.log(str.split(" "));

//Зай авахь зайг арилгах
console.log(str.trim()+ "Trim");

//concat нь String-үүдийг хооронд нь холбоно

let text1 = "Hello";
let text2 = "World";

console.log(text1.concat(text2, " heellloo", " bfhsdfhjsd"));

// to Uppercase & lowercaser

let text3 = "HELLOO";
let text4 = "worlllld";

console.log(text1.toLowerCase());

console.log(text2[0].toUpperCase());

// дотроос нь утга хайх boolen утга буцаана

const text5 = "Hello";
console.log(text5.includes("o"));

// тесктээс тасалж авах

const text6 = "Hello sndkjs World BVjkbdkj dBnv jdsnkl";
console.log(text6.slice(6, 12));
console.log(text6.slice(6, text6.length));
console.log(text6.slice(6));
console.log(text6.split(" ").indexOf("World"));