
function iniciar(){
    do{
        let ingrediente = null;
        let pizza = prompt(`Hola,Que tipo de pizza desea ordenar 
        ---Menu numerico---
        1- pizza vegetariana
        2- pizza no vegetariana`);
        
        if (pizza == "1") {
            do{
                ingrediente= prompt(`Para su pizza Vegetariana, que ingrediente desea incluirle:
                ---Menu numerico---
                1- Pimiento
                2- Tofu`);
                console.log(ingrediente);
                switch (ingrediente) {
                    case '1':
                            alert(`Gracias por su compra.
                            Entregando --->
                            Pizza Vegetariana con Pimiento , mozzarella y tomate`);
                        break;
                    case '2':
                        alert(`Gracias por su compra.
                            Entregando --->
                            Pizza Vegetariana con Tofu , mozzarella y tomate`);
                        break;
                    default:
                        alert("Lo sentimos, no tenemos el ingrediente seleccionado, seleccione otro");
                }
            }while(ingrediente != "1" && ingrediente != "2");

        } else if (pizza == '2') {
            do{
                ingrediente = prompt(`Que ingrediente desea incluirle:
                ---Menu numerico---
                1- Peperoni
                2- Jamon
                3- Salmon`);
                console.log(ingrediente);
                switch (ingrediente) {
                    case '1':
                            alert(`Gracias por su compra.
                            Entregando --->
                            Pizza con Peperoni , mozzarella y tomate`);
                        break;
                    case '2':
                        alert(`Gracias por su compra.
                            Entregando --->
                            Pizza con Jamon , mozzarella y tomate`);
                        break;
                    case '3':
                        alert(`Gracias por su compra.
                            Entregando --->
                            Pizza con Salmon , mozzarella y tomate`);
                        break;    
                    default:
                        alert("Lo sentimos, no tenemos el ingrediente seleccionado, seleccione otro");
                }
            }while((ingrediente != "1" && ingrediente != "2"));
        }else{
            alert(`Disculpa , no tenemos el tipo de pizza elejido`);
        }
    }while(prompt("Desea elejir otra pizza \n si\\no").toLocaleLowerCase()=="si");
}
