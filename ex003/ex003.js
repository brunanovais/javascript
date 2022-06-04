  var n1 = Number.parseInt(window.prompt ("Qual a sua idade?"))
    var n2 = Number(window.prompt ("Qual é o seu peso?")) 
    var media = (n1 + n2)/2
    window.document.getElementById("media").innerHTML = media
    if (media>=5){
        window.alert ("ta gorda")
    }
    else {
        window.alert("ta ok")
    }
   
    //  window.alert ("O resultado da media é" + media)
    