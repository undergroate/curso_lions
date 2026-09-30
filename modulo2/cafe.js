import PromptSync from "prompt-sync";
const prompt = PromptSync();

let gostadecafe = (prompt("você gosta de café?(sim/nao)"));
let resposta 
if (gostadecafe === "sim") {
    resposta = true
}   else {
    resposta = false
}

    if (resposta) {
        console.log('o usuario gosta de café')
    }
    else {
        console.log('o usuario nao gosta de café')
    }