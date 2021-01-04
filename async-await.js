// let getNombre = async() => {

//     // undefined.nombre;
//     // throw new Error('No existe un nombre para ese usuario');

//     return 'Irwin';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Irwin');
        }, 3000);
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log('Error de ASYNC', e);
})