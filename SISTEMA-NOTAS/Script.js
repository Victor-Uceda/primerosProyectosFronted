<<<<<<< HEAD
const botonAgregar = document.getElementById("botonAgregar");
const nombreEstudiante = document.getElementById("nombreEstudiante");
const notaEstudiante = document.getElementById("notaEstudiante");
const listaEstudiantes = document.getElementById("listaNotas");
const promedioNotas = document.getElementById("promedio");

document.addEventListener("DOMContentLoaded", renderAlumnos);
botonAgregar.addEventListener("click", obtenerAlumno);


const alumnos = [];
let sumaNotas = 0

function renderAlumnos() {
    //limpiamos el inner para no duplicarlo, y que simplemente se vuelva a renderizar todo
    listaEstudiantes.innerHTML = "";
    if (alumnos.length > 0) {
        for (let i = 0; i < alumnos.length; i++) {
            crearLi(alumnos[i]);
        }

        promedioNotas.textContent = `Promedio notas: ${calcularPromedio(sumaNotas, alumnos.length)}`;
    }


}

function obtenerAlumno() {
    if (nombreEstudiante.value && notaEstudiante.value) {
        //recibir datos del input y crear alumno, añadir alumno al array
        const nombre = nombreEstudiante.value;
        const nota = Number(notaEstudiante.value);

        const alumnoIngresado = new Alumno(nombre, nota);
        sumaNotas = sumaNotas + alumnoIngresado.nota;
        alumnos.push(alumnoIngresado);

        //limpiar input
        nombreEstudiante.value = "";
        notaEstudiante.value = "";
        renderAlumnos();
    } else {
        alert("Ingrese ambos datos correctamente.")
    }
}

// se introduce el elemento alumno y compara, se eleimina cuando se encuentra y se vuelve a renderizar
function eliminarAlumno(alumno) {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] === alumno) {
            alumnos.splice(i, 1);
            break;
        }
    }
    renderAlumnos();
}

function crearLi(alumno) {
    const nuevoAlumno = document.createElement("li");
    nuevoAlumno.innerHTML = `<span>${alumno.toString()}</span>
        <button class="botonEliminar btn btn-danger"> Eliminar </button>`;

    //lo insertamos en el ul
    listaEstudiantes.appendChild(nuevoAlumno);
    const botonEliminar = nuevoAlumno.querySelector(".botonEliminar");

    //agregamos la promesa y con la funcion flecha le metemos el alumno a eliminar
    botonEliminar.addEventListener("click", () => {
        eliminarAlumno(alumno);
    });
}

function calcularPromedio(a, b) {
    return a / b;
}





=======
const botonAgregar = document.getElementById("botonAgregar");
const nombreEstudiante = document.getElementById("nombreEstudiante");
const notaEstudiante = document.getElementById("notaEstudiante");
const listaEstudiantes = document.getElementById("listaNotas");
const promedioNotas = document.getElementById("promedio");

document.addEventListener("DOMContentLoaded", renderAlumnos);
botonAgregar.addEventListener("click", obtenerAlumno);


const alumnos = [];
let sumaNotas = 0

function renderAlumnos() {
    //limpiamos el inner para no duplicarlo, y que simplemente se vuelva a renderizar todo
    listaEstudiantes.innerHTML = "";
    if (alumnos.length > 0) {
        for (let i = 0; i < alumnos.length; i++) {
            crearLi(alumnos[i]);
        }

        promedioNotas.textContent = `Promedio notas: ${calcularPromedio(sumaNotas, alumnos.length)}`;
    }


}

function obtenerAlumno() {
    if (nombreEstudiante.value && notaEstudiante.value) {
        //recibir datos del input y crear alumno, añadir alumno al array
        const nombre = nombreEstudiante.value;
        const nota = Number(notaEstudiante.value);

        const alumnoIngresado = new Alumno(nombre, nota);
        sumaNotas = sumaNotas + alumnoIngresado.nota;
        alumnos.push(alumnoIngresado);

        //limpiar input
        nombreEstudiante.value = "";
        notaEstudiante.value = "";
        renderAlumnos();
    } else {
        alert("Ingrese ambos datos correctamente.")
    }
}

// se introduce el elemento alumno y compara, se eleimina cuando se encuentra y se vuelve a renderizar
function eliminarAlumno(alumno) {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] === alumno) {
            alumnos.splice(i, 1);
            break;
        }
    }
    renderAlumnos();
}

function crearLi(alumno) {
    const nuevoAlumno = document.createElement("li");
    nuevoAlumno.innerHTML = `<span>${alumno.toString()}</span>
        <button class="botonEliminar btn btn-danger"> Eliminar </button>`;

    //lo insertamos en el ul
    listaEstudiantes.appendChild(nuevoAlumno);
    const botonEliminar = nuevoAlumno.querySelector(".botonEliminar");

    //agregamos la promesa y con la funcion flecha le metemos el alumno a eliminar
    botonEliminar.addEventListener("click", () => {
        eliminarAlumno(alumno);
    });
}

function calcularPromedio(a, b) {
    return a / b;
}





>>>>>>> eeab32d949340c3755f33608a23c866ca781c733
