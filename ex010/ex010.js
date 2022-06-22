
function clicar() {
    var boxvel1 = window.document.querySelector("input#boxvel")
    var res = window.document.querySelector("div#resposta")
    var velocidade = Number(boxvel1.value) 
    res.innerHTML = "<p>Sua velocidade foi " +velocidade+ "km/h.</P>"
    if (velocidade > 60){
        res.innerHTML += "<p>Você ultrapassou o limite de velocidade permitido. MULTADO!</p>"
    }
    res.innerHTML += "<p>Dirija com cuidado!</p>"
}