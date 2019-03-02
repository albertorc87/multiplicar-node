//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log('========================');
        console.log(`tabla de ${base}`.green);
        console.log('========================');

        if (!Number(base)) {
            return reject(`El valor introducido de base "${base}" no es un número`);
        }
        if (!Number(limite)) {
            return reject(`El valor introducido de limite "${limite}" no es un número`);
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }

        resolve(`OK`);

    });
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`El valor introducido "${base}" no es un número`);
        }
        if (!Number(limite)) {
            return reject(`El valor introducido "${base}" no es un número`);
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}