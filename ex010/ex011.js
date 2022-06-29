    
function clicar () {
    var resposta = document.getElementById ("res")
    var nac1 = document.getElementById ("box1").value
    resposta.innerText = "Você nasceu no " +nac1+ " ."
    if (nac1 =="Brasil")
    resposta.innerText += "Você é brasileiro."
    else
    resposta.innerText += "Você é estrangeiro"
}