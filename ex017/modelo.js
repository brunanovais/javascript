function adcionar(){
    var numbox1 = document.getElementById("numbox")
    var num = Number(numbox1.value) 
    
    if (num == "") {
         window.alert('[ERRO] Digite um numero.')
    } else {
        var lista = document.getElementById("sel")
        lista.options[lista.options.length] = new Option(+num+ " foi adcionado");
        //lista.innerText=("Você adcionou " +num)
        //window.alert(num)
    }
   
}