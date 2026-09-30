import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nota1 = Number(prompt("qual a nota 1?"));
let nota2 = Number(prompt("qual a nota 2?"));
let resultado = (nota1 + nota2) /2;
console.log (`A media final é ${resultado}!`)

