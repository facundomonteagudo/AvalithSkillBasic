const stringA = "Rojo,Verde,Amarillo,Azul";
const stringB = "Sergio";
const stringC = "Damian";
const stringD = "Mi nombre es Damian y tengo 28 años";
// -------
let tamanioA = 0;
let cantidadLetraR = 0;
let nombreCompleto = "";
let fraseOtroNombre = "";
let posicionNombre = null;
let arregloParseado = [];

/* 1 - tamanioA: Tamaño del string A. */
tamanioA = stringA.length;

/* 2 - cantidadLetraR: Cuantas letras R (Mayuscula o minuscula) hay en el string A. */
cantidadLetraR = stringA.match(/r/gi).length;

/* 3 - nombreCompleto: Formar el nombre completo a partir de los strings B y C. */
nombreCompleto = `${stringB} ${stringC}`;

/* 4 - fraseOtroNombre: Cambiar el nombre 'Damian' del string D con el nombre del string B. */
fraseOtroNombre = stringD.replace("Damian", stringB);

/* 5 - posicionNombre: Posicion de 'Damian' en el string D */
posicionNombre = stringD.indexOf("Damian");

/* 6 - arregloParseado: Arreglo formado a partir del string A */
arregloParseado = stringA.split(",");

console.log(cantidadLetraR);
console.log(nombreCompleto);
console.log(fraseOtroNombre);
console.log(posicionNombre);
console.log(arregloParseado);
