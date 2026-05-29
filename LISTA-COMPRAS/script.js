const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");
const nombreIngresado = document.getElementById("nombreArticulo");
const cantidadIngresado = document.getElementById("cantidad");
const precioIngresado = document.getElementById("precio");
const totalCompraTexto = document.getElementById("cantidadTotal");

document.addEventListener("DOMContentLoaded", cargarCompras);
btnAgregar.addEventListener("click", agregarCompra);

const compras = [];

let totalCompra = 0;


function cargarCompras() {
    for (let i = 0; i < compras.length; ++i) {
        crearLi(compras[i]);
    }
}

function agregarCompra() {
    const nombre = nombreIngresado.value.trim();
    const cantidad = cantidadIngresado.value.trim();
    const precio = precioIngresado.value.trim();

    if (nombre && cantidad && precio) {
        // creamos el articulo y le asignamos sus cantidades
        const articulo = new Articulo(nombre, cantidad, precio);

        //para mostrar total de la compra
        totalCompra = totalCompra + articulo.totalPrecio();
        compras.push(articulo);
        crearLi(articulo);
    } else {
        alert("Ingrese todos los datos correctamente.");
    }
}

function crearLi(compra) {
    //creamos el "li" y le asignamos el contenido
    const nuevoArticulo = document.createElement("li");
    nuevoArticulo.innerHTML = `<span>${compra.toString()} Total : S/.${compra.totalPrecio()}</span>
        <button class="btnEliminar"> Eliminar </button>`;

    //lo insertamos en el ul
    lista.appendChild(nuevoArticulo);


    const btnEliminar = nuevoArticulo.querySelector(".btnEliminar");
    btnEliminar.addEventListener("click", function () {
        eliminarCompra(compra, nuevoArticulo);
    });

    //limpiamos el input
    nombreIngresado.value = "";
    cantidadIngresado.value = "";
    precioIngresado.value = "";

    totalCompraTexto.textContent = `PRECIO TOTAL: ${totalCompra}`;
}

function eliminarCompra(compra, elementoLi) {

    const indice = compras.indexOf(compra);
    compras.splice(indice, 1);
    totalCompra = totalCompra - compra.totalPrecio();

    if (compras.length === 0) {
        totalCompraTexto.textContent = "";
    } else {
        totalCompraTexto.textContent = `PRECIO TOTAL: ${totalCompra}`;
    }

    elementoLi.remove();
}
