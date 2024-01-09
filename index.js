var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PracticaT4;
(function (PracticaT4) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, sexo, edad, altura, peso) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }
        Object.defineProperty(Persona.prototype, "nombre", {
            get: function () {
                return this._nombre;
            },
            set: function (nombre) {
                this._nombre = nombre;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "apellido", {
            get: function () {
                return this._apellido;
            },
            set: function (apellido) {
                this._apellido = apellido;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "sexo", {
            get: function () {
                return this._sexo;
            },
            set: function (sexo) {
                this._sexo = sexo;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "edad", {
            get: function () {
                return this._edad;
            },
            set: function (edad) {
                this._edad = edad;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "altura", {
            get: function () {
                return this._altura;
            },
            set: function (altura) {
                this._altura = altura;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "peso", {
            get: function () {
                return this._peso;
            },
            set: function (peso) {
                this._peso = peso;
            },
            enumerable: false,
            configurable: true
        });
        return Persona;
    }());
    PracticaT4.Persona = Persona;
    var Estudiante = /** @class */ (function (_super) {
        __extends(Estudiante, _super);
        function Estudiante(nombre, apellido, sexo, edad, altura, peso, promocion) {
            var _this = _super.call(this, nombre, apellido, sexo, edad, altura, peso) || this;
            _this._promocion = promocion;
            return _this;
        }
        Object.defineProperty(Estudiante.prototype, "promocion", {
            get: function () {
                return this._promocion;
            },
            set: function (promocion) {
                this._promocion = promocion;
            },
            enumerable: false,
            configurable: true
        });
        return Estudiante;
    }(Persona));
    PracticaT4.Estudiante = Estudiante;
    var Curso = /** @class */ (function () {
        function Curso(materia) {
            this._materia = materia;
        }
        Object.defineProperty(Curso.prototype, "materia", {
            get: function () {
                return this._materia;
            },
            set: function (materia) {
                this._materia = materia;
            },
            enumerable: false,
            configurable: true
        });
        return Curso;
    }());
    PracticaT4.Curso = Curso;
    var Formador = /** @class */ (function (_super) {
        __extends(Formador, _super);
        function Formador(nombre, apellido, sexo, edad, altura, peso, listaDeCursos) {
            var _this = _super.call(this, nombre, apellido, sexo, edad, altura, peso) || this;
            _this._listaDeCursos = listaDeCursos;
            return _this;
        }
        Formador.prototype.aniadirCurso = function (curso) {
            this._listaDeCursos.push(curso);
        };
        Formador.prototype.mostrarListaCursos = function () {
            return this._listaDeCursos.map(function (curso) { return curso.materia; }).join("\n");
        };
        Formador.prototype.mostrar = function () {
            console.log("Yo, ".concat(this.nombre, " ").concat(this.apellido, ", ense\u00F1o cursos de:\n").concat(this.mostrarListaCursos()));
        };
        return Formador;
    }(Persona));
    PracticaT4.Formador = Formador;
    var curso1 = new Curso("Java");
    var curso2 = new Curso("JavaScript");
    var formador1 = new Formador("Álvaro", "Martín", "Masculino", 22, 178, 70, [curso1, curso2]);
    formador1.mostrar();
})(PracticaT4 || (PracticaT4 = {}));
