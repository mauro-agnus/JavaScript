// datos
const numeros = [1, 3, 5, 4, 6, 8];

// 1) Sumar números
function sumarArray(arr) {
  let suma = 0;
  for (const n of arr) {
    suma += n;
  }
  return suma;
}
console.log("Suma:", sumarArray(numeros)); // 27

// 2) Contar pares
function contarPares(arr) {
  let contador = 0;
  for (const n of arr) {
    if (n % 2 === 0) contador++;
  }
  return contador;
}
console.log("Pares:", contarPares(numeros)); // 3

// 3) Multiplicar por 2 (devuelve nuevo array)
function multiplicarPorDos(arr) {
  const resultado = [];
  for (const n of arr) {
    resultado.push(n * 2);
  }
  return resultado;
}
console.table(multiplicarPorDos(numeros)); // [2,6,10,8,12,16]

// 4) Encontrar el mayor (maneja arrays vacíos)
function mayorNumero(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let mayor = arr[0];
  for (const n of arr) {
    if (n > mayor) mayor = n;
  }
  return mayor;
}
console.log("Mayor:", mayorNumero(numeros)); // 8

// 5) Mostrar (o devolver) valores mayores a un umbral
const edades = [18, 21, 15, 78, 8];
function filtrarMayoresQue(arr, umbral = 20) {
  const salida = [];
  for (const valor of arr) {
    if (valor > umbral) salida.push(valor);
  }
  return salida;
}
console.table("Mayores de 20:", filtrarMayoresQue(edades, 20)); // [21,78]
