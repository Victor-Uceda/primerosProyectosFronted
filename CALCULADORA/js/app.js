console.log('aplicacion calculadora');

function sumar() {
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) {
        document.getElementById('resultado').innerText = "No es un número válido!";
    } else {
        document.getElementById('resultado').innerText = "Resultado: " + resultado;
    }
}