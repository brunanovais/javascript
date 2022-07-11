function clicar(){
   
    var ini = document.getElementById ("inicio")
    var i = Number(ini.value)
    var fim = document.getElementById ("fim")
    var f = Number(fim.value)
    var pas = document.getElementById("passo")
    var p = Number(pas.value)
    var res = document.getElementById("resposta") 
    if (ini.value.length ==0) {
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML =("Contando...")
        if (f > i) {
            for (var c = i; c <= f ; c += p ) {
            res.innerHTML += ( c+ " \u{1F449}" )
            
        } 
        res.innerHTML += "\u{1F3C1}"
    } else {
        for (var c = i; c >= f ; c -= p ) {
            res.innerHTML += ( c+ " \u{1F449}" )
    }
    res.innerHTML += "\u{1F3C1}"
}
}

}