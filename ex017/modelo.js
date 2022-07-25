var numbox1 = document.getElementById("numbox")
var num = Number(numbox1.value) 
var vetor = []

function adcionar() {
    num = Number(numbox1.value) 
    if (num == "" || num < 1 || num > 100) {
         window.alert(' Digite um numero entre 1 e 100!')
    } else {
        var lista = document.getElementById("sel")
        lista.options[lista.options.length] = new Option(+num+ " foi adcionado");
        vetor.push(Number(num.value)) 
    }
  
}

function finalizar (){
    num = Number(numbox1.value) 
    var res = document.getElementById("resposta")
    var tam = vetor.length
    res.innerText = (tam)
}