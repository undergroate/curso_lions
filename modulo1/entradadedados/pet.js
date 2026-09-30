import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nome = (prompt("qual o nome do pet?"));
let idade = parseFloat(prompt("qual a idade do pet?"));
console.log(`o ${nome} tem ${idade} anos!`);