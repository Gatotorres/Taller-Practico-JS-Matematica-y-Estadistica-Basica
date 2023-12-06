
console.group('calcularPrecioConDescuento')


const btnCalc = document.querySelector('#btnCalc');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const result = document.querySelector('#response');


const calcularPrecioConDescuento = () => {
    //PARA CALCULAR EL PRECIO CON DESCUENTO:
    // (P*(100-D))/100
    const price = Number(inputPrice.value); //ahora si, a los valores del input los trata como numeros
    const discount = Number(inputDiscount.value);

    //  que pasa si no llenan los campos pero clickean en calcular
    if (!price || !discount) {
        result.innerText = `Rellena los campos para obtener resultados`;
        return; //sin este return este if no devuelve nada.
    }

    if (discount > 100) {
        result.innerText = `No es posible darte más de el 100% de descuento`;
        return;
    }
    //hicimos un console.log y vimos que los valores de los input se trataban como texto.
    console.log({ discount, price });
    //por eso vamos a parsear los valores de price y discount con Number(inputPrice.value)

    const newPrice = (price * (100 - discount)) / 100;
    const totalDiscount = price - newPrice;
    result.innerText = `AHORA PAGARÁS: ${newPrice}, 
    el descuento fué de ${totalDiscount}`; //   ^^^acá le mandé enter para 
}                                          // intentar hacer un salto 
//pero creo que lo arregle enpaquetandolos en diferentes div
btnCalc.addEventListener('click', calcularPrecioConDescuento);

console.Endgroup('calcularPrecioConDescuento')
/*
ESTE FUE MI INTENTO QUE LUEGO CORREGI CON IA

const btnCalCupon = document.querySelector('#btnCalCupon');
const inputCupon = document.querySelector('#cupon');
const responseCupon = document.querySelector('#responseCupon');
const pricecupon = document.querySelector('#pricecupon');

const calcularCuponDescuento = () => {
    const codigo1 = "codi#01";
    const codigo2 = "codi#02";
    const codigo3 = "codi#03";

    if (responseCupon.value === codigo1) {
        responseCupon.innerText = `Te hemos dado un 10% de descuento`;
        return;
    }
    if (responseCupon.value === codigo2) {
        responseCupon.innerText = `Te hemos dado un 20% de descuento`;
        return;
    }
    if (responseCupon.value === codigo3) {
        responseCupon.innerText = `Te hemos dado un 30% de descuento`;
        return;
    } else { 
        return `nada de lo que has escrito tiene descuento`;
    }
    
};



/// esto es lo que hizo el profe en el capitulo 8


const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const arrayUObjecto = undefined; // ['cupones': descuento] {}?

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
    }

    let discount;
    
    switch (coupon) {
    case 'JuanDC_es_Batman':
        discount = 30;
        break;
    case 'no_le_digas_a_nadie':
        discount = 25;
        break;
    default:
        pResult.innerText = 'El cupón no es válido';
        return;
    }

// if (coupon == 'JuanDC_es_Batman') {
//   discount = 30;
// } else if (coupon == 'no_le_digas_a_nadie') {
//   discount = 25;
// } else {
// pResult.innerText = 'El cupón no es válido';
// return;
// }

  const newPrice = (price * (100 - discount)) / 100;

pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;


}
*/

console.group('calcularPrecioConDescuento')



// const btnCalCupon = document.querySelector('#btnCalCupon');
// const inputCupon = document.querySelector('#cupon');
// const responseCupon = document.querySelector('#responseCupon');
// const pricecupon = document.querySelector('#pricecupon');

// var arrayDeLaApi = [{ "codi#01": 10 }, { "codi#02": 20 }, { "codi#03": 30 }, { "codi#04": 40 }, { "codi#05": 50 }, { "codi#06": 60 }, { "codi#07": 70 },];

// const priceCupon = Number(pricecupon.value);

