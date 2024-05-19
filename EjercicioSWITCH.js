/* Ejercicio pedido condicional switch*/

var menu = prompt ("Ingresa menu")

switch (menu.toLowerCase()) {
    case "carne":
     console.log("ofrecer vino tinto");
     break;
    case "pescado":
     console.log("ofrecer vino blanco");
     break;
    case "verdura":
        console.log("ofrecer agua");
        break;
    default:
        console.log("Elija carne, pescado o verdura")

}
 console.log("Fin del switch")