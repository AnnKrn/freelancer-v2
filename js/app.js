//elemento moda (ventana completa)
var modal = document.getElementById('modal_window');

//tener elemento imagen-click
var modalImage = document.getElementById('cabin_photo');

//elemento boton para cerrar
var closeBtn = document.getElementsByClassName('close-modal')[0];

//escuchar el evento para abrir
modalImage.addEventListener('click', openModal);

//escuchar el evento para cerrar
closeBtn.addEventListener('click', closeModal)

//escuchar el evento para abrir
window.addEventListener('click', closeModalOutside)

//function para abrir modalImage
function openModal() {
  modal.style.display = 'block';
}

//function para cerrar modalImage
function closeModal() {
  modal.style.display = 'none';
}

//function para cerrar clck fuera
function closeModalOutside(e) {
  if (e.target==modal) {
    modal.style.display = 'none';
  }  
}
