var numbox1 = document.getElementById("numbox")
var num = Number(numbox1.value) 
var vetor = [num]

function adcionar() {
    vetor = [num]
    num = Number(numbox1.value) 
    if (num == "") {
         window.alert('[ERRO] Digite um numero!')
    } else {
        var lista = document.getElementById("sel")
        lista.options[lista.options.length] = new Option(+num+ " foi adcionado");
        vetor.push(num)
    }
   
}

function finalizar (){
    num = Number(numbox1.value) 
    var res = document.getElementById("resposta")
    res.innerText = (vetor.sort())
    
}