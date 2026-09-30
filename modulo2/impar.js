import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num1 = Number(prompt('digite um numero?'));

if (num1 == 0) {console.log(`esse numero é  0`);
}   
    else if(num1 % 2 == 0) {console.log(`esse numero é par`)
}   
    else {console.log(`esse numero é impar`)};

