// let score = prompt("Please enter score?");

// if(score >= 90 && score <= 100){
//     alert(`A`);
// } else if(score < 90 && score >= 80){
//     alert('B');
// } else if(score < 80 && score >= 70){
//     alert(`C`);
// } else if(score < 70 && score >= 60){
//     alert(`D`);
// } else {
//     alert(`F`);
// }


// -------------------------------

// let sar = prompt("Хэд дүгээр сар вэ?");

// if(sar >= 3 && 5 >= sar){
//     alert(`Хавар`);
// } else if(sar >= 6 && 8 >= sar){
//     alert(`Зун`);
// } else if(sar >=9 && 11 >=sar){
//     alert(`Намар`);
// } else if(sar == 12 || sar == 1 || sar == 2){
//     alert(`Өвөл`);
// } else{
//     alert(`1-12 ын хооронд утга оруулна уу?`);
// }



// ----------------------------------

// let day = prompt("What is day today?");

// if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
//     alert(`${day} is Working day`);
// } else if(day == "Saturday" || day == "Sunday"){
//     alert(`${day} is Weekend`);
// } else{
//     alert("Day is wrong!");
// }

//--------------------------------------------

// let month = prompt("Enter a month");

// if(month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december"){
//     alert(`${month} has 31 days`);
// } else if(month == " april" || month == "june" || month == "september" || month == "november"){
//     alert(`${month} has 30 days`);
// } else if(month == "february"){
//     alert(`${month} has 28 days`);
// } else{
//     alert("value is incorrect");
// }



//-------------------------------------------- 

// let day = Number(prompt('Өдрөө оруулна уу?'));

// switch (day){
//     case 1:
//         alert("Даваа гариг");
//         break;
//     case 2: 
//         alert("Мягмар гариг");
//         break;
//     case 3:
//         alert("Лхагва гариг");
//         break;
//     case 4:
//         alert("Пүрэв гариг");
//         break;
//     case 5: 
//         alert("Баасан гариг");
//         break;
//     case 6:
//         alert("Бямба гариг");
//         break;
//     case 7:
//         alert("Ням гариг");
//         break;
//     default: 
//     alert("1-7 хооронд утга оруулна уу?");
// }


//-------------------------------------------- 

// const name = prompt('Таны нэр?');

// alert('Сайн байна уу ' + name + '!');

// let result = name;

// const age = Number(prompt('Таны нас? (20, 25, 30, 35)'));

// switch(age){
//     case 20: 
//         alert(name + ' таны нас ' + age);
//         break;
//     case 25:
//         alert(name + ' таны нас ' + age);
//         break;
//     case 30:
//         alert(name + ' таны нас ' + age);
//         break;
//     case 35:
//         alert(name + ' таны нас ' + age);
//         break;
//     default:
//         alert('20, 25, 30, 35 аль нэгийг нь оруулна уу');
//         break;
// }

// result = result + ' таны нас: ' + age;

// let height = Number(prompt('Таны өндөр (155, 160, 165, 170)'));

// switch (height) {
//     case 155:
//         alert(result + ', өндөр ' + height);
//         break;
//     case 160:
//         alert(result + ', өндөр ' + height);
//         break;
//     case 165:
//         alert(result + ', өндөр ' + height);
//         break;
//     case 170:
//         alert(result + ', өндөр ' + height);
//         break;
//     default:
//         alert('155, 160, 165, 170 аль нэг утгыг оруулна уу?')
//         break;
// }

// result = result + ', өндөр ' + height;


// let weight = Number(prompt('Жингээ оруулна уу? (55, 60, 65, 70)'));

// switch (weight) {
//     case 55:
//         alert(result + ', жин ' + weight);
//         break;
//     case 60:
//         alert(result + ', жин ' + weight);
//         break;
//     case 65:
//         alert(result + ', жин ' + weight);
//         break;
//     case 70:
//         alert(result + ', жин ' + weight);
//         break;
//     default: alert('55, 60, 65, 70 аль нэгийг оруулна уу?')
//         break;
// }

// result = result + ', жин ' + weight;

