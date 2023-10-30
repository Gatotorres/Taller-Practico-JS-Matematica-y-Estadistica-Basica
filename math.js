console.group('Agrupación de la primer clase del curso.')

//vamos a calcular el perimetro del cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado *4;

//vemamos el área del cuadrado en este momento

const areaCuadrado =  ladoCuadrado * ladoCuadrado;
//deberíamos agregar/Especificar si son CM o CM^2

//en este curso lamentablemente no veremos en profundidad
//el manejo del DOM, se centrará en las matemáticas.

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})

//como imprimiriamos el triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianuloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianuloBase;
const areaTriangulo = (ladoTrianuloBase*alturaTriangulo) /2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianuloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

//CON ESTA FUNCION
//tenemos una funcion que si en la consola del liveserver
// le introducimos el nombre calcularPerimetroTriangulo y dentro
//la serie de numeros que se nos ocurra, nos retornará su perimetro y area

function calcularPerimetroTriangulo(lado1,lado2,base,altura){
    return {
        perimetro: lado1+lado2+base,
        area: (base*altura)/2,
    }
};


//ahora utilizaremops la misma logica, y cambiaremos la forma de 
//obtener el area y el perímetro pero del cuadrado

function calcularPerimetroCuadrado(lado1){
    return {
        perimetro: lado1*4,
        area: lado1*lado1,
    }
};

//Si ahora llamamos en consola a calcularPerimetroCuadrado y le decimos un valor
//nos devolverá al perimetro y el area de un cuadrado de dicho valor.

//ahora veremos diferentes consolas
//console.log()
//console.warn()
//console.table()

//en particular hablando de

//console.group()

//Es util para ver en consola el codigo separado gracias a desplegables
//que se visualizan debido a dicho trozo de codigo

//forma de utilizarlo:
console.group('nombre del trozo de codigo desplegable');

const funcionejemplo = () =>{};
//acá adentro estaría el codigo que queremos encapsular dentro de consola
// esto es mas que nada para mostrar mejor/mas claramente
// los elementros en consola

console.groupEnd('nombre del trozo de codigo desplegable');

//todo lo que se encuentre adentro será 
// separado/discriminado debido a dicho desplegable del console.group()

console.groupEnd('Agrupación de la primer clase del curso.')

// ahora veremos Math en Javascript, como calcular 
// el área del círculo y el perímetro

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo*2;
const PI = 3.1415;

const circunferencia =diametroCirculo * PI;
const areaCirculo = (radioCirculo**2)*PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

/*
{
  radioCirculo: 3,
  diametroCirculo: 6,
  PI: 3.1415,
  circunferencia: 18.849,
  areaCirculo: 28.273500000000002
}
*/

//ahora crearemos una funcion que le puedamos
//introducir solo el radio, calcula el resto de la logica.
function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    
    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
}
console.log(calcularCirculo(3));

console.groupEnd('Circulo');


//Altura del triangulo 

console.group('Triangulo')


/* ESTE ES MI CODIGO QUE POR ALGUNA RAZON NO LO RECONOCE CORRECTO:

function calcularTriangulo(lado1,lado2,base,altura){
    perimetro: lado1+lado2+base,
    area: ((base*altura)/2,
};

function calcularAlturaTrianguloIsoseles(lado1,base){
    if (lado1 == base){
        crossOriginIsolated.warn('Este no es un triangulo isosceles');
    } else {
        //h = raizcuadrada (lado** - (b**2)/4)
        
        const altura = Math.sqrt((lado1**2) - ((base**2) )/ 4);
    }
};
*/ //ESTE ES EL CODIGO DEL PROFE:

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
    console.warn('Este no es un triÃ¡ngulo isosceles');
    } else {
      // h = raizcuadrada(lado1**2 - (b**2)/4)
      return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4 );
    }5
}

console.log(calcularAlturaTriangulo(6,4));


//Ahora tenemos el reto de crear un triangulo escaleno
//EN EL Triangulo escaleno son todos los angulos iguales
console.group('Clase playground TRIANGULO ESCALENO')

function solution(lado1, lado2, lado3) {

    let a = lado1;
    let b = lado2;
    let c = lado3;

    // Si no es escaleno, no continuamos
    if (a == b || b == c || c == a) {
    return false;
    }

    // Si es escaleno, calculamos primero su area
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Ahora usamos que A = bh/2, por lo que h = 2A/b
    let altura_a = Math.floor(2 * area / a);
    let altura_b = Math.floor(2 * area / b);
    let altura_c = Math.floor(2 * area / c);

    // IMPTE: No se especifica cual de las alturas
    // se quiere, tras probar el codigo conclui
    // que se busca la altura respecto a 'a' como base
    console.log({
        altura_a,
        altura_b,
        altura_c,}); 
}
console.log(solution(16,8,10)); // 4
console.log(solution(6,6,6)); // false

console.groupEnd('Clase playground TRIANGULO ESCALENO')


console.groupEnd('Triangulo');
