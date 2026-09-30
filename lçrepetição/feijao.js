import PromptSync from "prompt-sync";
const prompt = PromptSync();

let listaDeCompras = ['arroz', 'feijao', 'macarrao', 'carne'];

var i
for(i = 0; i < listaDeCompras.length; i +=1) {

    console.log(`item:${listaDeCompras[i]}`)
}