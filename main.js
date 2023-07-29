const divPrueba = document.querySelector(".projects-grid");

  function mostrar(n,tipo) {
    let url
    switch (n) {
      case 1:
        url = window.location.origin;
        console.log(url)
        break;
      case 2:
        url = window.location.origin+"/projets";
        console.log(url)
        break;
      case 3:
        url = window.location.pathname;
        console.log(url)
        break;
      case 4:
        url = window.location.pathname+"/projets";
        console.log(url)
        break;
      case 5:
        url = window.location.origin+window.location.pathname;
        console.log(url)
        break;
      case 6:
        url = window.location.origin+window.location.pathname+"projets";
      console.log(url)
        break;
      case 7:
        url = "";
      console.log(url)
        break;
      case 8:
        url = "/projets";
      console.log(url)
        break;
    }

    console.log(window.location.origin)
    console.log(window.location.pathname)
    mostrado(url,tipo)
} 


function mostrado(url,tipo){
 
    
   var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  console.log(xhr)
  xhr.onload = function() {
    if (xhr.status === 200) {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
      var enlaces = htmlDoc.querySelectorAll('a');
      divPrueba.innerHTML = "";
      enlaces.forEach((enlace) => {
          let href = enlace.getAttribute('href').toLowerCase();
            console.log(href)

        if (href.length > 16 && href.includes(tipo)) {
          
           if(tipo == ''  && (href.includes('tarea') || href.includes('ejercicio')))
              return;
              
          let card = document.createElement('div');
          // card.href = href;
          card.classList.add('project')

          let imagenProyecto = new Image();
          imagenProyecto.src = href + "/inicio.png"; 
          
          imagenProyecto.classList.add('project-image')
          card.appendChild(imagenProyecto);
          

          let text = document.createElement('a');
          text.href = href;
          text.target = "_blank";
          text.classList.add("project-title")
          text.textContent = '<'+href.substring(16)+ '>';
          card.appendChild(text);

          divPrueba.appendChild(card);
        }
      });
    }
    modales();
  };

  xhr.send();
}