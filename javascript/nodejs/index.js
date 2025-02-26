const students = [
  {
    name: "Munkhbold",
    seedNo: "2c",
    gender: "male",
    nickname: "muugii",
    hobby: [
      "gamer",
      "artist",
      "streamer",
      "digitalart",
      "volleyball",
      "3dmodelmaker",
    ],
  },
  {
    name: "Javkhlan",
    nickname: "Javhaa",
    seedNo: "1F",
    gender: "male",
    hobby: ["gaming", "coding", "watching movie,anime", "sleeping"],
  },
  {
    name: "Tsatsral",
    seedNo: "4A",
    gender: "male",
    hobby: "watch anime",
    nickname: "nottsatsa",
  },
  {
    name: "Ochirzaya",
    nickname: "Zaya",
    seedNo: "1E",
    gender: "Male",
    hobby: "play-soccer",
  },
  {
    name: "Enkhbayar",
    seedNo: "5c",
    nickname: "Eba",
    gender: "Male",
    hobby: ["Quiz", "movie", "reading", "cooking", "gaming", "hiking"],
  },
  {
    name: "Batmend",
    nickname: "mende",
    seedNo: "4E",
    gender: "male",
    hobby: ["basketball", "billiard", "reading"],
  },
  {
    name: "Tumen-Ulzii",
    seedNo: "3F",
    Nickname: "TK",
    gender: "male",
    hobby: "sagsan bumbug",
  },
  {
    name: "Magnaibayar",
    nickname: "Magnai",
    seedNo: "2F",
    gender: "male",
    hobby: ["Riding bicycle", "reading", "watching movie, anime", "sleeping"],
  },
  {
    name: "Chimeg-Erdene",
    seedNo: "3e",
    gender: "female",
    nickname: "Chimgee",
    hobby: ["playing puzzle games", "watching movie", "volleyball", "walking"],
  },
  {
    name: "Bayandelger",
    seedNo: "3D",
    gender: "male",
    nickname: "bayna",
    hobby: ["gaming", "cooking", "watch anime"],
  },
  {
    name: "Ganzaya",
    nickname: "Zaya",
    seedNo: "2D",
    gender: "Female",
    ig: "zaya_bdmr",
    hobby: ["movie", "paint", "badminton"],
  },
  {
    name: "Maral",
    seedNo: "3A",
    gender: "Female",
    nickname: "Marla",
    hobby: ["watching movies", "baking"],
  },
  {
    name: "chinggis",
    seedNo: "3c",
    gender: "male",
    hobby: "yuch hamaaguu hiine",
  },
  {
    name: "Ochirdari",
    nickname: "Ochko",
    seedNo: "2E",
    gender: "male",
    hobby: ["reading", "Movie"],
  },
  {
    name: "Amartuvshin",
    nickname: "Amaraa",
    seedNo: "3B",
    gender: "male",
    hobby: ["curious about everything, but not an expert in anything"],
  },
  {
    name: "bayarjavkhlan",
    seedNo: "5B",
    gender: "male",
    nickname: "vigilante",
    hobby: ["listen to music, driving, watching movie"],
  },
  {
    name: "Бат-Очир",
    seedNo: "2A",
    gender: "эрэгтэй хө",
    nickname: "надад таалагдвал хүссэнээрээ дуудоо",
    hobby: [
      "сагс хааяал",
      "гүйх",
      "зохион бүтээх",
      "засварлах",
      "шинэ зүйл сурах турших",
    ],
  },
  {
    name: "Gantumur",
    seedNo: "1B",
    gender: "Male",
    nickname: "Ganaa",
    hobby: ["Movie", "reading"],
  },
  {
    name: "Oyunbayar",
    nickname: "Omoo",
    seedNo: "4F",
    gender: "female",
    hobby: ["reading", "movie", "outdoor walking", "traveling"],
  },
  {
    name: "Bishrelt",
    Nickname: "montoo",
    seedNo: "4c",
    gender: "male",
    hobby: "mongo oloh durtai",
  },
  {
    name: "Tsog",
    seedNo: "5A",
    gender: "Male",
    nickname: "Gots",
    hobby: "Travel",
  },
];

import fs, { readFileSync } from "fs";

//   // file байхгүй байсан ч үүсгээд тестийг нэмнэ. өмнөх утгыг дарна
//   fs.writeFile("student.txt", "Hello", (err) => {
//     console.log(err);
//     });

//     // өмнөх утга дээр нэмнэ
//     fs.appendFile("student.txt", "Wold", (err) => {
//         console.log(err);
//     });

// fs.readFile("student.txt", "utf-8", (err, data) => {
//     console.log(data);

// })

// for (let i = 0; i < students.length; i++) {
//   fs.appendFileSync(
//     "student.txt",
//     `${i + 1}: ` +
//       students[i].name +
//       "\n" +
//       `    Ширээний дугаар: ${students[i].seedNo},` +
//       ` Nickname: ${students[i].nickname},` +
//       ` Gender: ${students[i].gender},` +
//       ` Hobby: ${students[i].hobby},` +
//       "\n",
//     (err) => {
//       console.log(err);
//     }
//   );
// }

// students.forEach((student, id) => {
//     let result = "";
//     Object.keys(student).map((key) => result += key + `=` + student[key])
// })


// for (let i = 0; i < students.length; i++) {
//   let student = [];
//   fs.readFileSync("student.txt", 'utf8', function(err, student)){
//     console.log(student);
//   }
//   console.log();
  
// }



function wordsBox(){
  this.words= {};
}

var w = new wordsBox();

fs.readFile('student.txt', function (err, data) {
  w.words = JSON.parse(data.toString());
});

module.exports = w;
console.log(wordsBox.words);

// students.forEach((student) => {
//   let result = "";
//   Object.keys(student).map((key) => result += key + `=` + student[key]);
//   appendFile("student.txt", result, (err) => {
//     if (err) {
//       console.log("Error writing file:", err);
//       return;
//     }
//     console.log("Student added to file");
//   });
// });
