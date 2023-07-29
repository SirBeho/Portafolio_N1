
document.querySelector("form").addEventListener("submit", (event) => {
    
    let respuestas = respuesta(document.querySelector("form"))
     /*
    respuestas[
        0 -- Tamaño del préstamo
        1 -- Historial de crédito
        2 -- Ingreso
        3 -- Pago inicial 
    ]
    */
    const prestamo_tam = respuestas[0]; 
    const historial_cred = respuestas[1]; 
    const ingreso = respuestas[2]; 
    const pago_ini = respuestas[3]; 

    let aprovado = false; 

    if (prestamo_tam >= 5) 
        if ((historial_cred >= 7 && ingreso >= 7) || (pago_ini >= 5 && (historial_cred >= 7 || ingreso >= 7)) ) aprovado = true;
    else 
        if ((historial_cred > 5) && ((ingreso >= 7 || pago_ini >= 7) || (ingreso >= 4 && pago_ini >= 4)))  aprovado = true;

        
    if (aprovado) {
        document.getElementById("resultado").innerText = "Felicidades, Su prestamo esta autorizado";
        document.getElementById("resultado").style.color = 'rgb(81, 199, 68)';
    }else {
        document.getElementById("resultado").innerText = "Lo sentimos, no califica para un prestamo";
        document.getElementById("resultado").style.color = 'red';
    }
    event.preventDefault();
  },
  false
);

function respuesta(form){
    const data = new FormData(form);
    let output = [];
    let i =0;
    for (const entry of data) {
        output[i] = entry[1];
        console.log(entry[1]);
        i++;
    }
    return output;
}











/*
    if (prestamo_tam >= 5) {
        if (historial_cred >= 7 && ingreso >= 7) {
            aprovado = true;
        } else if (pago_ini >= 5 && (historial_cred >= 7 || ingreso >= 7)) {
            aprovado = true;
        }
    } else {
        if (historial_cred > 5) {
            if (ingreso >= 7 || pago_ini >= 7) {
                aprovado = true;
            } else if (ingreso >= 4 && pago_ini >= 4) {
                aprovado = true;
            }
        }
    }*/