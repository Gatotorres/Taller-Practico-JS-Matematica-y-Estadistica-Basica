const btnCalc = document.querySelector('#btnCalc');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const result = document.querySelector('#response');



const calcularPrecioConDescuento = () => {
    //PARA CALCULAR EL PRECIO CON DESCUENTO:
    // (P*(100-D))/100
    const price = Number(inputPrice.value); //ahora si, a los valores del input los trata como numeros
    const discount = Number(inputDiscount.value);

    // que pasa si no llenan los campos pero clickean en calcular
    if (!price || !discount) {
        result.innerText = `rellena los campos para obtener resultados`;
        return;
    }
    //hicimos un console.log y vimos que los valores de los input se trataban como texto.
    console.log({discount,price});
    //por eso vamos a parsear los valores de price y discount con Number(inputPrice.value)

    const newPrice= (price * (100 - discount))/100;
    const totalDiscount = newPrice-price;
    result.innerText = `el nuevo precio es ${newPrice}, el descuento fué de ${totalDiscount}`;
}

btnCalc.addEventListener('click', calcularPrecioConDescuento);
