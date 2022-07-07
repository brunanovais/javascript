function clicar() {
    var data = new Date
    var ano = data.getFullYear()
    var datanas = document.getElementById ("databox")
    var res = document.getElementById ("resposta")
    var sex = document.getElementsByName ("radsex")
    var idade = ano - datanas.value
    var genero = ""
    if (datanas.value.lenght > ano || datanas.value == 0) {
        window.alert ("Verifique os dados e tente novamente!")
    } else {
        
        if (sex[0].checked){
            genero = "Homem"
        } else if (sex[1].checked) {
            genero ="mulher"
        }
        res.innerHTML = ("Você é " +genero+ " com " +idade+ " anos.")
    }
    switch {
        
    }
}