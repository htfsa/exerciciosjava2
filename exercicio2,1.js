const prompt = require('prompt-sync')();

let maior=0, pergunta;

for(let i=0; i<3; i++){
    pergunta = Number(prompt(`digite o número ${(i+1)}: `));
    if(pergunta > maior){
        maior = pergunta;
    }
}

console.log(`\nO numero maior: ${maior}`);