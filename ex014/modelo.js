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
   for (var c = i; c <= f ; c += p ) {
      res.innerHTML += ( c )
    }
    }






   // while (n <= fim) {
   //     res.innerHTML = (n)
  //      n+pas
   // }
}
