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