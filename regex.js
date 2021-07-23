const texto =
  "Mar del Plata​ es una ciudad ubicada en el sudeste de la provincia de Buenos Aires";
let textoCensurado = null;

/*  Utilizando una expresion regular, reemplace todas las letras del texto con "X" */
textoCensurado = texto.replace(/\w/g, "X");

console.log(textoCensurado);
