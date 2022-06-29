function clicar () {
    var pais = document.getElementById("box1").value
    var resposta = document.getElementById("res")
    resposta.innerText = "Você nasceu em " +pais+ "."
    if ( pais == "Alemanha" || pais == "Portugal ") {
        resposta.innerText += "Você é Europeu" 
       
    }
    else
        resposta.innerText += "Vone não é europeu"
} 