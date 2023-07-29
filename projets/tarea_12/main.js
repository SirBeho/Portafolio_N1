const grupoA = [];
const grupoB = [];

document.getElementById("add").addEventListener("click", (event) => {
    const sexoAlumno = document.getElementById("sexo-alumno"); //m/f
    const nombreAlumno = document.getElementById("nombre-alumno");

    if (nombreAlumno.value == "" || sexoAlumno.value == "") {
        alert("Los datos no pueden estar vacios");
        return;
    }
    const alumno = {
        nombre: nombreAlumno.value,
        sexo: sexoAlumno.value,
    };

    if (
        (sexoAlumno.value == "f" && nombreAlumno.value[0].toLowerCase() < "m") ||
        (sexoAlumno.value == "m" && nombreAlumno.value[0].toLowerCase() > "n")
    )
         grupoA.push(alumno);
    else grupoB.push(alumno);

    console.log(nombreAlumno.value[0].toLowerCase() > "n");
    console.log(nombreAlumno.value[0].toLowerCase());
    
    nombreAlumno.value = "";
    nombreAlumno.focus();
    sexoAlumno.value = "";
});

document.getElementById("mostrar").addEventListener("click", (event) => {
    const lista_a = document.getElementById("alumnos-a");
    const lista_b = document.getElementById("alumnos-b");

    for (const linea of grupoA) {
        lista_a.innerHTML += `<li><div class="linea"><p class="nombre">${linea.nombre}</p><p>${linea.sexo}</p></div></li>`
    }
    
    for (const linea of grupoB) {
        lista_b.innerHTML += `<li><div class="linea"><p class="nombre">${linea.nombre}</p><p>${linea.sexo}</p></div></li>`
    }
    grupoA.length = 0;
    grupoB.length = 0;
} )
