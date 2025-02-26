
const body = document.querySelector("body");

const mainContainer = document.createElement('div');

mainContainer.className = 'mainContainer';

body.appendChild(mainContainer);

createElement("logo", mainContainer, "logoclass", "");

const menuContainer = document.createElement('div');

menuContainer.className = "menuContainer";

mainContainer.appendChild(menuContainer);

let menuList = ["Нүүр", "Улс төр", "Эдийн засаг", "Нийгэм", "Дэлхий", "Спорт", "Энтертайнмент", "Шар мэдээ", "Видео"];

function createElement(elementName, appendElement, className, innerText) {
    const element = document.createElement(elementName);
    appendElement.appendChild(element);
    element.className = className;
    element.innerText = innerText;
}

for (let i = 0; i < menuList.length; i++) {
    const menu = document.createElement("ui");
    if (menuList[i] === "Нүүр") {
        menu.innerText = "Эхлэл".toUpperCase();
        menuContainer.appendChild(menu);
        menu.className = "menu";
    }else{
        menuContainer.appendChild(menu);
        menu.className = "menu";
        menu.innerText = `${menuList[i]}`.toUpperCase();
        
    }

}

createElement("title", mainContainer, "title", "Төр цүнх баригчдаасаа салж чадах уу?");

createElement("image", mainContainer, "img", "");

createElement("descriprion", mainContainer, "desc", "Засгийн газрын хэрэг эрхлэх газрын дарга Н.Учрал өнөөдөр /2025.02.05/ төрийн албанд 30 хувийн цомхотгол хийхээ мэдэгдлээ. Гол нь энэхүү цомхотголоор төр намаас томилогдсон цүнх баригчдыг явуулж чадах уу гэдэг нь асуудал юм. Учир нь өмнөх Засгийн газар “Шүүр”, “Шүгэл” ажиллагааг зарласан ч цүнх баригчдыг шүүрдэж чадаагүй гэх шүүмжлэл өрнөдөг. Сүүлийн саруудад хамтарсан Засгийн газар төрийн өмчит компаниудад менежерүүд томилж эхэлсэн.  Гэвч мэргэжлийн гэхээсээ намд давхиж явсан цүнхчид томилогдож буй. Иймээс цомхотголд нам дагасан цүнхчдээ явуулахыг олон нийт хүсч байна. Төрийн албанд өнөөдрийн байдлаар 230 мянга орчим хүн ажиллаж байгаа бол төрийн болон орон нутгийн өмчит компанид 70 мянга гаруй хүн ажилладаг. Нийт дүнгээрээ 300 мянга давсан. Олон нийтийн зүгээс өнгөрсөн хугацаанд төр данхаж байгааг шүүмжилж, цомхотгол хийхийг сануулж ирсэн. УИХ-ын гишүүд ч эл асуудалд шүүмжлэлтэй ханддаг. Тухайлбал, УИХ-ын гишүүн П.Сайнзориг яамдтай чиг үүрэг давхцаж байгаа хороо, үндэсний зөвлөл зэрэг 40 гаруй газрыг татан буулгаж, хэмнэсэн мөнгөөр төрийн албан хаагчдын цалинг өсгөх ёстой гэсэн асуудлыг ч хөндөж байв.");