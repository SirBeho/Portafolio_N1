
const lista = document.getElementById("lista");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) =>{
        let dato = document.getElementById("dato");

        if(dato.value != "") lista.innerHTML += `<li>${dato.value}</li>`;
        
        dato.value = "";
        dato.focus(); 
} )


function nombres(){
        let nombre= [];
        let cantidad = parseFloat(prompt("Cuantos nombres va dijitar"))

        for (let index = 0; index < cantidad; index++) {
        nombre.push(prompt(`${index+1}) Dijite un nombre`));
        }

        console.log("Los nombres son:")
        nombre.forEach((element,index) => {
                console.log(`${index+1}- ${element}`);
        });
}
