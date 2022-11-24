import texts from '../files/texts.json' assert {type: 'json'};

// Footer Year

const year = document.querySelector("#current-year");

year.innerHTML = new Date().getFullYear();

// Language versions

console.log(texts)

const language = localStorage.getItem('language');

const engSpaMenu = document.getElementById('language');
const engSpaText = document.querySelectorAll('.language');
const engSpaA = document.getElementById('cv');

console.log(engSpaText[0])

if(!language || language === 'SPA') {
    engSpaMenu.textContent = 'ENG';
    engSpaA.setAttribute('href', "/files/RS-ehz.pdf");
    engSpaText[0].textContent = texts.eng[0]
    //engSpaText[1].textContent = ENG[1]
} else {
    engSpaMenu.textContent = 'SPA';

}