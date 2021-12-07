// formular til ansøgning for frivillig

const frivilligformular= document.getElementById("frivillig-formular");

frivilligformular.addEventListener("submit", function (e) {
    e.preventDefault();
    //forhinde at formularen gør som den plejer - det vil vi styre
    const navn = document.getElementById("fornavn").value;
    const efternavn = document.getElementById("efternavn").value;
    const mail = document.getElementById("email").value;
    const mobil = document.getElementById("tlf").value;
    const omdig = document.getElementById("infoomdig").value;
    const frivillig1 = document.getElementById("checkboxfrivillig1").value;
    const frivillig2 = document.getElementById("checkboxfrivillig2").value;
   


    //bindinger til navn i html 
    sessionStorage.setItem("fornavn", navn);
    sessionStorage.setItem("efternavn", efternavn);
    sessionStorage.setItem("email", mail);
    sessionStorage.setItem("tlf", mobil);
    sessionStorage.setItem("infoomdig", omdig);
    sessionStorage.setItem("checkboxfrivillig1", frivillig1);
    sessionStorage.setItem("checkboxfrivillig2", frivillig2);


    document.location.href = "kvittering-frivillig.html";
    //JS link, videre sender brugeren til den nye side
})