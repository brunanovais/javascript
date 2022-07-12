function clicar(){
    var n = document.getElementById("numero")
    var s = document.getElementById("tabuada")
    if (n.value.length == 0){
        window.alert ("Por favor, digite um número!")
    } else {
        var n = Number(numero.value)
        s.innerHTML = ""
        for (var c = 1; c <= 10; n * c) {
            var item = document.createElement("option")
            item.text = n+ "x" +c+ "=" +n*c
            item.value = "tab"+c
            s.appendChild(item)
            c++
        }
    }
}