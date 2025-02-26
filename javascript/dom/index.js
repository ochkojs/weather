
//элемент үүсгэв
const body = document.querySelector("body");

const container = document.createElement("div");

const array = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

createElement("input", container, "inputstyle", "");

const input = document.getElementsByClassName("inputstyle");

for (let i = 0; i < array.length; i++) {
  createElement("Button", container, "btn", array[i]);
}

function createElement(elementName, appendElement, className, innerText) {
  const element = document.createElement(elementName);
  element.innerText = innerText;
  element.className = className;
  appendElement.appendChild(element);

  element.onclick = () => {
    if (innerText === "+" || innerText === "-" || innerText === "/" || innerText === "*" || innerText === "%") {
      input[0].value += " " + innerText + " ";
    } else if (innerText === "AC"){
      input[0].value = "";
    } else if (innerText === "=") {
      const arr = input[0].value.split(" ");
      let result = parseInt(arr[0]);
      for (let i = 1; i < arr.length; i += 2) {
        const nextNumber = parseInt(arr[i + 1]);
        switch (arr[i]) {
          case "%":
            result %= nextNumber;
            break;  
          case "+":
            result += nextNumber;
            break;
          case "-":
            result -= nextNumber;
            break;
          case "*":
            result *= nextNumber;
            break;
          case "/":
            result /= nextNumber;
            break;
          default:
            break;
        }
      }
      input[0].value = result;
      

      // if (arr[i] === "+") {
      //   input[0].value = parseInt(arr[i-1]) + parseInt(arr[i+1]);
      // } else if(arr[i] === "-"){
      //   input[0].value = parseInt(arr[i-1]) - parseInt(arr[i+1]);
      // } else if(arr[i] === "*"){
      //   input[0].value = parseInt(arr[i-1]) * parseInt(arr[i+1]);
      // } else if(arr[i] === "/"){
      //   input[0].value = parseInt(arr[i-1]) / parseInt(arr[i+1]);
      // }
    }
    else {
      input[0].value += innerText;
    }
  }
}

container.className = "container";

body.appendChild(container);

// const body = document.querySelector("body");

// let btn = document.createElement("Button");

// let leftSide = document.createElement("div");
// let rigthSide = document.createElement("div");

// let mainSide = document.createElement("div");

// body.appendChild(mainSide);

// mainSide.className = "mainSideDiv";

// btn.innerText = "Click Me";
// btn.style = "background: orange, border: 0px"
// btn.onclick = log;


// let widthNumber = 100;
// function log(){
//   widthNumber += 10;
//   btn.style.width = `${widthNumber}px`
//   if (btn.style.backgroundColor == "") {
//     btn.style.backgroundColor = "red"
//   } else{
//      btn.style.backgroundColor = ""
//   }
//   console.log(btn.style.width);
// }
// let numLeft = 50;
// let numRigth = 50;


// let colorList = ['blue', 'green', 'orange', 'brown', 'yellow'];

// leftSide.onclick = leftClickSide;
// rigthSide.onclick = rigthClickSide;

// function leftClickSide(){
//     numLeft +=1;
//     leftSide.style.width = `${numLeft}%`
//     numRigth -=1;
//     rigthSide.style.width = `${numRigth}%`
//     leftSide.innerText = `left width: ${leftSide.style.width}`;
//     rigthSide.innerText = `rigth width: ${rigthSide.style.width}`;

// }

// function rigthClickSide(){
//   numLeft -=1;
//   leftSide.style.width = `${numLeft}%`
//   numRigth +=1;
//   rigthSide.style.width = `${numRigth}%`
//   leftSide.innerText = `left width: ${leftSide.style.width}`;
//   rigthSide.innerText = `rigth width: ${rigthSide.style.width}`;
// }
// // body.appendChild(btn);

// body.appendChild(leftSide);
// body.appendChild(rigthSide);

// leftSide.className = "leftSide";
// rigthSide.className = "rigthSide";