//Traigo los elementos del HTML
const contProductos=document.getElementById('contenedor-productos');
const select=document.getElementById('filtroTalle');
//Actualiza el DOM con los productos
stock.then((buzo) =>{
    buzo.forEach((p) =>{
        agregar(p);
    });
    select.addEventListener('change',()=>{
        const filtroSelect= select.value;
        contProductos.innerHTML='';
        if (filtroSelect == 'todos'){
            buzo.forEach((p) =>{
                agregar(p);
            });
        }else{
            buzo.forEach((p) =>{
                if (p.tipo == filtroSelect){
                    agregar(p);
                };
            });
        }
    });
});
// Agrega un producto al HTML
const agregar = (prod) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
        <img src="${prod.img}" alt="">
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <b class="PrecioProducto">Precio: $${prod.precio}</b>
        <br>
        <button id="agregar${prod.id}" class="boton-agregar">Agregar</button> 
        `;
        contProductos.appendChild(div);
    // Se setea el botón para agregar el producto al carrito            
    const boton = document.getElementById(`agregar${prod.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(prod.id);
    });
};
//FUNCION AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => 
{
    const existe = carrito.some (prod => prod.id === prodId);
    if (existe){
        stock.then((buzo) => {
        const item = buzo.find((prod) => prod.id === prodId);
        if (item.stock !== 0 && item.vendidos!== 50){
            item.cantidad++;
            item.stock-= 1;
            actualizarCarrito();
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No queda mas stock de este producto',
                text: 'Disculpe las molestias',
                color:'#D9D9D9',
                background:'#745a5ae5',
                timer:1500,
                showConfirmButton: false,
                })
            }
        });
    }else{
        stock.then((buzo) => {
        const item = buzo.find((prod) => prod.id === prodId);
        if (item.stock !== 0 && item.vendidos!== 50){
            item.cantidad=1;
            carrito=[...carrito,item];
            item.stock=item.stock - item.cantidad;
            actualizarCarrito();
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No queda mas stock de este producto',
                text: 'Disculpe las molestias',
                color:'#D9D9D9',
                background:'#745a5ae5',
                timer:1500,
                showConfirmButton: false,
                })
        }
    });}
};