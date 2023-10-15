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

//&es util para ver en consola el codigo separado gracias a desplegables
//que se visualizan debido a dicho trozo de codigo

//forma de utilizarlo:
console.group('nombre del trozo de codigo desplegable');

//acá adentro estaría el codigo que queremos encapsular dentro de consola
// esto es mas que nada para mostrar mejor/mas claramente
// los elementros en consola

console.groupEnd('nombre del trozo de codigo desplegable');

//todo lo que se encuentre adentro será 
// separado/discriminado debido a dicho desplegable del console.group()


//MAS EJEMPLOS

console.group('CUADRADOO0O00OO0OOO')

function calcularPerimetroTriangulo(lado1,lado2,base,altura){
    return {
        perimetro: lado1+lado2+base,
        area: (base*altura)/2,
    }
};
console.log({
    ladoCuadrado1,
    perimetroCuadrado1,
    areaCuadrado1,
})
console.groupEnd('CUADRADOO0O00OO0OOO');
