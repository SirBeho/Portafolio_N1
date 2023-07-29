
let estudiantes = [{
  id: 4,
  nombre: "benjamin",
  nota1: 20,
  nota2: 25,
  nota3: 18
}];

const formulario = document.getElementById("formulario");
const tabla =  document.querySelector("#table>tbody");

tabla.innerHTML += createRow(estudiantes[0]);

formulario.addEventListener("submit",(event)=>{
  event.preventDefault();
  add_estudiante(formulario);
  actualizaTabla();
  formulario.reset();
});

function actualizaTabla(){
  tabla.innerHTML = "";
  for (const datos of estudiantes) {
    tabla.innerHTML += createRow(datos);
  }
}

function createRow(estudiante) {
    let fila = "<tr>";
    for (let property in estudiante) {
      
      let td = `<td>${estudiante[property]}</td>\n`;
      fila += td;
    }
    fila += `<td>${((estudiante.nota1+estudiante.nota2+estudiante.nota3)/3).toFixed(2) }</td>`
    fila += `<td> <div style="display: inline-block;"> <button type="button" onClick="eliminar(${estudiante.id})" class="btn btn-outline-danger">Eliminar</button>
    <button type="button" class="btn btn-outline-warning">Editar</button></div> </td>`
    fila += "</tr>";
    
    
    return fila;
  }

  function add_estudiante(form) {
    
      const estudiante = {
        
        id: parseInt(estudiantes[estudiantes.length-1].id)+1,
        nombre: form.nombre.value,
        nota1: parseInt(form.nota1.value),
        nota2: parseInt(form.nota2.value),
        nota3: parseInt(form.nota3.value)
      };
      estudiantes.push(estudiante) ;
  }

  function eliminar(id){
    estudiantes = estudiantes.filter((obj) => obj.id != id);
    actualizaTabla();
  }




  function saveTask() {
      
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
  