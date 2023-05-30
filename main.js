//VARIABLES
//Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por la pantalla del navegador y la consola.
// Variables de diferentes tipos de datos
let varNumero = 10;
document.write("Número: " + varNumero + "<br>");
console.log("Número:", varNumero);

let varTexto = "Hola mundo!";
document.write("Texto: " + varTexto + "<br>");
console.log("Texto:", varTexto);

let varBooleano = true;
document.write("Booleano: " + varBooleano + "<br>");
console.log("Booleano:", varBooleano);

//De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operacionesmatemáticas básicas
//suma
let operacionSuma = varNumero + 5;
document.write("Suma: " + operacionSuma + "<br>");
console.log("Suma:", operacionSuma);

//resta
let operacionResta = varNumero - 3;
document.write("Resta: " + operacionResta + "<br>");
console.log("Resta:", operacionResta);

//multiplicación
let operacionMultiplicacion = varNumero * 2;
document.write("Multiplicación: " + operacionMultiplicacion + "<br>");
console.log("Multiplicación:", operacionMultiplicacion);

//división
let operacionDivision = varNumero / 4;
document.write("División: " + operacionDivision + "<br>");
console.log("División:", operacionDivision);

//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas cadenas de texto
let otroTexto = " Qué tal?";
let concatenacion = varTexto + otroTexto;
document.write("Concatenación: " + concatenacion + "<br>");
console.log("Concatenación:", concatenacion);

//FUNCIONES

//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]" con un parámetro para el nombre.
function saludo(nombre) {
  let mensaje = "Hola " + nombre;
  document.write(mensaje + "<br>");
  console.log(mensaje);
}

saludo("Coders");

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás imprimir el resultado por la pantalla del navegador y la consola.
function sumandoNumeros(numeroUno, numeroDos) {
  let suma = numeroUno + numeroDos;
  document.write("El resultado de la suma es: " + suma + "<br>");
  console.log("El resultado de la suma es:", suma);

  return suma;
}
sumandoNumeros(31, 23);

//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola.
function verifParImpar(numero) {
  if (numero % 2 === 0) {
    let mensaje = "El número " + numero + " es par";
    document.write(mensaje + "<br>");
    console.log(mensaje);
  } else {
    let mensaje = "El número " + numero + " es impar";
    document.write(mensaje + "<br>");
    console.log(mensaje);
  }
}
verifParImpar(53);

//OBJETOS

//Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
let camaro = {
  modelo: "Camaro",
  año: "1967",
  marca: "Chevrolet",
  caracteristicas: [
    {
      potencia: "350 CV",
      combustible: "Gasolina",
      color: "Gris",
      puertas: 4,
    },
  ],
};

console.log(camaro.modelo);
console.log(camaro.año);
console.log(camaro.marca);
console.log("Potencia:", camaro.caracteristicas[0].potencia);
console.log("Combustible:", camaro.caracteristicas[0].combustible);
console.log("Color:", camaro.caracteristicas[0].color);
console.log("Color:", camaro.caracteristicas[0].puertas);

//Crear una función que devuelva la marca del carro.
function saberMarcaCarro(carro) {
  return carro.marca;
}

let marca = saberMarcaCarro(camaro);
console.log("La Marca del carro es:", marca);
//Crear una función que devuelva la cantidad de puertas que tiene el carro.
function saberNumeroPuertas(carro) {
  return carro.caracteristicas[0].puertas;
}

let numeroPuertas = saberNumeroPuertas(camaro);
console.log("El número de puertas es:", numeroPuertas);

//Crear una función que devuelva un atributo del objeto anidado.
function obtenerAtributoCarro(carro, atributo) {
  return carro.caracteristicas[0][atributo];
}
let potencia = obtenerAtributoCarro(camaro, "potencia");
console.log("La Potencia es:", potencia);

//ARRAYS

//Crear un array de 10 números
let array = [80, 45, 93, 31, 11, 7, 12, 67, 65, 99];
console.log(array);

//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
function mostrarArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
mostrarArray(array);

//Crear una función que añada un número al array
function agregarNumeroAlArray(array, numero) {
  array.push(numero);
}
let numeroNuevo = 42;
agregarNumeroAlArray(array, numeroNuevo);
console.log(array);

//Crear una función que elimine los números pares de ese array.
function eliminarNumerosPares(array) {
  let nuevaArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      nuevaArray.push(array[i]);
    }
  }

  return nuevaArray;
}
array = eliminarNumerosPares(array);

