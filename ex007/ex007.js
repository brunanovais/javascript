
function somar() {
    var valor1 = window.document.getElementById("caixa1")
    var valor2 = window.document.getElementById("caixa2")
    var res = window.document.getElementById("resultado")
    var numero1 = Number(valor1.value)
    var numero2 = Number(valor2.value)
    var soma = numero1 + numero2
    resultado.innerHTML = soma
}