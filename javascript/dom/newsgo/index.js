const body = document.querySelector('body');
const mainDiv = document.createElement('div');

body.appendChild(mainDiv);

mainDiv.className = "mainDiv";

const menuList = ['Эхлэл', 'Улс төр', 'Эдийн засаг', 'Олон нийт', 'бусад'];

const topBar = createElement('div', mainDiv, "topBarClass", "");

const navLeft = createElement("div", topBar, "navLeftClass", "");

const navRight = createElement("div", topBar, "navRightClass", "");

const logo = createElement("div", navLeft, "logoClass", "");

const nav = createElement("div", navLeft, "navbar", "");

const topContent = createElement("div", body, "mainContentClass", "");

const topContentLeft = createElement("div", topContent, "mainContentLeftClass", "“ЛэндМН ББСБ” ХК-ийн 2024 оны III улирлын санхүү, үйл ажиллагааны тайлан");

const topContentRight = createElement("div", topContent, "mainContentrightClass", "");

const contentRightZuun = createElement("div", topContentRight, "contentRightZuunClass", "");

const contentRightZuunNeg = createElement("div", contentRightZuun, "contentRightZuunNegClass", "ХасБанк 2024 оны III улиралд 43.4 тэрбум төгрөгийн татварын ");

const contentRightZuunHoyor = createElement("div", contentRightZuun, "contentRightZuunHoyorClass", "Сибирийн -40 хэмийн хүйтэнд туршигдсан ₮69 саяын цоо шинэ Geely Coolray GL ");

const contentRightBaruun = createElement("div", topContentRight, "contentRightBaruunClass", "");



function createElement(elementName, appendchild, className, innerText) {
    const element = document.createElement(elementName);
    appendchild.appendChild(element);
    element.className = className;
    element.innerText = innerText;
    return element;
}

for (let i = 0; i < menuList.length; i++) {
    createElement("ui", nav, "menuClass", menuList[i].toUpperCase());
}

const buynow = createElement("buy", navRight, "buyNow", "Buy Now");