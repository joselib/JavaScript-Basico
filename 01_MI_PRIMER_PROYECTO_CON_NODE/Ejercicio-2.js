// lista con los siguientes elementos: Tu nombre (string), Tu edad (number), ¿Eres desarrollador? (boolean), Tu fecha de nacimiento (Date), Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const persona = {
    nombre: "jose",
    edad: 28,
    isDesarrollador: true,
    fechaNacimiento: new Date("march 1 1994"),
    libroFavorito: {
        titulo: "el señor de los anillos",
        autor: "J.R.R. Tolkien",
        fecha: new Date("march 1 1954"),
        url: "https://www.google.com"
    }

}
console.log(persona);