// if (isNaN(priceCupon) || priceCupon <= 0) {
//     responseCupon.innerText = "Ingresa un precio válido para el cupón.";
//     return;
// }

// let discountPercentage = 0;

// /*

// const calcularCuponDescuento = () => {
//     const codigo1 = "codi#01";
//     const codigo2 = "codi#02";
//     const codigo3 = "codi#03";

//     if (inputCupon.value === codigo1) {
//         discountPercentage = 10;
//     } else if (inputCupon.value === codigo2) {
//         discountPercentage = 20;
//     } else if (inputCupon.value === codigo3) {
//         discountPercentage = 30;
//     } else {
//         responseCupon.innerText = "Nada de lo que has escrito tiene descuento";
//         return;
//     }

// */


// const newPriceCupon = (priceCupon * (100 - discountPercentage)) / 100;
// const totalDiscount = priceCupon - newPriceCupon;

// responseCupon.innerText = `¡Qué suerte tienes! has obtenido un ${discountPercentage}% de descuento
//     El precio ahora es de ${newPriceCupon} se han descontado ${totalDiscount}`;
// };

// btnCalCupon.addEventListener('click', calcularCuponDescuento);


const btnCalCupon = document.querySelector('#btnCalCupon');
const inputCupon = document.querySelector('#cupon');
const responseCupon = document.querySelector('#responseCupon');
const pricecupon = document.querySelector('#pricecupon');

const arrayDeLaApi = [];

arrayDeLaApi.push({
    name: "codi#01",
    discount: 10,
});

arrayDeLaApi.push({
    name: "codi#02",
    discount: 20,
});

arrayDeLaApi.push({
    name: "codi#03",
    discount: 30,
});

let discountPercentage;

btnCalCupon.addEventListener('click', () => {
    const priceCupon = Number(pricecupon.value);
    const cuponCode = inputCupon.value;

    if (!cuponCode || !priceCupon) {
        responseCupon.innerText = "Ingresa valores validos";
        return;
    }

    function isCouponInArray(couponElement) {
        return couponElement.name
    }

    const couponInArray = arrayDeLaApi.

        if(isCouponInArray){
            discountPercentage = couponInArray.discount
        }else{
            responseCupon.innerText = 'El Cupón no es valido';
    return
});





// for (const cuponObj of arrayDeLaApi) {
//     const cuponCode = Object.keys(cuponObj)[0];

//     if (inputCupon.value === cuponCode) {
//         discountPercentage = cuponObj[cuponCode];
//         break; // Salir del bucle una vez encontrado el código
//     }
// }

// if (discountPercentage === 0) {
//     responseCupon.innerText = "Nada de lo que has escrito tiene descuento";
//     return;
// }




const newPriceCupon = (priceCupon * (100 - discountPercentage)) / 100;
const totalDiscount = priceCupon - newPriceCupon;

responseCupon.innerText = `¡Qué suerte tienes! has obtenido un ${discountPercentage}% de descuento.
    El precio ahora es de ${newPriceCupon}. Se han descontado ${totalDiscount}.`;
});
console.Endgroup('calcularPrecioConDescuento')


// // for (const cuponObj of arrayDeLaApi) {
// //     const cuponCode = Object.keys(cuponObj)[0];

// //     if (inputCupon.value === cuponCode) {
// //         discountPercentage = cuponObj[cuponCode];
// //         break; // Salir del bucle una vez encontrado el código
// //     }
// // }

// // if (discountPercentage === 0) {
// //     responseCupon.innerText = "Nada de lo que has escrito tiene descuento";
// //     return;
// // }




// const newPriceCupon = (priceCupon * (100 - discountPercentage)) / 100;
// const totalDiscount = priceCupon - newPriceCupon;

// responseCupon.innerText = `¡Qué suerte tienes! has obtenido un ${discountPercentage}% de descuento.
//     El precio ahora es de ${newPriceCupon}. Se han descontado ${totalDiscount}.`;
// });
// console.Endgroup('calcularPrecioConDescuento')