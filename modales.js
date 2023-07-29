const nav = document.querySelector('.nav');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const boton = contenedorLight.querySelector('button');
const iframe = contenedorLight.querySelector('iframe');

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight  && e.target !== boton){
        contenedorLight.classList.toggle('show');
        imagenLight.classList.remove('showImage');
        iframe.classList.remove('showImage');
        nav.classList.toggle('hide');
        boton.textContent = 'Mostrar Frame';
    }
});

 boton.addEventListener('click',(e)=>{
    iframe.src = imagenLight.src.substring(0, imagenLight.src.lastIndexOf("/"));
    imagenLight.classList.toggle('showImage');
    iframe.classList.toggle('showImage');
    boton.textContent = boton.textContent == 'Mostrar Foto' ? 'Mostrar Frame' : 'Mostrar Foto';

 });
 
const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenLight.classList.toggle('showImage');
    nav.classList.toggle('hide');
};

function modales(){
    const cards = document.querySelectorAll('.project'); 
    cards.forEach(card => {
        card.querySelector('img').addEventListener('click',(e)=>{
            aparecerImagen(e.target.src);
            console.log(e.target.src);
        })
    });
}