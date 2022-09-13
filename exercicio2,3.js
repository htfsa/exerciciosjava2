const prompt = require('prompt-sync')();

const idade = Number(prompt('digite a sua idade pra saber categoria: '));

if(idade >= 10 && idade <= 14){
    console.log('categoria infantil');
}
else if(idade >= 15 && idade <= 17){
    console.log('categoria juvenil');
}
else if(idade >= 18 && idade <= 25){
    console.log('categoria dos adultos');}