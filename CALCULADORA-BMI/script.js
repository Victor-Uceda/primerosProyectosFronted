<<<<<<< HEAD
function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value)/100;
    
    if (peso,altura) {
             let resultado = (peso / ((altura)**2)).toFixed(2);
    
    document.getElementById("resultado").textContent = `Su BMI es: ${resultado}`;

    } else {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").textContent = `Porfavor, introduce valores validos.`
    }
    

=======
function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value)/100;
    
    if (peso,altura) {
             let resultado = (peso / ((altura)**2)).toFixed(2);
    
    document.getElementById("resultado").textContent = `Su BMI es: ${resultado}`;

    } else {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").textContent = `Porfavor, introduce valores validos.`
    }
    

>>>>>>> eeab32d949340c3755f33608a23c866ca781c733
}