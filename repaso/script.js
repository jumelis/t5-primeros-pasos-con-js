//operadores
//AND (&&)
let tengoDinero = true
let haceSol = true

function puedoIrALaPlaya(a,b) {
    if (a && b) {
        return ("Vamos a la Playa")
    }
else {
    return ("Esperemos para ir a la playa")
}
}

console.log(puedoIrALaPlaya(tengoDinero,haceSol))

// || OR
function puedoConectarmeAlZoom (a,b){
    if (a || b) {
        return ("Puedo Conectarme Al Zoom")
    }
else {
    return ("No puedo conectarme al Zoom")
}
}
let tengoWifi = true
let tengoDatos = false

console.log(puedoConectarmeAlZoom(tengoWifi, tengoDatos))

//! NOT

//ARRAY
let array = [80, 45, 93, 31, 11, 7, 12, 67, 65, 99];
for(array = 1; array <= 10; array++){
    console.log(array)
}
//pasar a mayusculas y minusculas
let textoSinCorregir = "incluso cuaNdo te toMas unas vacaciones de la tecnología, la teCnología No se toma un Descanso de ti."

function pasarAMinusculas(texto){
    return (texto.toLowerCase())
}

let textoCorregido = pasarAMinusculas(textoSinCorregir);
console.log(textoCorregido)

function pasarAMayusculas (textoUno){
    return (textoUno.toUpperCase())
}
let textoEnMayusculas = pasarAMayusculas(textoCorregido)
console.log(textoEnMayusculas)

//funcion que reciba nombres y convierta la primera letra a mayusculas

let arrayDeNombres = ["angela", "jumelis", "diego"];
/*function arreglarNombres(array){
    let resultadoNombres= array.map(function(nombre) {
      return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    });
    return resultadoNombres;
}
let nombresCorregidos = arreglarNombres(arrayDeNombres);
console.log(nombresCorregidos)*/

