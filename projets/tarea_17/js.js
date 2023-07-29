const form = document.querySelector("form");
const fechaActual = new Date();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let year = fechaActual.getFullYear() - form.year.value;
  let month = fechaActual.getMonth() + 1 - form.month.value;
  let day = fechaActual.getDate() - form.day.value;

  if (isEmpty()) return;
  if (isinvalid()) return;

  if (month < 0 || (day < 0 && month == 0)) {
    //si el mes es negativo , o es enero y el dia negativo
    //se rebaja un año y se agregan los meses que sobraron
    year--;
    month += 12;
  }

  //si es dia es negativo
  if (day < 0) {
    //ultimo dia del mes anterior  menos los dias que quedaron en negativo
    const newDay = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth(),
      0
    ).getDate();
    day = newDay + day;
    month--;
  }
  asignarValores([year,month,day])
  console.log("Edad:", year, "años,", month, "month y", day, "días");
});

function isinvalid() {
  let error = false;
  const [labelDay, labelMonth, labelYear] = document.querySelectorAll("label");
  // velidar año
  if ( form.year.value > fechaActual.getFullYear()) {
    labelYear.classList.add("error");
    labelYear.querySelector("p").textContent = "Must be in the past";
    error = true;
  } else {
    labelYear.classList.remove("error");
  }

  //validar mes
  if (
    (form.year.value == fechaActual.getFullYear() &&
      form.month.value - 1 > fechaActual.getMonth()) ||
    form.month.value > 12
  ) {
    labelMonth.classList.add("error");
    labelMonth.querySelector("p").textContent = "Must be a valid month";
    error = true;
  } else {
    labelMonth.classList.remove("error");
  }

  const lastDay = new Date(form.year.value, form.month.value, 0).getDate();
  if (
    (form.year.value == fechaActual.getFullYear() &&
      form.month.value - 1 == fechaActual.getMonth() &&
      form.day.value > fechaActual.getDate()) ||
    form.day.value < 1 || form.day.value > 31 ||  form.day.value > lastDay
  ) {
    labelDay.classList.add("error");
    labelDay.querySelector("p").textContent = "Must be a valid day";
    error = true;
  } else {
    labelDay.classList.remove("error");
  }

  console.log("validacion valido completada, Error: " + error);
  return error;
}

function isEmpty() {
  let error = false;
  const labels = document.querySelectorAll("label");

  for (let label of labels) {
    if (label.querySelector("input").value == "") {
      label.querySelector("p").textContent = "This field is required";
      label.classList.add("error");
      error = true;
    } else {
      label.classList.remove("error");
    }
  }
  console.log("validacion empty completa, Error: " + error);
  return error;
}

function asignarValores(fecha){
  //Fecha = year,months , day
  console.log("asignando", fecha);

   const etiquetas = document.querySelectorAll(".num");
   let indice = 0;
  
   const siguiente = () => {
      
     const etiqueta = etiquetas[indice];
     let valor = 0;

     const interval = setInterval(() => {

        etiqueta.textContent = valor;
        console.log(
          "valor:" + valor,
          "fecha[indice]:" + fecha[indice],
          "index:" + indice
        );

       if (valor >= fecha[indice]) {
         clearInterval(interval);
         indice++;

         if (indice < etiquetas.length) {
           siguiente();
         }
         return;
       }
       valor++; 
     }, 100);
   };

   siguiente();
}