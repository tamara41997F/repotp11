/* Ejercicio Heladeria condicional if*/


var topping;
var precio;
var precioFinal;
var helado = 50;

//Asigno valor a topping para probar si funciona el codigo)
topping = "Oreo";

//Precio según el topping

if (topping === "Oreo") {
    precio = 10;
} else if (topping === "KitKat") {
    precio = 15;
} else if (topping === "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
    precio = 0; // Asignar un valor de 0 ya que no se agregó ningún topping válido
}


// Calcular el precio final
precioFinal = helado + precio;

console.log("El helado cuesta $" + precioFinal);
