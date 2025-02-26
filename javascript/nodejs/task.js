
let name = "Jack";

let num = 10;

let num2 = 20;

let sum = 0;

let city = "Ulaanbaatar";

let booksCategory = ["History", "kids", "movie", "languge"];

let isOk = true;

console.log("---------------");

// -------------if condition ----------------------------------

let num3 = 4;
let num4 = 3;
let num5 = 5;

if (num3 < num4) {
    console.log(`их тоо нь: ${num4}`);
} else{
    console.log(`их тоо нь: ${num3}`);
}

console.log("---------------");

if (num3 > num4 && num3 > num5) {
    console.log(`3 тооны их нь: ${num3}`);
} if (num4 > num3 && num4 > num5) {
    console.log(`3 тооны их нь: ${num4}`);
} if (num5 > num4 && num5 > num3) {
    console.log(`3 тооны их нь: ${num5}`);
}

console.log("---------------");

// ----------------------------------------------------------

sum = num + num2;

console.log(`sum: ${sum}`);

// -----------------LOOP-------------------------------------

let number = 100;

for (let i = 0; i <= number; i++) {
    console.log(i);
}
console.log("---------------");


for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
        console.log(`Тэгш тоо: ${i}`);
     }
}
console.log("---------------");

for (let i = 0; i <= number; i++) {
    if (i % 2 == 1) {
        console.log(`Сондгой тоо: ${i}`);
     }
}
console.log("---------------");

for (let i = 0; i <= number; i++) {
    if (i % 10 == 0) {
        console.log(i);
    }
}
console.log("---------------");


// -----------------ARRAY-----------------------------------------

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(`element index${i}: ${array[i]}`);
}
console.log("---------------");

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        console.log(`element${i}: ${array[i]}`);
    }
}
console.log("---------------");

let sum1 = 0;
for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
}
console.log(`sum: ${sum1}`);

console.log("---------------");

for (let i = 0; i < array.length; i++) {
    array[i] += 2;
}
console.log(`2-р нэмэгдүүлэв: ${array}`);

console.log("---------------");


// -----------------FUNCTION-----------------------------------------

function func1(param) {
    return console.log(param);
}
func1(100);

console.log("---------------");

function summary(a, b) {
    return console.log(a + b);
}
summary(10, 20);

console.log("---------------");

function yalgavar(a, b) {
    return console.log(a - b);
}
yalgavar(50, 15);

console.log("---------------");

function noogdor(a, b) {
    return console.log(a / b);
}
noogdor(50, 10);

console.log("---------------");

function urjver(a, b) {
    return console.log(a * b);
}
urjver(50, 10);

// -----------------OBJECT-----------------------------------------

let obj = [
    {
        name: "jack",
        age: 25,
        gender: "male",
    }
]