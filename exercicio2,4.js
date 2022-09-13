const prompt = require('prompt-sync')();

const numero = Number(prompt('digite o número: '));

if(numero % 2 == 0){
    console.log('\no número ' + numero  + ' seu numero é par');
    console.log('o numero ao quadrado é: ' + (Math.sqrt(numero)).toFixed(2) );
}
else{
    console.log('\nO número ' + numero + ' seu numero é impar!');
    console.log('O número elevado ao quadrado é: ' + (Math.pow(numero, 2)).toFixed(2) );
}