import promptSync from 'prompt-sync';
const prompt = promptSync();


// for (let i = 1; i <= 5; i++) {
//     console.log(i);




// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }





// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }





// for (let i = 0; i <= 10; i++) {
//     console.log(`3 x ${i} = ${3 * i}`);
// }





// let soma = 0;

// for (let i = 1; i <= 10; i++) {
//     soma = soma + i;
// }

// console.log(soma);





// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }





// let contador = 3;

// while (contador >= 1) {
//     console.log(contador);
//     contador-=1;
// }

// console.log("Já!");




// for (let i = 1; i <= 3; i++) {
//     console.log("LionsDev");
// }





// for (let i = 1; i <= 20; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }



// do {
//     console.log("Rodou");
// } while (false);


// ------------------------------||---------------------||---------------------||------------------------



// for (let i = 1; i <= 10; i++) {
// console.log(i);
// }





// let soma = 0;
// for (let i = 1; i <= 100; i++) {
//     soma += i;
// }
// console.log("Soma total:", soma);





// let n = 5;
// while (n >= 1) {
// console.log(n);
// n-=1;
// }
// console.log("Fim!");







// let i = 0;
// while (i <= 5) {
// console.log(i);
// i++; // Incrementa i em 1 a cada iteração por isso loopava
// }






// for (let i = 0; i <= 10; i++) {   //i começava em 1 e deveria começar em zero
// console.log(`7 x ${i} = ${7 * i}`);
// }







// for (let i = 0; i < 6; i += 2) {
// console.log(i);
// }
// let k = 3;
// do {
// console.log("valor:", k);
// k--;
// } while (k > 3);






// let quantidade = parseInt(prompt("Quantas notas você vai digitar? "));
// let soma = 0;

// for (let i = 1; i <= quantidade; i++) {
//     let nota = Number(prompt(`Digite a nota ${i}: `));
    
//     soma = soma + nota; 
// }

// let media = soma / quantidade;
// console.log(`Média: ${media}`);






// let numeroSecreto = 7; 
// let palpite;           
// let tentativas = 0;      

// do {
//     palpite = parseInt(prompt("Palpite: "));
    
//     tentativas++;

//     if (palpite !== numeroSecreto) {
//         console.log("Tente novamente");
//     }
// } while (palpite !== numeroSecreto); 

// console.log(`Você acertou! Tentativas: ${tentativas}`);


// -----------------------------||------------------------||------------------------||---------------------






// let senhaLog = 9876;       
// let senhaDig;
// do {
//     senhaDig = parseInt(prompt("digite a senha: "));
    
//     if (senhaDig !== senhaLog) {
//         console.log("senha incorreta! tente novamente!");
//     }
// }while (senhaDig !== senhaLog);

// console.log("senha correta! acesso liberado!");








// let temperatura = parseFloat(prompt("Digite a temperatura: "));

// for (let i = 1; i <= 5; i++) {
//     temperatura = temperatura + 2; 
    
//     console.log(`Calibragem ${i}: ${temperatura} graus`);
// }








// let totalCompra = 0; 
// let resposta;        

// do {
//     let valorItem = parseFloat(prompt("Digite o valor do item do cardápio: R$ "));
    
//     totalCompra = totalCompra + valorItem;

//     resposta = prompt("Deseja adicionar mais algum item? (sim/nao): ").toLowerCase();

// } while (resposta === "sim");

// console.log(`\nValor total a ser pago: R$ ${totalCompra}`);







// let salarios = [2500,3200,4100,5000,6200];  

// for (let i = 0; i < salarios.length; i++) {
//     let salarioAtual = salarios[i] * 1.10;
//     console.log(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);
// }





// const CAPACIDADE_MAXIMA = 1000;

// let pesoTotal = 0;
// let totalCaixas = 0;

// while (pesoTotal < CAPACIDADE_MAXIMA) {
//     let pesoCaixa = parseFloat(prompt("Digite o peso da caixa em kg:"));

//     if (pesoTotal + pesoCaixa > CAPACIDADE_MAXIMA) {
//         console.log("Alerta: A carga máxima foi atingida! Esta caixa não pode ser adicionada.");
//         break; 
//     }

//     pesoTotal += pesoCaixa;
//     totalCaixas++;
// }

// console.log(`\n--- Resumo do Carregamento ---`);
// console.log(`Peso total carregado: ${pesoTotal} kg`);
// console.log(`Quantidade de caixas alocadas com sucesso: ${totalCaixas}`);





const carrinhos = [
    { cliente: "andre kanklarovicz", produtos: [120.50, 45.00, 34.90] },
    { cliente: "amanda lavinia", produtos: [89.90, 15.00] },
    { cliente: "jose silva", produtos: [250.00, 120.00, 15.10] }
];

let clientesSucesso = [];

for (let i = 0; i < carrinhos.length; i++) {
    let carrinhoAtual = carrinhos[i];
    
    let totalDevido = 0;
    for (let j = 0; j < carrinhoAtual.produtos.length; j++) {
        totalDevido += carrinhoAtual.produtos[j];
    }
    
    console.log(`\n=========================================`);
    console.log(`Cliente: ${carrinhoAtual.cliente}`);
    console.log(`Total da compra: R$ ${totalDevido.toFixed(2)}`);
    console.log(`=========================================`);
    
    let totalPago = 0;
    while (totalPago < totalDevido) {
        let restante = totalDevido - totalPago;
        let pagamento = parseFloat(prompt(`Falta pagar R$ ${restante.toFixed(2)}. Digite o valor em dinheiro recebido:`));
        
        if (!isNaN(pagamento) && pagamento > 0) {
            totalPago += pagamento;
        } else {
            console.log("Valor inválido. Insira um número positivo.");
        }
    }
    
    let troco = totalPago - totalDevido;
    if (troco > 0) {
        console.log(`Pagamento concluído! Troco: R$ ${troco.toFixed(2)}`);
    } else {
        console.log("Pagamento concluído com o valor exato!");
    }
    

    clientesSucesso.push(carrinhoAtual.cliente);
}

console.log(`\n\n====== RELATÓRIO DE FECHAMENTO DE CAIXA ======`);
console.log("Clientes que concluíram o pagamento com sucesso:");
for (let k = 0; k < clientesSucesso.length; k++) {
    console.log(`- ${clientesSucesso[k]}`);
}
console.log(`==============================================`);