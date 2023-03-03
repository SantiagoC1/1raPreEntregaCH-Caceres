const clave = "kefla2023";
let cantCli = 0, totalVendido = 0, i = 0,totalVenta=0;
    const pagos = [
        {metodo:"efectivo",funcion:-0.1},
        {metodo:"transferencia",funcion:0},
        {metodo:"mercado pago",funcion:0.2},
        {metodo:"2 cuotas",funcion:0.24},
        {metodo:"3 cuotas",funcion:0.43},
        {metodo:"6 cuotas",funcion:0.76},
        {metodo:"12 cuotas",funcion:0.82},
    ];
    const buzo = [
        {tipo:"estampado",nombre:"bys", precio:14200,stock:50},
        {tipo:"estampado",nombre:"moodg", precio:15499,stock:50},
        {tipo:"estampado",nombre:"princess", precio:13499,stock:50},
        {tipo:"estampado",nombre:"bluewave", precio:15499,stock:50},
        {tipo:"estampado",nombre:"clow", precio:14499,stock:50},
        {tipo:"estampado",nombre:"happycake", precio:15000,stock:50},
        {tipo:"estampado",nombre:"bekind", precio:17000,stock:50},
        {tipo:"estampado",nombre:"tyv", precio:15000,stock:50},
    
        {tipo:"liso",nombre:"verde",precio:11000,stock:50},
        {tipo:"liso",nombre:"rojo",precio:11000,stock:50},
        {tipo:"liso",nombre:"marino",precio:11000,stock:50},
        {tipo:"liso",nombre:"azul",precio:11000,stock:50},
        {tipo:"liso",nombre:"celeste",precio:11000,stock:50},
        {tipo:"liso",nombre:"violeta",precio:11000,stock:50},
        {tipo:"liso",nombre:"cremita",precio:11000,stock:50},
        {tipo:"liso",nombre:"lila",precio:11000,stock:50},
    
        {tipo:"bordado",nombre:"rosa", precio:14500,stock:50},
        {tipo:"bordado",nombre:"trueno", precio:14500,stock:50},
        {tipo:"bordado",nombre:"pez", precio:14500,stock:50},
        {tipo:"bordado",nombre:"nube", precio:14500,stock:50},
        {tipo:"bordado",nombre:"mariposa", precio:14500,stock:50},
        {tipo:"bordado",nombre:"corona", precio:14500,stock:50},];
    const carrito = [];

//Programa pricipal    
let nombre = prompt("Ingrese su nombre");

while (nombre !== "zzz") {
    if (nombre === "admin") {
        let contrasenia = prompt("Ingrese su contraseña");
        if (contrasenia === clave) {
            alert("Usted accedio a la parte de administrador (todavia en desarrollo)");
            //hacer acciones que se puedan modificar los objetos, stock precios,productos
        }
    }else {
        alert(`Bienvenido ${nombre} a KEFLA.\n  Somos una empresa que se dedica a la fabricacion de buzos`);
        let compra = prompt("Quiere realizar una compra?\n-Si \n-No");
        while (compra.toLowerCase() === "si"){
            let tipo = prompt("que tipo de buzo le gustaria comprar\n-Estampado\n-Liso\n-Bordado");
            mostrar(tipo.toLowerCase());
            let modelo = prompt("Habiendo visto nuestros modelos, Cual le gustaria comprar?");
            let item = buzo.find(item => item.nombre === modelo.toLowerCase());
            carrito.push(item);
            i=buzo.indexOf(item);
            buzo[i].stock=buzo[i].stock -1;
            totalVenta+=buzo[i].precio;
            let msj="";
            for (const prod of carrito){
                let header =`${nombre} este es tu CARRITO:\n`;
                msj += ` Nombre:${prod.nombre}\n Precio:$${prod.precio}\n`;
                alert(header+msj);
            }
            compra = prompt("Quiere realizar otra compra?\n-Si \n-No");
        }
        alert(`El total a pagar es de $${totalVenta}`);
        alert(`Nuestros metodos de pago son:\n-Efectivo 10%OFF\n-Tranferecia\n-Mercado Pago +20%\n-2 Cuotas\n-3 Cuotas\n-6 Cuotas\n-12 Cuotas`);
        let metodo = prompt("Con que metodo de pago le gustaria pagar?");
        metodos(metodo.toLowerCase(),totalVenta);
        alert(`Gracias por visitarnos ${nombre}`);
    }
    nombre = prompt("Ingrese su nombre");
}
//Funcion que muestra los productos del tipo seleccionado
function mostrar (tipo){
    let encontre = buzo.filter(item => item.tipo === tipo);
    encontre.forEach(item =>{
        let mensaje = `BUZOS ${tipo}s:\n
        Nombre: ${item.nombre}
        Precio: $${item.precio}
        Stock: ${item.stock}
        `;
        alert(mensaje);
    });
}
function metodos (metodo,valor){
    let encontre = pagos.find(item => item.metodo === metodo);
    recargo=encontre.funcion;
    valor=valor + (valor*recargo);
    alert(`El total a pagar con el metodo de pago ${metodo} es de $${valor}`);
}