import PromptSync from "prompt-sync";
const prompt = PromptSync();

const anoAtual = 2026;
const nome = prompt("qual seu nome?");
const idade = Number(prompt("qual sua idade?"));
const anoNascimento = anoAtual - idade;
console.log (`nome:${nome}`)
console.log (`Ano de nasciemto:${anoNascimento}`);

if(anoNascimento === anoAtual){
    console.log("ainda não fez aniversário");
} else {
    console.log("ja fez aniversario.");
}