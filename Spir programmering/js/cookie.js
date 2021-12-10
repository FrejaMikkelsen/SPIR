const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");
const acceptBtn = document.querySelector(".accept-btn");

window.addEventListener("load", () => {
    setTimeout(() =>{
        popupScreen.classList.add("active");
    }, 2000); //Popupskærm dukker op 02 sekunder efter siden er loaded.
});

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active"); //Lukker popupskærmen når bruger klikker på krydset.
    // Opretter cookie for en dag (den udløber efter en dag) når bruger klikker på krydset.
    document.cookie = "Spir Aarhus=testWebsite; max-age=" + 24 * 60 * 60; //1 dag = 24 timer = 24 * 60 * 60 
});

acceptBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active"); //Lukker popupskærmen når bruger klikker på "Acceptér"
    // Opretter cookie for en dag (den udløber efter en dag) når bruger klikker på "Acceptér"
    document.cookie = "Spir Aarhus=testWebsite; max-age=" + 24 * 60 * 60; //1 dag = 24 timer = 24 * 60 * 60
});

// Brug oprettede cookie til at skjule eller vise popupskærmen
const WebsiteCookie = document.cookie.indexOf("Spir Aarhus=");

if(WebsiteCookie != -1){
    popupScreen.style.display = "none"; //Skjul popupskærm hvis cookue ikke er udløbet
}
else {
    popupScreen.style.display = "flex"; //Vis popupskærm hvis cookie er udløbet
}
