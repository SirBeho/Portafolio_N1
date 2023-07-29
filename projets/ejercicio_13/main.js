const trabajadores = [
  {
    id: 1,
    nombre: "Pepito",
    salario: 1000,
    monedaSalario: "USD",
    fechaInicio: "01-01-2020",
    cargo: "Supervisor",
    area: "Logistica",
    turno: "tarde",
  },
  {
    id: 2,
    nombre: "Manolo",
    salario: 1200,
    monedaSalario: "PEN",
    fechaInicio: "01-01-2022",
    cargo: "Operador",
    area: "Logistica",
    turno: "tarde",
  },
  {
    id: 3,
    nombre: "Harold",
    salario: 1200,
    monedaSalario: "USD",
    fechaInicio: "01-01-2023",
    cargo: "GERENTE",
    area: "Comercial",
    turno: "mañana",
  },
];

const tBody = document.querySelector("#t-body");

// Crear una fila por cada trabajador, e insertarla al tBody
showData();

function showData() {
  tBody.innerHTML = "";
  for (let trabajador of trabajadores) {
    let row = createRow(trabajador);
    tBody.innerHTML += row;
  };
}

function createRow(worker) {
  let fila = "<tr>";

  for (let property in worker) {
    // console.log(trabajador[property]);

    let td = `<td>${worker[property]}</td>`;

    fila += td;
  }

  fila += "</tr>";

  return fila;
}

/* IMPLEMENTACION: Por medio de un formulario, añadir elementos
en la tabla */

const form = document.querySelector("#form");

form.addEventListener("submit", addWorker);

function addWorker(event) {
  event.preventDefault();

  // Creo mi trabajador con los datos del formulario
  const trabajador = createWorker(form);

  trabajadores.push(trabajador);
  console.log(trabajadores);

  // Mostrar nuevo trabajador en la tabla
  showData();

  form.reset();
}




function createWorker(form) {
  const trabajador = {
    id: trabajadores.length + 1,
    nombre: form.nombre.value,
    salario: parseInt(form.salario.value),
    monedaSalario: form.moneda.value,
    fechaInicio: form.inicio.value,
    cargo: form.cargo.value,
    area: form.area.value,
    turno: form.turno.value,
  };

  return trabajador
}