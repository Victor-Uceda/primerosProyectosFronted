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
}