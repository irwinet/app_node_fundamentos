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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });

    // console.log(empleadoDB);
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id == empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id });
        }
    });
}

getEmpleado(3).then(empleado => {
        return getSalario(empleado);
    })
    .then(result => {
        console.log(`El salario de ${result.nombre} es de ${result.salario} $`);
    })
    .catch(err => {
        console.log(err);
    });