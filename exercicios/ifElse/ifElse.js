import PromptSync from "prompt-sync";
const prompt = PromptSync();


// let idade = Number(prompt("sua idade? R:"))
//  if (idade >= 18){
//     console.log("acesso permitido");
//  }
//  else {
//     console.log("acesso negado!menor de idade")
//  }





// let nota = Number(prompt("media do aluno?"));
// if ( nota >= 7) {
//     console.log("aprovado");
// } else if (nota <7 && nota >= 5){
//     console.log("recuperacao");
// } else { 
//     console.log("reprovado");
// }





// let saldo = Number(prompt("saldo? R:"));
// let valor = Number(prompt("preço do produto? R:"));
// let negativado = prompt("esta negativado? R:");
// if(valor <= saldo && negativado !== "sim"){
//     console.log("compra aprovada");
// }
// else {
//     console.log("compra negada ")
// }








// let numero = 7
// if (numero % 2 ===0 ){
//     console.log("par")
// }
// else{
//     console.log("impar")
// }




// let a = 10
// let b = 3
// if(a > b){
//     console.log(a)
// }
// else{
//     console.log(b)
// }



// let saldo = 50  
// let preço = 80
// if(saldo >= preço){
//     console.log("pode comprar")
// }
// else{
//     console.log("não pode comprar")
// }




// let senha = 1234
// if(senha === 1234){
//     console.log("acesso liberado")
// }
// else{
//     console.log("acesso negado")
// }



// let temCarteira = true
// let idade = 19

// if(temCarteira === true && idade >= 18){
//     console.log("pode dirigir")
// }
// else{
//     console.log("não pode dirigir")
// }



// let dia = "sabado"

// if(dia == "sabado" || "domingo"){
//     console.log("final de semana")
//  }
//  else{
//      console.log("dia de semana")
//  }


// let logado = true;
// if (logado !== true ){
//     console.log ("faça login");
// } else {console.log ("logado")

// }



// let idade = Number(prompt("Sua idade: "));
// if (idade >= 18 ) {
// console.log("Acesso permitido.");
// } else {
// console.log("Acesso negado: menor de idade.");
// }




// let media = Number(prompt("Média do aluno: "));
// if (media >= 7) {
// console.log("Aprovado");
// } else if (/* TODO */) {
// console.log("Recuperação");
// } else {
// console.log("Reprovado");
// }




// let numero = 3;
// if (numero >= 10) { 
// console.log("É maior ou igual a 10");
// } else {
// console.log("É menor que 10");
// }




// let temp = 30;
// if (temp > 25) {
// console.log("quente");
// } else if (temp >= 0) {
// console.log("Acima de zero"); 
// } else {
// console.log("Frio");
// }



// let a = 10;
// let b = 5;
// let ligado = true;
// console.log(a > b && b > 0); // (a)
// console.log(a < b || ligado); // (b)
// console.log(!ligado); // (c)
// console.log(a === "10"); // (d)
// console.log(a !== b && !false); // (e)




// let peso = Number(prompt("digite seu peso:"));
// let altura = Number(prompt("digite sua altura:"));

// let imc = peso / (altura*altura);
// console.log(`${imc}`)
// if (imc <= 18.5){
//     console.log("abaixo do peso!")
// } else if (imc >= 18.5 && imc <= 24.9){
//     console.log("peso normal!")
// } else if (imc >= 24.9 && imc <= 29.9){
//     console.log("sobrepeso!")
// } else {
//     console.log("obesidade!")
// }






// let idade = Number(prompt("qual sua idade? R:"));
// let vip = prompt("lista vip?(sim/nao)R:");

// if(idade < 18 ) {
//     console.log("entrada negada!")
// } else if (idade >= 18 && vip === true){
//     console.log("bem vindo a area vip!")
// } else {
//     console.log("entrada liberada(area comum)")
// }






// let custo = Number(prompt("digite o custo da produção? R:"))
// let venda = Number(prompt("qual o valor de venda do produto? R:"))

// let lucro = venda - custo


// if (lucro <= 500){
//     console.log("Atenção: Margem de lucro perigosamente baixa")
// } else {
//     console.log(`Margem de lucro saudável: R$ ${lucro}`)
// }




// let horEstimadas = Number(prompt("digite a quantidade de horas: R:"));
// let ong = prompt("o cliente e uma ong? R:");
// let custo = horEstimadas * 45.00
// let desconto = custo * 0.10

// if (ong === "sim" ){
//     console.log(`valor final: R$${custo - desconto}`);
// } else
//     console.log (`valor final: R$ ${custo} `);






// let cotas = Number(prompt("quantas cotas voce tem? R:"));
// let valor = Number(prompt("qual o valor do dividendo? R:"));
// let rendimento = cotas * valor
// if (rendimento >= 100) {
//     console.log ("Você já tem saldo suficiente para comprar uma nova cota e reinvestir!.");
// } else 
//     console.log (`Rendimento recebido: R$: ${rendimento},00. Acumule mais para reinvestir.`);





