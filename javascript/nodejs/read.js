import fs from "fs";

fs.readFile('student.txt', 'utf-8', (err, data) =>{
    if (err) {
        console.log(err);
    } else {
        student = data.split("\n");
        students.forEach(element => {
            
        });
    }
})