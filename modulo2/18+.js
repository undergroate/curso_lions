import PromptSync from "prompt-sync";
const prompt = PromptSync();

const nome = prompt("qual seu nome?")
const idade = parseInt(prompt("qual sua idade?"))

if (idade >= 18) 
    {console.log(`${nome} ja é maior de idade!`);
} else {
    const quantoFalta = 18 - idade;
    console.log(`${nome}, você vai ser maior de idade em ${quantoFalta} anos `);
}