module PracticaT4 {
    export class Persona {
        private _nombre: string;
        private _apellido: string;
        private _sexo: string;
        private _edad: number;
        private _altura: number;
        private _peso: number;
    
        constructor(nombre:string, apellido:string, sexo:string, edad:number, altura:number, peso:number) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }
    
        get nombre() {
            return this._nombre;
        }
    
        get apellido() {
            return this._apellido;
        }
    
        get sexo() {
            return this._sexo;
        }
    
        get edad() {
            return this._edad;
        }
    
        get altura() {
            return this._altura;
        }
    
        get peso() {
            return this._peso;
        }
    
        set nombre(nombre:string) {
            this._nombre = nombre;
        }
    
        set apellido(apellido:string) {
            this._apellido = apellido;
        }
    
        set sexo(sexo:string) {
            this._sexo = sexo;
        }
    
        set edad(edad:number) {
            this._edad = edad;
        }
        
        set altura(altura:number) {
            this._altura = altura;
        }
        set peso(peso:number) {
            this._peso = peso;
        }
    }

    export class Estudiante extends Persona {
        private _promocion: string;
    
        constructor(nombre:string, apellido:string, sexo:string, edad:number, altura:number, peso:number, promocion:string) {
            super(nombre, apellido, sexo, edad, altura, peso);
            this._promocion = promocion;
        }
    
        get promocion() {
            return this._promocion;
        }
    
        set promocion(promocion:string) {
            this._promocion = promocion;
        }
    }

    export class Curso {
        private _materia:string;
    
        constructor(materia:string) {
            this._materia = materia;
        }
    
        get materia() {
            return this._materia;
        }
    
        set materia(materia:string) {
            this._materia = materia;
        }
    }

    export class Formador extends Persona {
        private _listaDeCursos: Curso[];
    
        constructor(nombre:string, apellido:string, sexo:string, edad:number, altura:number, peso:number, listaDeCursos: Curso[]) {
            super(nombre, apellido, sexo, edad, altura, peso);
            this._listaDeCursos = listaDeCursos;
        }
    
        aniadirCurso(curso:Curso) {
            this._listaDeCursos.push(curso);
        }
    
        mostrarListaCursos() {
            return this._listaDeCursos.map(curso => curso.materia).join("\n");
        }
    
        mostrar() {
            document.write(`Yo, ${this.nombre} ${this.apellido}, enseño cursos de:\n${this.mostrarListaCursos()}` )
        }
    }
}