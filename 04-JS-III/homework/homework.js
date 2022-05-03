// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let nuevoArray = [];
  for(i = 0; i < array.length; i++){
      nuevoArray[i] = array[i] + 1;
  }
  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = "";
  
  for(i = 0; i < palabras.length; i++){
    if(!(palabras.length -1 == i)){
      frase = frase.concat(palabras[i]).concat(" ");
   } else {
      frase = frase.concat(palabras[i]);
   }
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  presente = false;
  for(i = 0; i < array.length; i++){
    console.log("array: " + array[i]);
    if(array[i] === elemento){
      presente = true;
    }
  }
  return presente;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  total = 0;
  numeros.forEach( function(valor) {
    total = total + valor;
  });
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  total = 0;
  resultadosTest.forEach( function(valor) {
    total = total + valor;
  });
  total = total / resultadosTest.length;
  return total;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  max = 0;
  numeros.forEach( function(valor){
      if(valor > max){
          max = valor;
      }
  });
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1){
    return 0;
  }
  total = 1;
  for(i = 0; i < arguments.length; i++){
      total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cantidad = 0;
  max = 18;
  arreglo.forEach( function(valor){
      if(valor > max){
          cantidad ++;
      }
  });
  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if((numeroDeDia == 1) || (numeroDeDia == 7)){
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const lista = Array.from(String(n), Number);
  estado = false;
  lista.forEach(function(valor, index){
      if(index == 0 && valor == 9){
        estado = true;
      }
    });
  if((Math.floor(n) == n) && estado){
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  cantidad = 0;
  verdad = true;
  arreglo.forEach( function(valor, indice){
      if(indice == 0){
          cantidad = valor;
      }
      if(cantidad != valor){
          verdad = false;
      }
  });
  return verdad;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoMes = [];
  contador = 0;
  array.forEach(function(valor, indice){
      if((valor == "Enero") ||(valor == "Marzo") ||(valor == "Noviembre")){
          nuevoMes.push(valor);
          contador++;
      } 
  });
  if(contador < 3){
    return "No se encontraron los meses pedidos";
  }
  return nuevoMes;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  array.forEach(function(valor){
      if(valor > 100){
          nuevoArray.push(valor);
          
      }
  });
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  sumando = 2;
  var nuevoArray = [];
  for(i = 1; i <= 10; i++){
      //console.log("ciclo ->" + i + " numero **" + numero);
      if(i === (numero + sumando)){
          return "Se interrumpió la ejecución";
      }
      numero = numero + sumando;
      nuevoArray.push(numero);
  }
  return nuevoArray;
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  sumando = 2;
  var nuevoArray = [];
  for(i = 1; i <= 10; i++){
      if(i === 5){
          continue;
      }
      numero = numero + sumando;
      nuevoArray.push(numero);
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
