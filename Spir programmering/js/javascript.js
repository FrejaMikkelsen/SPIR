document.querySelector('.btn').onclick = function (e){
var menu = document.querySelector('.menu');
var btn = document.querySelector('.btn');

menu.classList.toggle('is-active');
btn.classList.toggle('is-active');

e.preventDefault();
}


//Chat
$( document ).ready(function() {
				
    // let's Hide Items
    $( ".cc-contactpop form").hide();
    $( ".cc-contactpop i").hide(); 
    $( ".cc-contactpop p").hide();
    
    // Show on elements ".slideDown"
    $( ".cc-contactpop" ).click(function() {
        $( ".cc-contactpop form").slideDown(500)
        $( ".cc-contactpop p").slideDown(500)
        $( ".cc-contactpop i").slideDown(500)
    });
    
    // Close Hidden Part
    $( ".cc-contactpop i" ).click(function() {
        $(this).slideUp(500)
            $( ".cc-contactpop p").slideUp(500)
            $( ".cc-contactpop form").slideUp(500)
        return false
    });

});

// testimonail slider start 
const wrapper = document.querySelector('.testimonial_wrapper'); //vælger alle elementer inde i .testimonail_wrapper
const indicators = [...document.querySelectorAll('.testimonial_indicators button')];

let currentTestimonial = 0; //default 0

indicators.forEach((item, i) => { //addEventlistner, lytter efter når der klikkes på 'indicators' under slideren
    item.addEventListener('click',() => {
        indicators [currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `${-99 * i}%`; //bestemmer hvor langt slideren 'rykker' sig hver gang der klikkes
        item.classList.add('active');
        currentTestimonial = i;
    })
})

// testimonail slider slut 



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