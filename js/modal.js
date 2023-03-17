const contenedorModal = document.getElementsByClassName('modal-contenedor')[0];
const botonAbrir = document.getElementById('boton-carrito');
const botonCerrar = document.getElementById('carritoCerrar');
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];
//evento de abrir carrito
botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active');
});
//evento de cerrar carrito
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active');
});
//permite activar y desactivar un modal en una página web cuando el usuario hace clik en el contenedor del modal
contenedorModal.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active');
});
//asegurar que el evento suceda solo en modal carrito y no se propague
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation();
});