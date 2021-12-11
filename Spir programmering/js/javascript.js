
//Navigation
document.querySelector('.btn').onclick = function (e){ //når der trykkes på følgende
var menu = document.querySelector('.menu'); //definerer variablen menu med .menu fra html
var btn = document.querySelector('.btn'); //definerer variablen btn med .btn fra html

menu.classList.toggle('is-active'); //checker element for visibility/hidden
btn.classList.toggle('is-active');

e.preventDefault();
}

// testimonail slider start ATTRIBUTE kunaal https://dev.to/kunaal438/responsive-testimonials-slider-using-html-css-and-javascript-modern-web-2021-4igf
const wrapper = document.querySelector('.testimonial_wrapper'); //vælger alle elementer inde i .testimonail_wrapper
const indicators = [...document.querySelectorAll('.testimonial_indicators button')];

let currentTestimonial = 0; //default 0

indicators.forEach((item, i) => {
    item.addEventListener('click',() => {
        indicators [currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `${-99 * i}%`; //bestemmer hvor langt slideren 'rykker' sig hver gang der klikkes
        item.classList.add('active');
        currentTestimonial = i;
    })
})

// testimonail slider slut 



//Chatbot ATTRIBUTE Ashfaq Ahmed: https://codeconvey.com/sticky-contact-form/
$( document ).ready(function() { //jQuery når siden er loaded kan tingene nedenfor ske/udføres
				
    // let's Hide Items
    $( ".cc-contactpop form").hide(); //elementerne er gemt når siden loades
    $( ".cc-contactpop i").hide(); 
    $( ".cc-contactpop p").hide();
    
    // Show on elements ".slideDown"
    $( ".cc-contactpop" ).click(function() { //Ved click sker flg animation på 0.5 sek - her lukkes formularen
        $( ".cc-contactpop form").slideDown(500)
        $( ".cc-contactpop p").slideDown(500)
        $( ".cc-contactpop i").slideDown(500)
    });
    
    // Close Hidden Part
    $( ".cc-contactpop i" ).click(function() { //Ved click sker flg animation på 0.5 sek - her åbnes formularen
        $(this).slideUp(500)
            $( ".cc-contactpop p").slideUp(500)
            $( ".cc-contactpop form").slideUp(500)
            $(".kontakt-popup").fadeOut(500); //popup lukkes når kontakt åbnes, så den ikke ligger gemt bag kontaktformularen.
            $(".kontakt-popup-p").fadeOut(500);
            $(".kontakt-popup i ").fadeOut(500);
        return false
    });

});

//Chatbot popup til kontakt-side
$('#popup-bubble').delay(3000).fadeIn(); //fanger div rundt om pop-up som  er sat til display:none og her animeres den så den fader ind efter 3 sekunder
$(document).ready(function(){ //jQuery når siden er loaded kan tingene nedenfor ske/udføres

    $(".kontakt-popup i").click(function(){ //når der trykkes på krydset (i) skal følgende ske
        $(".kontakt-popup").fadeOut(500); //element fades ud på 0.5 sek
        $(".kontakt-popup-p").fadeOut(500); //element fades ud på 0.5 sek
        $(".kontakt-popup i ").fadeOut(500); //element fades ud på 0.5 sek
    });

});

//-----------------------------SPØRGSMÅL OG SVAR--------------------

const faqs = document.querySelectorAll(".faq"); //her fanger jeg alle classes ved navn faq fra html

faqs.forEach((faq) => {  //for hver faq skal følgende ske
    faq.addEventListener("click", () => { //når der klikkes på en "faq" sker flg
        faq.classList.toggle("active"); //henter active med styling fra css
    });
});

// formular til ansøgning af præsentation 

const ansoegningformular = document.getElementById("ansoegning-formular");
//add eventlistner, som lytter efter når der bliver trykket på submit knappen - 
ansoegningformular.addEventListener("submit", function(e) {
    e.preventDefault();
    //forhinde at formularen gør som den plejer, vi vil styre den over til kvitteringssiden 

    const navn = document.getElementById("navn").value;
    const mobil = document.getElementById("mobil").value;
    const mail = document.getElementById("mail").value;
    const titel = document.getElementById("titel1").value;
    const ide = document.getElementById("info1").value;
    const forskel = document.getElementById("info2").value;
    const vinder = document.getElementById("info3").value;
    const links = document.getElementById("info4").value;
    const kendskab = document.getElementById("kendskab").value;
    const deltage = document.getElementById("deltage").value;


    //bindinger til navn i html 
    sessionStorage.setItem("navn", navn);
    sessionStorage.setItem("mobil", mobil);
    sessionStorage.setItem("mail", mail);
    sessionStorage.setItem("titel1", titel);
    sessionStorage.setItem("info1", ide);
    sessionStorage.setItem("info2", forskel);
    sessionStorage.setItem("info3", vinder);
    sessionStorage.setItem("info4", links);
    sessionStorage.setItem("kendskab", kendskab);
   sessionStorage.setItem("deltage", deltage);
// vi bruger sessionStorage, som lagre info fra den ene side til næste og kun indtil brugeren har afsluttet og lukket browseren. Da det ikke ville give værdi for SPIR eller brugeren med localStorage

    document.location.href = "kvittering-ansoegning.html";
    //JS link videre - sender brugeren til den nye side
})


//-----------------------------------cookie
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
