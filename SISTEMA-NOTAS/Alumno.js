<<<<<<< HEAD
class Alumno {
    constructor(nombre, nota){
        this._nombre = nombre;
        this._nota = nota;
    }

    get nombre(){
        return this._nombre;
    }

    get nota(){
        return this._nota
    }

    toString(){
        return `${this._nombre} - ${this._nota}`
    }
=======
class Alumno {
    constructor(nombre, nota){
        this._nombre = nombre;
        this._nota = nota;
    }

    get nombre(){
        return this._nombre;
    }

    get nota(){
        return this._nota
    }

    toString(){
        return `${this._nombre} - ${this._nota}`
    }
>>>>>>> eeab32d949340c3755f33608a23c866ca781c733
}