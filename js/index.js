let texts = {};
const languageLS = localStorage.getItem("language");
const engSpaMenu = document.getElementById("language");
const engSpaText = document.querySelectorAll(".language");
const engSpaA = document.getElementById("cv");

fetch("/files/texts.json")
  .then(response => response.json())
  .then(data => {
    texts = data;
    changeLanguage(languageLS || "eng");
  })
  .catch(error => console.error("Error cargando el JSON:", error));

// Footer Year
const year = document.querySelector("#current-year");

year.innerHTML = new Date().getFullYear();

// Language versions


const changeLanguage = language => {

  if (language === "eng") {
    engSpaMenu.textContent = "spa";
    engSpaA.setAttribute("href", "/files/RS-ehz.pdf");
    for (let i = 0; i < engSpaText.length; i++) {
      engSpaText[i].textContent = texts.eng[i];
    }
    localStorage.setItem("language", "eng");
  } else if (language === "spa") {
    engSpaMenu.textContent = "eng";
    engSpaA.setAttribute("href", "/files/CV-ehz.pdf");
    for (let i = 0; i < engSpaText.length; i++) {
      engSpaText[i].textContent = texts.spa[i];
    }
    localStorage.setItem("language", "spa");
  }
};
engSpaMenu.addEventListener("click", () => changeLanguage(engSpaMenu.textContent));
