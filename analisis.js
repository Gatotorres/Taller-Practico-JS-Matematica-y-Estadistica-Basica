console.log(PlatziMath);
console.log(salarios);


//okey entonces tenemos un array y un objeto
//el profe nos dice que utilicemos .find o .filter()

// let findJuanita = salarios.find((elemento)=>{return elemento.name=="Juanita"});
// console.log(findJuanita);

// let arrayTrabajosJuanita = findJuanita["trabajos"];
// console.log(arrayTrabajosJuanita);

// let juanitaSalarios = arrayTrabajosJuanita.map((elemento)=>{return elemento.salario});
// console.log(juanitaSalarios);

// let medianaJuanita = PlatziMath.calcularMediana(juanitaSalarios);
// console.log(medianaJuanita);

function medianaSalarios(empleado){
    if(salarios.find((elemento)=>{return elemento.name == empleado})){
        let findEmpleado = salarios.find(
            (elemento)=>{return elemento.name == empleado});
        let arrayTrabajosEmpleado = findEmpleado["trabajos"];
        let empleadoSalario = arrayTrabajosEmpleado.map(
            (elemento)=>{return elemento.salario});
        return PlatziMath.calcularMediana(empleadoSalario);
    }else{
        return console.log(
            `le informamos que ${empleado} no trabaja aqui`);
    }
}
function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}  
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
  
    let porcentajesCrecimiento = [];
    
    for (let i = 1; i < trabajos.length; i++) {
      const salarioActual = trabajos[i].salario;
      const salarioPasado = trabajos[i - 1].salario;
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
  
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
  
    console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});
  
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    console.log(ultimoSalario);
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    console.log(aumento);
    const nuevoSalario = ultimoSalario + aumento;
    console.log(nuevoSalario);
    return nuevoSalario;
  }


/*
ANALISIS EMPRESARIAL

Industrias Mokepon: {
    2018: [{salario: nombre},{salario: nombre},{salario: nombre},]
    2019: [{...}]
    ...
}


*/

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        const { name, empresa, year, salario } = trabajo;
        
        if (!empresas[empresa]) {
            empresas[empresa] = {};
        }
        if (!empresas[empresa][year]) {
            empresas[empresa][year] = [];
        } 
        empresas[empresa][year].push({ nombre: name, salario: salario });
    }
}
console.log(empresas);


const empresas2 = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas2[trabajo.empresa]) {
            empresas2[trabajo.empresa] = {};
        }
        if (!empresas2[trabajo.empresa][trabajo.year]) {
            empresas2[trabajo.empresa][trabajo.year] = [];
        }
        empresas2[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log(empresas2);


function salariosEmpresariales(nombre, year){
    if(!empresas2[nombre]){
        console.warn('la empresa no existe');
    }else if(!empresas2[nombre][year]){
        console.warn('la empresa no dio salarios ese año');
    }else{
       return PlatziMath.calcularMediana(empresas2[nombre][year]);
    }
}
salariosEmpresariales("Daily Planet",2018);
salariosEmpresariales("Inversionify",2019);
salariosEmpresariales("Mokepon",2020);

// ahora haremos una proyeccion de los salarios por empresa

/*
brainstorm,
necesito una funcion que reciba el nombrede la empresa y diga su proyeccion para el siguiente
año, tiene que usar como referencia todos los salarios que dió en todos los años
empresas2 es un objeto con todos los nombres, dentro tiene 1 objeto para 
cada año y cada año tiene como valor un array
*/

function proyeccionEmpresarial(nombreEmpresa) {
    if (!empresas2[nombreEmpresa]) {
        console.warn('esta empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas2[nombreEmpresa]);
        const listaMedianaYears = empresaYears.map((year) => {
            return salariosEmpresariales(nombreEmpresa, year);
        });
        console.log(listaMedianaYears);
        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
            porcentajesCrecimiento);
        console.log(medianaPorcentajesCrecimiento);
        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        console.log(ultimaMediana);
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        console.log(aumento);
        const nuevaMediana = ultimaMediana + aumento;
        console.log(nuevaMediana);
        return nuevaMediana;
    }
}

//ANALISIS GENERAL
function medianaPorPersona(nombrePersona) {
    const persona = encontrarPersona(nombrePersona);
    if (persona && persona.trabajos) {
        const trabajos = persona.trabajos;
        const salarios = trabajos.map(elemento => elemento.salario);
        const medianaSalarios = PlatziMath.calcularMediana(salarios);
        return medianaSalarios;
    } else {
        // Manejar el caso cuando la persona no fue encontrada o no tiene trabajos
        return NaN; // Por ejemplo, retornar NaN
    }
}

function medianaGeneral() {
    const nombres = salarios.map(persona => persona.name);
    console.log("Nombres:", nombres);

    const medianaPorCadaNombre = salarios.map(persona => medianaPorPersona(persona.name));
    console.log("Medianas por cada nombre:", medianaPorCadaNombre);

    console.log({ nombres, medianaPorCadaNombre });
    return medianaPorCadaNombre;
}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    const cantidad = listaMedianas.length/10;
    const limite = listaMedianas.length-cantidad;
    const top10 = medianasOrdenadas.slice(limite,medianasOrdenadas.length);
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
}
console.log(medianaGeneral());
console.log(medianaTop10());