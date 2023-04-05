const traerProd = async() =>{
    try{
        const response = await fetch(".../stock.json");
        const stock = await response.json();
        return stock;
    }catch(error){
            console.log(error);
    }
};
stock=traerProd();