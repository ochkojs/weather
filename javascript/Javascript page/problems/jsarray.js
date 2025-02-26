// 1. Map ашиглах

const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

const uppercaseFruits = fruits.map((value, index, fruits) => {
    return value.toUpperCase()
});

console.log(uppercaseFruits);


// 2. Filter ашиглах

const result5char = fruits.filter((value, index, fruits) => {
    return value.length > 5;
})

console.log(result5char);

// 3. Оюутны нэр, оноог өөрчлөв.

const students = [["John", 20, [88, 79, 90]] , ["Jack", 22, [83, 98, 89]], ["James", 19, [98, 95, 89]]];

students[0][0] = "Jane";
students[0][students[0].length-1][0] = 95;

console.log(students);


// 4. Насыг нь нэгээр нэмэгдүүлэв

students.forEach((value, index, array) => {
    students[index][1] =  students[index][1] + 1; 
    console.log(`${students[index][0]} - ${students[index][1]}`);
})

// 5. Filter ашиглан эхний оноо нь 90-с дээш оюутнуудыг шүүв.

const newArray90 = students.filter((value, index, array) => {
        return students[index][students[index].length-1][0] >= 90
});

console.log(newArray90);

// 6. Task: Start with the students array from Exercise 6. Add a new student with the name "Doe", age 22, and grades [85, 87, 90]. Then, remove the last student's grades.

students.push(["Doe", 22, [85, 87, 90]])

console.log(students);


console.log(students[index][students[index].length-1][2].pop());