console.log(array);

//Crear una función que devuelva el número mayor de un array.
function mostrarNumeroMayor(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}
let numeroMayor = mostrarNumeroMayor(array);

console.log(numeroMayor);

//Crear una función que devuelva el número menor de un array.
function mostrarNumeroMenor(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}
let numeroMenor = mostrarNumeroMenor(array);

console.log(numeroMenor);

//Crear un función que convierta en minúsculas todas las letras de un texto.
let textOriginal = "PARA El BUEN VIVIR, CALLAR despues DE ver Y oir";
function convertMinusculas(texto) {
  return texto.toLowerCase();
}
let textConvertidoMinusculas = convertMinusculas(textOriginal);

console.log(textConvertidoMinusculas);

//Crear una función que convierta en mayúsculas todas las letras de un texto.
function convertMayusculas(texto) {
  return texto.toUpperCase();
}
let textConvertidoMayusculas = convertMayusculas(textOriginal);
console.log(textConvertidoMayusculas);

//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
let nombresArray = ["carlos", "kevin", "santiago", "alejandro", "jumelis"];

function arreglarNombres(nombresArray) {
  let nombresMayusculas = [];

  for (let i = 0; i < nombresArray.length; i++) {
    let nombre = nombresArray[i];
    let primeraLetraMayuscula =
      nombre.charAt(0).toUpperCase() + nombre.slice(1);
    nombresMayusculas.push(primeraLetraMayuscula);
  }

  return nombresMayusculas;
}
let nombresArreglados = arreglarNombres(nombresArray);

console.log(nombresArreglados);

//MANIPULACIÓN DEL DOM

//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
function mostrarMensaje() {
  alert("¡Hola Teachers!");
}

//Crear un array de 10 nombres.
let nombres = [
  "Juan",
  "María",
  "Carlos",
  "Laura",
  "Pedro",
  "Ana",
  "Luis",
  "Sofía",
  "Miguel",
  "Elena",
];

//Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
function imprimirNombres() {
  let nombres = [
    "Juan",
    "María",
    "Carlos",
    "Laura",
    "Pedro",
    "Ana",
    "Luis",
    "Sofía",
    "Miguel",
    "Elena",
  ];
  let lista = document.createElement("ul");

  for (let i = 0; i < nombres.length; i++) {
    let item = document.createElement("li");
    item.textContent = nombres[i];
    lista.appendChild(item);
  }
  document.body.appendChild(lista);
}

imprimirNombres();

//Crear un array de números.
let numerosArrayDom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Crear una función que pinte en pantalla cuántos números tiene el array de números.
function mostrarCantidadNumeros() {
  let cantidadNumeros = numerosArrayDom.length;
  let mensaje = `El array contiene ${cantidadNumeros} números.`;
  let parrafo = document.createElement("p");
  parrafo.textContent = mensaje;
  document.body.appendChild(parrafo);
}

mostrarCantidadNumeros();

//Crea los nodos necesarios para imprimir un formulario.
function imprimirFormulario() {
  // Crear el formulario
  let formulario = document.createElement("form");

  // Crear el campo de texto para el nombre
  function imprimirFormulario() {
    // Crear el formulario
    let formulario = document.createElement("form");

    // Crear el campo de texto para el nombre
    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre:";
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.name = "nombre";

    // Crear el campo de texto para el email
    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Email:";
    let inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.name = "email";

    // Crear el botón de enviar
    let botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.textContent = "Enviar";

    // Agregar los elementos al formulario
    formulario.appendChild(labelNombre);
    formulario.appendChild(inputNombre);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(labelEmail);
    formulario.appendChild(inputEmail);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(botonEnviar);

    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(formulario);
  }

  // Llamada a la función para imprimir el formulario
  imprimirFormulario();
  labelNombre = document.createElement("label");
  labelNombre.textContent = "Nombre:";
  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.name = "nombre";

  // Crear el campo de texto para el email
  let labelEmail = document.createElement("label");
  labelEmail.textContent = "Email:";
  let inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.name = "email";

  // Crear el botón de enviar
  let botonEnviar = document.createElement("button");
  botonEnviar.type = "submit";
  botonEnviar.textContent = "Enviar";

  // Agregar el formulario al cuerpo del documento
  document.body.appendChild(formulario);
}

// Llamada a la función para imprimir el formulario
imprimirFormulario();
