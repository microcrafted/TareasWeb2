let alumno = {
    id: 123456789,
    nombre: "Luis",
    PrimerApellido: "Hernández",
    SegundoApellido: "García",
    Edad: 19,
    Titulado: false,
    Egresado: {
        estado: false
    },
    kinder: {
        nombre: "Jardín de Niños Rosario Castellanos",
        actividadPrimerdia: function () {
            console.log("Jugar con bloques");
        }
    },
    SemestreEnCurso: "Cuarto",
    Turno: "Matutino",
    MateriasDebedidas: 1,
    Promedio: 8.7,
    Domicilio: {
        calle: "Av. Revolución",
        numero: 1500,
        colonia: "San Ángel",
        Municipio: "Álvaro Obregón",
        Estado: "Ciudad de México",
        Pais: "México",
        Continente: "América",
        Planeta: "Tierra",
        Galaxia: "Vía Láctea",
    }
}

console.log(alumno.kinder.nombre);
