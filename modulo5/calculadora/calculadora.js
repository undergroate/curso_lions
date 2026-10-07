import PromptSync from "prompt-sync";
import numeros from "./numeros.js";
import adicionarNumero from "./adicionar.js";
import removerNumeros from "./remover.js";
import calcularMedia from "./media.js";



const prompt = PromptSync();




let opcao = -1;
let num = -1;

do{
console.log("=====MENU=====");
console.log("1 - adicionar numero");
console.log("2 - remover numero");
console.log("3 - listar numeros");
console.log("4 - calcular media");
console.log("5 - calcular mediana");
console.log("0 - sair");

opcao = Number(prompt("escolha uma opção:"))
switch(opcao){
    case 1:
        console.log("qual numero deseja adicionar?")
        num = Number(prompt("R:"));
        adicionarNumero(num)
        break
    case 2:
        removerNumeros();
        break    
    case 3:
        console.table(numeros);
        break
    case 4:
        console.log(`A media é : ${calcularMedia()}`);
        break    
    case 0:
        console.log("fechando programa...");
        break
    default:
        console.log("opção invalida");
        break;    
}

} while(opcao !== 0)
