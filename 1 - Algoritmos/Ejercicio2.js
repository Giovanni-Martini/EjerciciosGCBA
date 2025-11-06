// 2 - El factorial de un entero positivo n, que se define en principio como el producto de
// todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n. Por
// ejemplo:
// 5! = 1 x 2 x 3 x 4 x 5 = 120
// Escribir una función que calcule el Factorial de N.
// a - imperativa b - funcional

// a - Imperativa

function factorial(numero) {
  let resultado;
  if (numero == 1) {
      resultado = 1;
    } else {
        resultado = numero * factorial(numero - 1);
    }
  return resultado;
}

console.log(factorial(5));

// b - Funcional

const factorialFuncional = (x) => (x == 1 ? x * 1 : x * factorialFuncional(x-1))

