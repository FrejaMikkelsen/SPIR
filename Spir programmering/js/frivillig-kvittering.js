//hvilke værdier der skal udskrives 
const formoutputFRIVILLIG = document.getElementById("output-frivillig");
//fortæller hvilken tom div jeg udskriver i


formoutputFRIVILLIG.innerHTML = "<br><b>Navn </b> <br>" + sessionStorage.getItem("fornavn") + "<br><br><b>Efternavn </b><br> " + sessionStorage.getItem("efternavn") + "<br> <br><b>Mail </b><br> " + sessionStorage.getItem("email") + "<br><br><b>Mobil </b><br>" + sessionStorage.getItem("tlf") + "<br><br><b> Lidt om dig <br> </b>" + sessionStorage.getItem("infoomdig") + "<br><br><b>Har du været frivillig før</b><br>" + sessionStorage.getItem("checkboxansoegning1") + "<br></b>" + sessionStorage.getItem("checkboxansoegning2");