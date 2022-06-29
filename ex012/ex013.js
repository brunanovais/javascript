
var agora = new Date
var hora = agora.getHours
if (hora <= 4){
    console.log("Boa Madrugada")
} else if (hora >= 18) {
    console.log ("Boa Noite")
} else if (hora < 12){
    console.log ("BOM DIA")
} 
else {
    console.log ("Boa Tarde")
}