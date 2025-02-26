const person = {
    firstName: "Ner",
    lastName: 'Ovog',
    age: 25,
    city: "Darkhan",
}
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));

// ex02

console.log(person.firstName, person.city);

// ex03

person['email'] = "yourEmail@gmail.com",

person.city = 'Ulaanbaatar';

console.log(person);

// ex04

person['grades'] = {
    math: 98,
    science: 99,
    history: 96,
}

person['address'] = {
    street: 'Central',
    City: 'Ub',
    zip: 11000,
}

person.grades.math = 95,
person.address.City = "Erdenet",
console.log(person);

// ex05

console.log(Object.keys(person));
console.log(Object.values(person));


// ex06

person['email'] = "yourEmail@example.com";

delete person.address.zip;

console.log(person);

