var formulario = document.forms.formulario_TiempoAadelantadas
var resultado = document.getElementById("res-TiempoAadelantadas")

formulario.renta.oninput = calcularAV
formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let s = parseFloat(formulario.monto.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = ((Math.log10(((s*i)+r*(1+i))))-(Math.log10((r*(1+i)))))/(Math.log10(1+i))


    resultado.innerHTML = total.toFixed(2)
}           