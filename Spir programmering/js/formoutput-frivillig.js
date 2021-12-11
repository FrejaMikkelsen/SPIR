// formular til ansøgning for frivillig

const frivilligformular= document.getElementById("frivillig-formular");

frivilligformular.addEventListener("submit", function (e) {
    e.preventDefault();
     //forhinde at formularen gør som den plejer, vi vil styre den over til kvitteringssiden 
    const navn = document.getElementById("fornavn").value;
    const efternavn = document.getElementById("efternavn").value;
    const mail = document.getElementById("email").value;
    const mobil = document.getElementById("tlf").value;
    const omdig = document.getElementById("infoomdig").value;
    const frivillig = document.getElementById("frivillig").value;
   
   


    //bindinger til navn i html 
    sessionStorage.setItem("fornavn", navn);
    sessionStorage.setItem("efternavn", efternavn);
    sessionStorage.setItem("email", mail);
    sessionStorage.setItem("tlf", mobil);
    sessionStorage.setItem("infoomdig", omdig);
    sessionStorage.setItem("frivillig", frivillig);
 
 
// vi bruger sessionStorage, som lagre info fra den ene side til næste og kun indtil brugeren har afsluttet og lukket browseren. Da det ikke ville give værdi for SPIR eller brugeren med localStorage

    document.location.href = "kvittering-frivillig.html";
    //JS link, videre sender brugeren til den nye side
})