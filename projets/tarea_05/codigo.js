function iniciar() {

do{
let msj = "------------Menu------------ \n"+
"1- El helado sin topping cuesta 1.90€\n"+
"2- El topping de oreo cuesta 1€.\n"+
"3- El topping de KitKat cuesta 1.50€. \n" +
"4- El topping de brownie cuesta 0.75€. \n" +
"5- El topping de lacasitos cuesta 0.95€.";

alert(msj);
let precio=parseFloat(1.90);
let respuesta = parseInt(prompt("Elija el # del Topping preferido"));
switch (respuesta) {
    case 1:
        msj = "Helado Sencillo";
      break;
    case 2:
        msj = "Helado con topping de oreo";
        precio +=1;
      break;
    case 3:
        msj = "Helado con topping de KitKat";
        precio +=1.50;
      break;
    case 4:
        msj = "Helado con topping de brownie";
        precio +=0.75;
      break;
    case 5:
        msj = "Helado con topping de lacasitos";
        precio +=0.95;
      break;
    default:
        msj = "Helado sencillo, (no tenemos el topping seleccionado, lo sentimos)";
      break;
  }

 alert("       ⇓Le entregamos⇓\n "+msj+"\nPrecio: "+precio.toFixed(2)+"€")
}while(prompt("Desea pedir otro\n   si/no") == "si");
}
