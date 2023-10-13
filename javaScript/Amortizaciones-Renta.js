var formulario = document.forms.formulario_amortizaciones_Renta
var resultado = document.getElementById("res-amortizaciones_Renta")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = r*((i*((1+i)**n))/(((1+i)**n)-1))


    resultado.innerHTML = total.toFixed(2)
}