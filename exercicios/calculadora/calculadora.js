
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero1 = Number(prompt("qual o primeiro numero? R: "));
let operacao = prompt("qual operação? R: ");
let numero2 = Number(prompt("qual o segundo numero? R: "));

if (operacao === "+") {
  console.log("resultado:", numero1 + numero2);
} else if (operacao === "-") {
  console.log("resultado:", numero1 - numero2);
} else if (operacao === "*") {
  console.log("resultado:", numero1 * numero2);
} else if (operacao === "/") {
  console.log("resultado:", numero1 / numero2);
} else {
  console.log("operacao invalida");
}


// if (isNaN(numero1) || (numero2)) {
// console.log("Da próxima vez digite um número correto!");
// } else {
// }