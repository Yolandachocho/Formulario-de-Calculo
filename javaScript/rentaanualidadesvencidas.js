var formulario = document.forms.formulario_Renta_anVencidas
var resultado = document.getElementById("res-anualidades-vencidas-Renta")

formulario.monto.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let m = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = (i/(((1+i)**n)-1))*m


    resultado.innerHTML = total.toFixed(2)
}