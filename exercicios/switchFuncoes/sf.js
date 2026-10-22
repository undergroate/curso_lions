import PromptSync from "prompt-sync";
const prompt = PromptSync();

let cargo = prompt("qual seu cargo? R:");
let salario = Number(prompt("qual seu salario? R:"));
let aumento

switch (cargo){
    case "estagiario":
        aumento = salario * 0.10
        console.log (`seu bonus sera de R$:${aumento}`)
        break
    case "junior":
        aumento = salario * 0.15
        console.log (`seu bonus sera de R$:${aumento}`)
        break
    case "pleno":
        aumento = salario * 0.20
        console.log (`seu bonus sera de R$:${aumento}`)
        break
    default:
        console.log ("cargo nao identificado!")
        break

}