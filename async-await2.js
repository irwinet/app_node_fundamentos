let empleados = [{
        id: 1,
        nombre: 'Irwin'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
    // console.log(empleadoDB);
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id == empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id };
    }

}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `El salario de ${salario.nombre} es de ${salario.salario} $`;
}

getInformacion(3).then(resp => console.log(resp)).catch(err => console.log(err));