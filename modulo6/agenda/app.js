

import promptSync from "prompt-sync";
import contato from "./contatos.js";
import atualizar_contato from "./atualizar_contato.js";
import listar_contatos from "./listar_contatos.js";
import adicionar_contato from "./adicionar_contatos.js";

const prompt = promptSync();


let opcao = -1;
let num = -1;

do{
console.log("=====MENU=====");
console.log("1 - adicionar contatos");
console.log("2 - atualizar contatos");
console.log("3 - listar contatos");
console.log("4 - remover contatos");
console.log("0 - sair");

opcao = Number(prompt("escolha uma opção:"))
switch(opcao){
    case 1:
        console.log("qual numero deseja adicionar?")
        num = prompt.toLowerCase("R:");
        adicionarContato(num)
        break
    case 2:
        atualizarContatos();
        break    
    case 3:
        console.table(contatos);
        break
    case 4:
        removerContatos();
        break    
    case 0:
        console.log("fechando programa...");
        break
    default:
        console.log("opção invalida");
        break;    
}

} while(opcao !== 0)
