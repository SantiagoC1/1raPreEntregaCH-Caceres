    const estampado=17000,liso=11000,bordado=14000;
    let respuesta = parseInt(prompt("Quiere realizar una compra?\n 1 si\n 2 no"));
    
    // Funcion que calcula el total precio total del buzo
    function calculo (t,v,c){
        t= v + (v*0.24);
                    alert(`El total a pagar es de $${t} abonando en ${c} cuotas`);
                    parseInt(c);
                    t=Math.trunc(t/c);
                    alert(`Abonando un total de $${t} por cada cuota`); 
    }
    // funcion que pregunta la cantidad de cuotas en las que se quiere abonar
    function cuotas(t,v) {
        let c= prompt("en cuantas cuotas quiere realizar el pago?\n 2 cuotas +24%\n 3 cuotas +43%\n 6 cuotas +76%\n 12 cuotas +82%");
        switch (c) {
            case '2':
                    calculo(t,v,c);               
                break;
            case '3':
                    calculo(t,v,c);              
                break;
            case '6': 
                    calculo(t,v,c); 
                break;
            case '12':
                    calculo(t,v,c);              
                break;
            default:
                break;
        }
    }
    // Funcion que calcula el metodo de pago
    function metodoPago(valor) {
        let total;
        let forma= prompt("1 efectivo 10%OFF\n2 tranferecia\n 3 Mercado Pago 20% de recargo\n 4 cuotas (2-3-6-12)");
        switch (forma) {
            case '1':
                total= valor - (valor * 0.1);
                alert(`El valor total que tendra que abonar es de $${total}`);
                break;
            case '2':
                total = valor; 
                alert(`El valor total que tendra que abonar es de $${total}`);
                break;
            case '3':
                total= valor + (valor * 0.2);
                alert(`El valor total que tendra que abonar es de $${total}`);
                break;
            case '4':
                cuotas(total,valor);
                break;
        
              default:
                break;
        }
    };

    //funcion que realiza la venta del producto
    function venta(){
    
        let tipo = prompt("KEFLA es una empresa que se dedica a la fabricacion de buzos\n Que tipo de buzo le gustaria comprar?\n -Estampado\n -Liso\n -bordado");
            switch (tipo.toLowerCase()) {
            case 'estampado':
                talle = prompt(`Usted eligio un buzo ${tipo} , que talle desea elegir?\n 1 talle 1 ancho:62cm largo:70cm\n 2 talle 2 ancho:68cm largo:74cm\n 3 talle 3 ancho:71cm largo:77cm\n 4 talle 4 ancho:78cm largo:81cm\n 5 talle 5 ancho:85cm largo:84cm `);
                 alert(`El valor de su buzo es de $${estampado} como desea abonarlo?`);
                 metodoPago(estampado);
                 tipo=flase;
                break;
            case 'liso':
                talle = prompt(`Usted eligio un buzo ${tipo} , que talle desea elegir?\n 1 talle 1 ancho:62cm largo:70cm\n 2 talle 2 ancho:68cm largo:74cm\n 3 talle 3 ancho:71cm largo:77cm\n 4 talle 4 ancho:78cm largo:81cm\n 5 talle 5 ancho:85cm largo:84cm `);
                alert(`El valor de su buzo es de $${liso} como desea abonarlo?`);
                metodoPago(liso);
                tipo=flase;
                break;
            case 'bordado':
                talle = prompt(`Usted eligio un buzo ${tipo} , que talle desea elegir?\n 1 talle 1 ancho:62cm largo:70cm\n 2 talle 2 ancho:68cm largo:74cm\n 3 talle 3 ancho:71cm largo:77cm\n 4 talle 4 ancho:78cm largo:81cm\n 5 talle 5 ancho:85cm largo:84cm `);
                alert(`El valor de su buzo es de $${bordado} como desea abonarlo?`);
                metodoPago(bordado);
                tipo=flase;
                break;
            default: alert("El tipo de buzo fue mal ingresado, por favor ingreselo de nuevo");
                     tipo = prompt("KEFLA es una empresa que se dedica a la fabricacion de buzos\n Que tipo de buzo le gustaria comprar?\n 1 Estampado\n 2 Liso\n 3 bordado");

            }
    }

    if (respuesta === 1){
        venta();
    }else {
        alert("Gracias por visitarnos");
    }
    
