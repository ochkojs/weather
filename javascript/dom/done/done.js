console.log('Waiting');

const body = document.querySelector("Body");

const container = document.createElement("div");

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

container.className="container";

body.appendChild(container);

const array = [
    {
        isDone: "false",
        day: "1",
    },
    {
        isDone: true,
        day: "2",
    },
    {
        isDone: true,
        day: "3",
    },
    {
        isDone: true,
        day: "4",
    },
    {
        isDone: true,
        day: "5",
    },
    {
        isDone: true,
        day: "6",
    },
    {
        isDone: true,
        day: "7",
    },
]


for (let i = 0; i < array.length; i++) {
    createCalendar("Button", container, "dayButton", array[i].day);
}

function createCalendar(elementName, appendElement, className, innerText ){
    const element = document.createElement(elementName);
    appendElement.appendChild(element);
    element.className = className;
    if (array[i].isDone) {
        element.innerHTML = `<svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.007 8.27C22.194 9.125 23 10.45 23 12c0 1.55-.806 2.876-1.993 3.73.24 1.442-.134 2.958-1.227 4.05-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996-1.438.235-2.954-.128-4.05-1.224-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05 1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993 1.442-.24 2.956.135 4.048 1.227 1.093 1.092 1.468 2.608 1.227 4.05Zm-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165 4.314-6.04a1 1 0 0 1 1.395-.232Z" fill="#000000"/></svg>`;
    }else{
        element.innerText = innerText;
    }
}





