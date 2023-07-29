let edad = parseInt(prompt("Que edad tiene?"));
let mensaje = "cumpliste -->\n"
for (let index = edad; index >= 1; index--) {
    console.log(index);
    mensaje += index+" año en el "+(new Date().getFullYear() - edad + index) + "\n";
}
alert(mensaje)

