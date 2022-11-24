// Footer Year

const year = document.querySelector("#current-year");

year.innerHTML = new Date().getFullYear();

// Language versions

const ENG = ['contact', ]

const language = localStorage.getItem('language');

const engSpaMenu = document.getElementById('language');
const engSpaText = document.querySelectorAll('.language')

console.log(engSpaText[0])

if(!language || language === 'SPA') {
    engSpaMenu.textContent = 'ENG';
    engSpaText[0].textContent = ENG[0]
} else {
    engSpaMenu.textContent = 'SPA';

}