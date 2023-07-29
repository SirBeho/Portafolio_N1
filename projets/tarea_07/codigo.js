function iniciar(){
    do{
    
let base = parseInt( prompt("--Base elevado a un exponente--\n\n Dijite el numero base de la operacion"));
let exponente = parseInt( prompt("Elija el numero del exponenete"));
let resultado =1;

if(exponente > 0){
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
        console.log(resultado);
    }
}else if(exponente < 0 ){
    for (let i = 0; i < (exponente*(-1)); i++) {
        resultado *= base;
        console.log(resultado);
    }
    resultado = 1/resultado;
}
alert("el resultado de su operacion es: "+ resultado);
}while(prompt("Desea calcular otro numero si/no") == "si");
}