// let finalResult1 =  name + "20" + "155" + "55";
// let finalResult2 =  name + "25" + "160" + "60";
// let finalResult3 =  name + "30" + "165" + "65";
// let finalResult4 =  name + "35" + "170" + "70";
// let resultall = name + age + height + weight;

// switch (resultall) {
//     case finalResult1:
//         alert('Таны size: M');
//         break;
//     case finalResult2:
//         alert('Таны size: L');
//         break;
//     case finalResult3:
//         alert('Таны size: XL');
//         break;
//     case finalResult3:
//         alert('Таны size: XXL');
//         break;
//     default:
//         alert('Таны size: Тодорхойгүй');
//         break;
// }



//-------------------------------------------- 

// const n = prompt("please enter a number");
// const j = prompt('Хуваах тоо');
// let urjver = 1;
// let sum=0;
// for(let i = 1; i <= n; i++){
//     sum = sum + i;
//     urjver = urjver * i;
// }
// alert(`1-10 хүртэлх тооны нийлбэр: ${sum}`);
// alert(`urjver: ${urjver}`);


// let sum1 = 0;
// let sum2 = 0;
// for(let i = 1; i <=10; i++){
//     if(i % 2 == 0){
//         sum1 = sum1 + i;
//     } else {
//         sum2 = sum2 + i;
//     }
// }
// console.log(`1-10 хороонд тэгш тоонуудын нийлбэр: ${sum1}`);
// console.log(`1-10 хүртэлх сондгой тоонуудын нийлбэр: ${sum2}`);



// const n = prompt("please enter a number");
// const x = prompt('Хуваах тоо');
// let urjver = 1;
// for(let i = 1; i <= n; i++){
//     if(i % x == 0){
//         urjver = urjver * i;
//     }
// }
// alert(`1-${n} хүртэлх тооны ${x}-д хуваагдах тооны үржвэр: ${urjver}`);


// const n = 300;
// let a = 1;

// for(let i=1; i <= n; i++){
//      if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0){

//         }else{
//             if(i == 2 && i == 3 && i == 5 && i == 7){
//                 console.log(`${a}: ${i}`);
//             }
//             console.log(`${a}: ${i}`);
//             a = a + 1;
//         }
// }


// for (let i = 1; i <= 10; i++) {
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//   }


// * * * *
// * * * *
// * * * *
// * * * *

// let star = ' *';
// let space = "";
// const row = 4

// for (let i = 1; i <= row; i++) {
//         space = space + star;
//         for(let j = 1; j < row; j++){
//             space += star;
//         }
//         console.log(space);
//         space = "";
//   }

 
// * * * *
// *     *
// *     *
// * * * *


// let star = ' *';
// let space = "";
// const row = 4

// for (let i = 1; i <= row; i++) {
//         space = space + star;
//         for(let k = 1; k <= column; k++){
//             if(i == 1 || i == row || k == 1 || k == row){
//                 space += star;
//             } else {
//                 space += "  ";
//             }
//         }
//     console.log(space);
//   }
  
  
  

// 2025.01.15
// 1. 1-100 хүртлэх сондгой тооны нийлбэр

// let oddSum = 0;

// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 1){
//         oddSum += i;
//     }
// }
// console.log(oddSum);

// 2. Hello world

// const s = "hello world";
// const a = s.split("");
// let result= "";

// for(let i =0; i <= a.length-1; i++){
//     if(i % 2 == 0){
//         console.log(a[i].toUpperCase());
//         result += a[i].toUpperCase();
//     } else {
//         result += a[i];
//     }
// }
// console.log(result);

// 3. n too palindrom mon uu?

// palindrom too 11 121 1441

// const num = 2898;
// let numLen = String(num).length
// let result;
// let ul;

// for (let i = 1; i < numLen; i++) {
//     if(num % 10){
//         ul = Math.floor(num % 10);
//         num = Math.floor(num / 10);
//         console.log(ul, num);
//     }    
// }

// Input:
// 7
// Output:
// Wooooooow

let n;
let wow = "Wow";

for (let i = 0; i <= n; i++) {

    wow = "W"
    
    
}
