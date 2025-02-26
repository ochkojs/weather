
// let studentNames = ["Bold", "Micheal", "Malone"];

//     for (let i = 0; i < studentNames.length; i++) {
//         console.log(studentNames[i]);
//     }

//     console.log(studentNames 'array');

//     studentNames[4] = 'Bataa';


//     // Push нь array  хамгийн сүүлийн элементийн ард утга нэмнэ
//     studentNames.push('Orgil');

//     // pop нь хамгийн сүүлийн элементийг устгана
//     studentNames.pop();

// ------------------------------

// let score = [10, 20, 30, 40, 50];
// let sum = 0;

//     for(let i=0; i < score.length; i++){
//         score[i]=score[i] * 2;
//         sum = sum + score[i];
//     }
//     score.push(sum);

//     console.log(score);



// --------------------------------


// let fruits = ["Apple", "Banana", "Cherry", "Date"];

//     console.log(fruits);

//     console.log(fruits[1], fruits[3]);

//     fruits.push("Elderberry");

//     for(let i = 0; i < fruits.length; i++){
//         if(fruits[i]=="Date"){
//             fruits[i]="Orange";
//         }
//     }
//     console.log(fruits);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [];
// for(let i = 0; i <= array2.length - 1; i++){
//     array1.push(array2[i]);
// }

// for (let i = 0; i < array1.length; i++) {
//     array3.push(array1[i] + array2[i])
// }

// console.log(array3);




// ----------Problem 1----------------------

// const number = [5, 10, 15, 20, 25, 30];

// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//     sum = sum + number[i];
// }

// console.log(sum);


// ----------Problem 2----------------------

// const number2 = [15, 22, 3, 45, 7, 18];

// function numplus(x) {
//   for (let i = 0; i < number2.length; i++) {
//     if (number2[i] >= x) {
//         console.log(number2[i]);
//     }
//   }
// }

// numplus(10);

function dayMonth (num){
  for (let i = 1; i <= num; i++) {
    switch (i) {
      case 1: console.log(`${i}st day`)
        break;
      case 2 : console.log(`${i}nd day`)
        break;
      case 3 : console.log(`${i}rd day`)
        break;
      default:
        console.log(`${i}th day`)
        break;
    }
  }
}

dayMonth(31);

