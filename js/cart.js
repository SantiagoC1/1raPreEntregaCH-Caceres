//Se crea el carritocarrito
let carrito=[];
//Traigo los elementos del html
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const botonComprar = document.getElementById('comprar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');
//carga el carrito en el LS
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    };
});
//Boton comprar carrito
stock.then((buzos) => {
    botonComprar.addEventListener('click', () => {
        if(carrito.length !== 0) {
            buzos.forEach(buzo=>{
            carrito.forEach(cart=>{
                if(cart.id == buzo.id){
                    buzo.vendidos=buzo.vendidos+cart.cantidad; 
                }
                });
    });
        carrito=[];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
//Alerta     
        let timerInterval
        Swal.fire({
            title: 'Acreditando el pago',
            text:'por favor espere...',
            timer: 3000,
            color:'#D9D9D9',
            background:'#110F0D',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {}, 200)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Felicitaciones',
                color:'#D9D9D9',
                background:'#110F0D',
                text: 'Compra realizada',
                timer:1500,
                showConfirmButton: false,
                footer: 'Gracias por confiar en KEFLA'
                })
        })
    }});
});
//Boton de vaciar carrito
stock.then((buzos) => {
    botonVaciar.addEventListener('click', () => {
        if(carrito.length !== 0) {
            carrito=[]; 
            buzos.forEach(buzo=>{
                buzo.stock= buzo.stock +buzo.cantidad;
                buzo.cantidad=0;
            }); 
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
            Swal.fire({
                icon: 'success',
                title: 'Carrito vacio',
                color:'#D9D9D9',
                background:'#110F0D',
                text: 'Se ha vaciado el carrito con exito ',
                timer:950,
                showConfirmButton: false,
            })
}})});
//FUNCION ELIMINAR PRODUCTO DEL CARRITO\
const eliminarDelCarrito = (prodId) => {
    const p=0;
    const item = carrito.find((prod) => prod.id === prodId);
    item.cantidad-=1;
    if (item.cantidad === 0) {
        const indice = carrito.indexOf(item);
        carrito.splice(indice, 1);
    };
//alerta
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        })
        Toast.fire({
            icon: 'success',
            title: 'Producto eliminado',
            color:'#D9D9D9',
            background:'#745a5ae5',
            timer:1500,
            showConfirmButton: false,
        });
    actualizarCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
    carrito.forEach((prod)=>{
        p=prod.precio*prod.cantidad;
    });
    precioTotal.innerText=p;
};
//FUNCION ACTUALIZAR CARRITO
const actualizarCarrito = () => {
    let precio = 0,contCantidad=0;
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <b>${prod.cantidad}</b>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `;
        precio =(precio + (prod.cantidad * prod.precio))
        contenedorCarrito.appendChild(div);
        contCantidad+=prod.cantidad;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
    precioTotal.innerText=precio;
    contadorCarrito.innerText = contCantidad;
};