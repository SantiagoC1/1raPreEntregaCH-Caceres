/* 1er paso 
    quieres hacer una compra en KEFLA?
    1 si 
    2 no
   2do paso 
    KEFLA es una empresa que se dedica a la fabricacion de buzos
    Que tipo de buzo le gustaria comprar?
    1 estampado
    2 bordado
    3 liso
    Usted eligio un buzo (tipo de buzo elegido), los modelos se mostraran visualmente mas adelante, por el momento le dejaremos los nombre para que elija es que mas le gusta

    1 Princess
    2 BYS
    3 Mood
    4 Bluewave
    5 Rose

    usted eligio (tipo de buzo elegido) que talle usas?
    1 talle 1 ancho: largo:
    2 talle 2 ancho: largo:
    3 talle 3 ancho: largo:
    4 talle 4 ancho: largo:
    5 talle 5 ancho: largo:
    
    El importe del buzo (tipo de buzo) es $(precio) como desea abonar?
    1 efectivo 10%OFF
    2 tranferecia 
    3 Mercado Pago 20% de recargo
    4 cuotas (1-2-3-6-12)

    Muchas gracias por su compra 
    quieres hacer una compra en KEFLA?
    1 si 
    2 no
    
     */

    let respuesta = parseInt(prompt("Quiere realizar una compra?\n 1 si\n 2 no"));
    let p = "p: Princess $13499 ";
    let b = "b: BYS $14200 ";
    let m = "m: Mood $15499 ";
    let w = "w: Bluewave $15499 ";
    let r = "r: Rose $13499 ";

    function metodoPago() {};


    function venta(){
    
        let tipo = prompt("KEFLA es una empresa que se dedica a la fabricacion de buzos\n Que tipo de buzo le gustaria comprar?\n 1 Estampado\n 2 Liso\n 3 bordado");
         
        switch (tipo) {
            case 'estampado':
                 let model = prompt(`Usted eligio un buzo ${tipo}, los modelos se mostraran visualmente mas adelante, por el momento le dejaremos los nombre para que elija es que mas le gusta\n ${p}\n ${b}\n ${m}\n ${w}\n ${r}`);
                break;
            case 'liso':
                let modelo = prompt(`Usted eligio un buzo ${tipo}, los modelos se mostraran visualmente mas adelante, por el momento le dejaremos los nombre para que elija es que mas le gusta\n ${p}\n ${b}\n ${m}\n ${w}\n ${r}`);
                break;
            case 'bordado':
                let mod = prompt(`Usted eligio un buzo ${tipo}, los modelos se mostraran visualmente mas adelante, por el momento le dejaremos los nombre para que elija es que mas le gusta\n ${p}\n ${b}\n ${m}\n ${w}\n ${r}`);
                break;
            default: prompt("El tipo de buzo fue mal ingresado, por favor ingreselo de nuevo");
                     tipo = prompt("KEFLA es una empresa que se dedica a la fabricacion de buzos\n Que tipo de buzo le gustaria comprar?\n 1 Estampado\n 2 Liso\n 3 bordado");
                break;
        }
    }

    if (respuesta === 1){
        venta();
    }else{
        alert("Gracias por visitarnos")
    }