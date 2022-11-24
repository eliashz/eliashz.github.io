import texts from '../files/texts.json' assert {type: 'json'};

// Footer Year

const year = document.querySelector("#current-year");

year.innerHTML = new Date().getFullYear();

// Language versions

const languageLS = localStorage.getItem('language');
const engSpaMenu = document.getElementById('language');
const engSpaText = document.querySelectorAll('.language');
const engSpaA = document.getElementById('cv');

const changeLanguage = (language) => {
    if(language === 'eng') {
        engSpaMenu.textContent = 'spa';
        engSpaA.setAttribute('href', "/files/RS-ehz.pdf");
        for (let i = 0; i < engSpaText.length; i++) {
            engSpaText[i].textContent = texts.eng[i]        
        }
        localStorage.setItem('language', 'eng');
    } else if (language === 'spa'){
        engSpaMenu.textContent = 'eng';
        engSpaA.setAttribute('href', "/files/CV-ehz.pdf");
        for (let i = 0; i < engSpaText.length; i++) {
            engSpaText[i].textContent = texts.spa[i]        
        }
        localStorage.setItem('language', 'spa');
    }
}
changeLanguage(languageLS || 'eng');

engSpaMenu.addEventListener('click', () => changeLanguage(engSpaMenu.textContent))