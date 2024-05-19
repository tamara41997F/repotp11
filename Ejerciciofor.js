var array = [6,20,3,47,8];

for (let posicion = 0 ; posicion < array.length ; posicion++) {
    console.log(array[posicion]);

}

//for para un elemento que inserto

array.push(15);

// Recorrer nuevamente el array e imprimir sus elementos
console.log("Array después de añadir un nuevo elemento:");

for (let posicion = 0; posicion < array.length; posicion++) {
    console.log(array[posicion]);
}