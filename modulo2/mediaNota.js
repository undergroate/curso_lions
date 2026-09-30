import PromptSync from "prompt-sync";
const prompt = PromptSync();

const prova1 = parseFloat(prompt("nota1:"));
const prova2 = parseFloat(prompt("nota2:"));

const notas = [];
notas.push(prova1);
notas.push(prova2);

const media = (notas[0] + notas[1]) / notas.length;

console.log(`a media é : ${media}`);
console.table(notas);