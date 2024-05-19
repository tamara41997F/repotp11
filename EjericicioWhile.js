var numero = 0; // Inicializamos la variable numero
var condicion = true

while (condicion == true) {

  console.log("El número: ", numero ," es más chico que 11");
  numero++;

  if(numero >= 11){
    condicion = false
  }
}