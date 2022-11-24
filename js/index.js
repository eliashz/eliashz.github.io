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
console.log(engSpaText.length)
console.log(engSpaText[0])

if(language || language === 'SPA') {
    engSpaMenu.textContent = 'ENG';
    engSpaA.setAttribute('href', "/files/RS-ehz.pdf");
    for (let i = 0; i < engSpaText.length; i++) {
        engSpaText[i].textContent = texts.eng[i]        
    }
} else {
    engSpaMenu.textContent = 'SPA';
    engSpaA.setAttribute('href', "/files/CV-ehz.pdf");
    for (let i = 0; i < engSpaText.length; i++) {
        engSpaText[i].textContent = texts.spa[i]        
    }

}