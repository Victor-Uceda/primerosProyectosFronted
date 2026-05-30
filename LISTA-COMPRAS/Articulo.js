<<<<<<< HEAD
class Articulo {

    constructor(nombre, cantidad, precio) {
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get cantidad() {
        return this._cantidad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set precio(precio) {
        this._precio = precio;
    }

    totalPrecio() {
       return (Number(this._cantidad) * Number(this._precio));
    }
    
    toString() {
        return `${this._nombre} x${this._cantidad} - Precio: S/.${this._precio}|`;
    }
=======
class Articulo {

    constructor(nombre, cantidad, precio) {
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get cantidad() {
        return this._cantidad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    set precio(precio) {
        this._precio = precio;
    }

    totalPrecio() {
       return (Number(this._cantidad) * Number(this._precio));
    }
    
    toString() {
        return `${this._nombre} x${this._cantidad} - Precio: S/.${this._precio}|`;
    }
>>>>>>> eeab32d949340c3755f33608a23c866ca781c733
}