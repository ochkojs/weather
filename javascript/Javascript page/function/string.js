
    let constext = "ulaanbaatar is Mongolian capital city";

// 1. Өгүүлбэрийн уртыг олох
// stringLength("Hello, world!"); // 13
// stringLength("JavaScript is fun!"); // 19

    function stringLength(text1) {
        console.log(`Энэ өгүүлбэрийн урт: ${text1.length}`);
    }
    stringLength("Өгүүлбэр дотор үсэгний тоо");


// 2. Өгүүлбэрийн сүүлийн тэмдэгтийг авах
// lastCharacter("Hello"); // "o"
// lastCharacter("JavaScript"); // "t"

    function lastCharacter(text2){
        console.log(`Энэ үгний сүүлийн үсэг: ${text2.charAt(text2.length-1)}`);
    }

    lastCharacter("Ulaanbaatar");

// N дугаар үсгийг авах

    function getcharacter(text3, n) {
        console.log(`${text3} гэдэг үгний n дугаар үсэг: ${text3.charAt(n)}`);
    }

    getcharacter("Ulaanbaatar", 4);
    getcharacter("Mongolchuud", 7);

// 2. Өгүүлбэрийн эхний болон сүүлийн үсгийг авах

    function stringFirsLast(text4) {
        console.log(`${text4} энэ өгүүлбэрийн эхний болон сүүлийн үсэг нь: ${text4.charAt(0)+text4.charAt(text4.length-1)}`); 
    }

    stringFirsLast("Ulaanbaatar is Mongolian capital city");

// 4. Өгүүлбэрийн дунд байгаа үсгийг авах

    function averageChar(text5){
        if (text5.length % 2 != 0) {
            console.log(`${text5} энэ үгний голын үсэг нь ${text5.charAt(text5.length/2)}`)
        }
        console.log(`${text5.charAt(text5.length / 2 + 1)}`)
    }
    averageChar('UlaanBaatar');

    let text5 = "Ulaanbaatar is Mongolian capital city"

// 3. Бүх үсгийг том болгох (toUpperCase)
// toUpperCase("hello world"); // "HELLO WORLD"
// toUpperCase("javascript"); // "JAVASCRIPT"

    function toUpperCase(text5) {
        console.log(text5.toUpperCase());
    }

    toUpperCase(constext);

// 4. Бүх үсгийг жижиг болгох (toLowerCase)
// toLowerCase("HELLO WORLD"); // "hello world"
// toLowerCase("JavaScript"); // "javascript"

    function toLowerCase(params) {
        console.log(params.toLowerCase());
    }
    toLowerCase(constext);


// 5. Өгүүлбэрийн эхний үсгийг том болгох
// capitalizeFirstLetter("hello world!"); // "Hello world!"
// capitalizeFirstLetter("javascript is awesome!"); // "Javascript is awesome!"

    function firstCharUppercase(params) {
        console.log(params.toUpperCase().charAt(0));
    }
    firstCharUppercase(constext);

// 6. Тусгай үсгийг өгүүлбэрээс хасах (replace)
// removePunctuation("Hello, world!"); // "Hello world"
// removePunctuation("What's up?"); // "Whats up"

// 7. Өгүүлбэрт тодорхой үг орсон эсэхийг шалгах (includes)
// containsWord("JavaScript бол хүчирхэг хэл", "JavaScript"); // true
// containsWord("Би код бичих дуртай", "Python"); // false

// 8. Өгүүлбэрийн эхний болон сүүлийн хоосон зайг хасах (trim)
// trimText("   Hello world!   "); // "Hello world!"
// trimText("  JavaScript  "); // "JavaScript"

// 9. Өгүүлбэр доторх бүх үгийг массив болгон хуваах (split)
// splitWords("Hello world!"); // ["Hello", "world!"]
// splitWords("JavaScript is fun!"); // ["JavaScript", "is", "fun!"]

// 9. Өгүүлбэр доторх бүх үгийг массив болгон хуваах (split)
// splitWords("JavaScript is fun"); // ["JavaScript", "is", "fun"]
// splitWords("Hello, world!"); // ["Hello,", "world!"]

// 10. Өгүүлбэрийн тодорхой хэсгийг авах (substring)
// getFirstFive("JavaScript"); // "JavaS"
// getFirstFive("Hello world!"); // "Hello"

// 11. Өгүүлбэрийн сүүлийн 3 үсгийг авах (slice)
// getLastThree("JavaScript"); // "ipt"
// getLastThree("Coding"); // "ing"

// 12. Өгүүлбэр дотор “a” үсэг хэд байгааг тоолох (match)
// countLetterA("JavaScript is amazing"); // 4
// countLetterA("Hello World"); // 0

// 13. Текстийг эсрэгээр нь харуулах (reverse)
// reverseText("hello"); // "olleh"
// reverseText("JavaScript"); // "tpircSavaJ"

// 14. Текст дотор тоо орсон эсэхийг шалгах (match)
// containsNumber("My age is 25"); // true
// containsNumber("Hello world"); // false

// 15. Өгүүлбэр дотор тодорхой үгийг өөр үгээр солих (replaceAll)
// replaceWord("I love JavaScript", "JavaScript", "Python"); 
// // "I love Python"
// replaceWord("Hello, world!", "world", "everyone"); 
// // "Hello, everyone!"