const original = {
  a: 1,
  b: 2,
  c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

/* - sinB: Una copia del objeto original sin la clave "b" */
const { a, c } = original;
sinB = { a, c };

/* - valorDeC: Obtener el valor de la clave "c". (¡No puede hacer "valorDeC = original.c"!)*/
const { c: value } = original;
valorDeC = value;

console.log(sinB);
console.log(valorDeC);
