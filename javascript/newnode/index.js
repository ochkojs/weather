import React from "react";

console.log("checking...");


let score = 0;

function func1(name) {
    return name;
    
}

function func2(age, gender) {
    return age + gender;
}


function increase(x) {
    score++
    
}


function decrease(y) {
    score--;
    
}

increase();
increase();
increase();
increase();
console.log(score);

decrease();
decrease();
decrease();

console.log(score);

console.log(func1("Od ") + func2(30 , " male"));




