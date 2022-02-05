// const { default: axios } = require('axios');
const axios = require('axios');

console.log(process.argv);

if (process.argv.length < 6) {
    console.log('Faltan argumentos para la ejecucion');
    process.exits(1);
}

// node index.js nombre_archivo extensión divisa peso
const namefile = process.argv[2];
const extension =process.argv[3];
const indicador = process.argv[4];
const pesos = Number(process.argv[5]);


// valido pesos
if (typeof pesos == Number) {
    process.exit(1);
}


async function getdatos() {

    const respuesta = await axios.get('https://mindicador.cl/api');
//    console.log(respuesta.data);


    console.log(`respuesta.data.${indicador}.nombre`)
    console.log(`respuesta.data.${indicador}.nombre`)
//    console.log(respuesta.data.filter(obj=> obj.estado == 'Despejado'));

}
//`A la fecha: ${respuesta.data.uf.fecha}`
//const mensaje = `A la fecha: respuesta.data.${indicador}.nombre`

const mensaje = `A la fecha: respuesta.data.${indicador}.fecha <br> Fue realizada cotización con los siguientes datos:`;
//`Cantidad de pesos a convertir: ${pesos} pesos`:
//`Convertido a respuesta.data.${indicador}.nombre da un total de:`;
//` ${pesos} / respuesta.data.${indicador}.valor;


const traspasodato =  process.argv[2] + '.' + process.argv[3];
fs.writefile(traspasodato, mensaje, 'UTF-8');

//Recibir por la línea de comando los siguientes argumentos:
//a. Nombre del archivo que se creará.
//b. Extensión del archivo.
//c. Indicador económico que se desea convertir.
//d. Cantidad de pesos que se quiere cambiar.

getdatos();
