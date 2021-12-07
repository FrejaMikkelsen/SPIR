const formoutputANSOEG = document.getElementById("outputansoegning");
//fortæller hvilken tom div jeg udskriver i


formoutputANSOEG.innerHTML = "<b>Fulde navn </b> <br>" + sessionStorage.getItem("navn") + "<br><br><b>Mobil </b> <br>" + sessionStorage.getItem("mobil") + "<br> <br><b>Mail </b><br> " + sessionStorage.getItem("mail") + "<br><br><b>Titel på din idé </b><br>" + sessionStorage.getItem("titel1") + "<br><br><b> Fortæl os lidt om din idé<br> </b>" + sessionStorage.getItem("info1") + "<br><br><b>Hvem gør projektet en forskel for?</b><br>" + sessionStorage.getItem("info2") + "<br><br><b>Hvad skal pengene helt konktret bruges til, hvis du vinder?<br></b>" + sessionStorage.getItem("info3") + "<br><br><b>Her kan du indsætte links til hjemmeside, instagram o.l </b><br>" + sessionStorage.getItem("info4") + "<br><br><b>Er du indforstået med at såfremt du vinder, skal du komme tilbage til næste SPIR event og fortælle om dine fremskridt?<br></b> " + sessionStorage.getItem("checkboxansoegning1");

