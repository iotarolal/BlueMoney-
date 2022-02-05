//import { write } from 'fs';
// const { default: axios } = require('axios');
const axios = require('axios');
const fs = require('fs');


if (process.argv.length < 6) {
    console.log('Faltan argumentos para la ejecucion');
    process.exits(1);
}

// node index.js nombre_archivo extensión divisa peso
//const namefile = process.argv[2];
const extension =process.argv[3];
const indicador = process.argv[4];
const pesos = Number(process.argv[5]);


// valido pesos
if (typeof pesos != 'number') {
    process.exit(1);
}


async function getdatos() {

    const respuesta = await axios.get('https://mindicador.cl/api');
    
    const valorcambio =  pesos / respuesta.data[indicador].valor;
    
    const now = new Date;
    
    const mensaje = `A la fecha: ${now}\n Fue realizada cotización con los siguientes datos:\n
    Cantidad de pesos a convertir: ${pesos} pesos:\n
    Convertido a ${indicador} y da un total de: 
    ${valorcambio}`;
    
    const namefile = `${process.argv[2]}.${process.argv[3]}`;
    
    fs.writeFile(namefile, mensaje,
            'UTF-8',
            function() { 
                console.log('archivo creado')
            }
        )
        
}
    
getdatos();
