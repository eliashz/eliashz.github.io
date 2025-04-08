let texts = {};
const languageLS = localStorage.getItem("language");
const engSpaMenu = document.getElementById("language");
const engSpaText = document.querySelectorAll(".language");
const engSpaA = document.getElementById("cv");
const year = document.querySelector("#current-year");

// Footer Year
year.innerHTML = new Date().getFullYear();

const changeLanguage = language => {
  if (language === "spa" || navigator.language === "es-ES") {
    engSpaMenu.textContent = "eng";
    engSpaA.setAttribute("href", "/files/CV-ehz.pdf");
    for (let i = 0; i < engSpaText.length; i++) {
      engSpaText[i].textContent = texts.spa[i];
    }
    localStorage.setItem("language", "spa");
  }
  if (language === "eng") {
    engSpaMenu.textContent = "spa";
    engSpaA.setAttribute("href", "/files/RS-ehz.pdf");
    for (let i = 0; i < engSpaText.length; i++) {
      engSpaText[i].textContent = texts.eng[i];
    }
    localStorage.setItem("language", "eng");
  }
};
engSpaMenu.addEventListener("click", () => changeLanguage(engSpaMenu.textContent));

fetch("/files/texts.json")
  .then(response => response.json())
  .then(data => {
    texts = data;
    changeLanguage(languageLS || "eng");
  })
  .catch(error => console.error("Error cargando el JSON:", error));

// Language versions
if (!languageLS) {
  if (navigator.language === "es-ES") {
    changeLanguage("spa");
  } else {
    changeLanguage("eng");
  }
}
