
function carregar() {
    var msg = document.getElementById ("mensagem")
    var imagem= document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = "Agora são " +hora+ " horas."
    if (hora >= 0 && hora < 12) {
        img.src = "manha.jpg"
    }
    
    else if (hora >= 12 && hora < 18) {
        img.src = "tarde.jpg"
    }
    else {
        imag.src = "noite.jpg"
    }
}