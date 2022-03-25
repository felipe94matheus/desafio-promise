const fs = require("fs/promises");

const { fstat } = require("fs");

const somar = (x,y) => {
    const soma = x + y;
    return new Promise((resolve, reject) => {

        if (typeof x !== 'number' || typeof y !== 'number') {
            reject("Não são números!");
        }
        
        fs.appendFile('resultado.txt', `\nO resultado é: ${x} + ${y} = ${soma}`)
        .then(() => {
            resolve(soma)
        })
    });
};

somar(10,10)
.then((resultado) => {console.log(resultado)})
.catch((error) => {console.log(error)});