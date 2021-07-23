const originalA = {
  nombre: "Sergio",
  edad: 28,
  preferidos: ["Pizza", "Hamburguesa"],
  madre: {
    nombre: "Sandra",
    edad: 54,
  },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];

/* 1 - edadMadre: Edad de la madre */
edadMadre = originalA.madre.edad;

/* 2 - objetoParseado: Objeto "originalB" parseado a objeto */
objetoParseado = JSON.parse(originalB);

/* 3 - existeClaveMadreA: Si existe la clave madre en el objeto 'originalA' */
existeClaveMadreA = originalA.hasOwnProperty("madre");

/* 4 - existeClaveMadreB: Si existe la clave madre en el objeto 'originalB' */
existeClaveMadreB = originalB.hasOwnProperty("madre");

/* 5 - nombreDelMasJoven: Nombre de la persona mas joven */
nombreDelMasJoven =
  originalA.edad < originalB.edad ? originalA.nombre : objetoParseado.nombre;

/* 6 - clavesDelObjeto: Que claves contiene el objeto 'originalA' */
clavesDelObjeto = Object.keys(originalA);

console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);
