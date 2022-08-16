function clicar(){
    var n = document.getElementById("numero")
    var s = document.getElementById("tabuada")
    if (n.value.length == 0){
        window.alert ("Por favor, digite um número!")
    } else {
       n = Number(numero.value)
       montar_tabela(n, s)
    }
}

function montar_tabela(numero_usuario, select_tabuada) {
    
    select_tabuada.innerHTML = ""
    for (var c = 1; c <= 10; numero_usuario * c) {
        var item = document.createElement("option")
        item.text = numero_usuario+ "x" +c+ "=" +produto(numero_usuario, c)
        item.value = "tab"+c
        select_tabuada.appendChild(item)
        c++
    }

}

function produto(multiplicador, multiplicando){

    return multiplicador*multiplicando
}

