function calculateLove() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    if (name1 && name2 ) {
        const hash = (name1 + name2).split('').reduce((acc,char) => acc + char.charCodeAt(0),0);
        console.log(hash);
        const lovePorcentage = hash % 101;
        document.getElementById("result").style.color = "green";
        document.getElementById("result").textContent = `Tienes un ${lovePorcentage}% de compatibilidad!`
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").textContent = `Por favor, ingresa ambos nombres`   
    }
}
    
