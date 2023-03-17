//PROGRAMA
let carrito=[];
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');
//sube el producto seleccionado al localStorage. En otras palabras carga el carrito en el LS
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    };
});
//Boton de vaciar carrito
botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    localStorage.clear();
    actualizarCarrito();
    precioTotal.innerText=0;
    reset(buzo);
});
//actualiza el DOM con los productos
buzo.forEach((prod) => 
{
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <img src="${prod.img}" alt "">
    <h3>${prod.nombre}</h3>
    <p>${prod.descripcion}</p>
    <b class="PrecioProducto">Precio:$${prod.precio}</b>
    <br>
    <button id="agregar${prod.id}" class="boton-agregar">Agregar</button> 
    `;
    contenedorProductos.appendChild(div);
//Se setea el boton para agregar el producto al carrito
    const boton = document.getElementById(`agregar${prod.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(prod.id);
    });
});
//FUNCION AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => 
{
    const existe = carrito.some (prod => prod.id === prodId);
    if (existe){
        const item = buzo.find((prod) => prod.id === prodId);
        item.cantidad++;
        item.stock-= 1;
        actualizarCarrito();
    }else{
        const item = buzo.find((prod) => prod.id === prodId);
        item.cantidad++;
        carrito.push(item);
        item.stock=item.stock - item.cantidad;
        actualizarCarrito();
    }
};
//FUNCION ELIMINAR PRODUCTO DEL CARRITO\
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) ;
    item.cantidad=0;
    indice===0&&localStorage.clear();//Hice esto pq tenia el problema de que el ultimo elemento del carrito no se borraba
    precioTotal.innerText=0;
    actualizarCarrito();
};
//FUNCION ACTUALIZAR CARRITO
const actualizarCarrito = () => {let precio = 0;
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <b>${prod.cantidad}</b>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;
        precio =(precio + (prod.cantidad * prod.precio))
        contenedorCarrito.appendChild(div);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
    precioTotal.innerText=precio;
    contadorCarrito.innerText = carrito.length;
};
//Resetea la cantidad de productos dentro del carrito
const reset =(item)=>{
    item.forEach(prod => prod.cantidad =0);
};