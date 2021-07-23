const original = ["Rojo", "Verde", "Azul", "Amarillo"];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

/* 1 - indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo' */
indiceAmarillo = original.indexOf("Amarillo");

/* 2 - cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)  */
cantidadColoresConA = original.reduce((total, item) => {
  return (total += item.toLowerCase().includes("a") ? 1 : 0);
}, 0);

/* 3 - arregloSinAzul: El arreglo original sin el valor 'Azul'. */
arregloSinAzul = original.filter((item) => item != "Azul");

/* 4 - ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre. */
ordenadoPorCantidadLetras = [...original].sort((a, b) => a.length - b.length);

/* 5 - arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo. */
arregloConNuevoColorInicio = ["Naranja", ...original]; /// unshift

/* 6 - arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo. */
arregloConNuevoColorFin = [...original, "Violeta"]; /// push

console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);

console.log(original);
