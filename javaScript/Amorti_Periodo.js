var formulario = document.forms.formulario_Amorti_Periodo
var resultado = document.getElementById("res-Amorti_Periodo")

formulario.renta.oninput = calcularAV
formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let V = parseFloat(formulario.monto.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = (Math.log10(r)-Math.log10(r-i*V))/(Math.log10(1+i))


    resultado.innerHTML = total.toFixed(2)
}           