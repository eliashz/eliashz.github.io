// Footer Year

const year = document.querySelector("#current-year");

year.innerHTML = new Date().getFullYear();

// Language versions

const ENG = ['contact']

const language = localStorage.getItem('language');
console.log(language)