import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nome = prompt("qual seu nome?");
let cidade = prompt("onde você mora?");
console.log(`Olá ${nome}, de ${cidade}`);