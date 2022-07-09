function clicar() {
    var data = new Date
    var ano = data.getFullYear()
    var datanas = document.getElementById ("databox")
    var res = document.getElementById ("resposta")
    var sex = document.getElementsByName ("radsex")
    
    if (datanas.value.lenght > ano || datanas.value == 0) {
        window.alert ("Verifique os dados e tente novamente!")
    } else {
        var idade = ano - datanas.value
        var genero = ""
        res.style.textAlign = "center"
        var img = document.createElement ("img")
        
        if (sex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade < 12) {
                img.setAttribute ("src", "criancamas.png")
            } else if (idade < 20) {
                img.setAttribute ("src", "homemjovem.png")
            } else if (idade < 60) {
                img.setAttribute ("src", "homemadulto.png")
            } else {
                img.setAttribute ("src", "idoso.png")
            }
        } else if (sex[1].checked){
            genero = "mulher"
            } if (idade >=0 && idade < 12) {
                img.setAttribute ("src", "criancafem.png")
            } else if (idade < 20) {
                img.setAttribute ("src", "jovemmulher.png")
            } else if (idade < 60) {
                img.setAttribute ("src", "mulher.png")
            } else {
                img.setAttribute ("src", "idosa.png")
            }
        }
        res.innerHTML = ("Você é " +genero+ " com " +idade+ " anos.")
        res.appendChild(img)
    }
   