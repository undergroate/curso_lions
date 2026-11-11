import PromptSync from "prompt-sync";
const prompt = PromptSync();


//1.



// let valorConsumo = Number(prompt("Digite o valor total consumido na mesa: R$"));
// let quantidadePessoas = Number(prompt("Digite a quantidade de pessoas que irão dividir a conta:"));

// if (quantidadePessoas <= 0) {
//     console.log("Erro: A quantidade de pessoas deve ser maior que zero");
// } else {
//     let taxaServico = valorConsumo * 0.10;
//     let totalComTaxa = valorConsumo + taxaServico;
    
//     let valorPorPessoa = totalComTaxa / quantidadePessoas;
    
//     console.log("\n--- RESUMO DA CONTA ---");
//     console.log(`Valor da taxa de serviço: R$ ${taxaServico.toFixed(2)}`);
//     console.log(`Valor total com a taxa: R$ ${totalComTaxa.toFixed(2)}`);
//     console.log(`Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}`);
// }








//2.


// console.log("=== CONTROLE DE ACESSO DA BALADA ===");
// let idade = prompt("qual sua idade? R: ")
// let vip = prompt("credencial vip? (sim/nao). R: ").toLowerCase

// if (idade < 18 ){
//     console.log("acesso negado : menor de idade")
// }else if(idade >= 18 && vip === "sim"){
//     console.log("acesso permitido : area vip")
// }else  {
//     console.log("acesso permitido: pista ")
// }










//3.

// console.log("\n ======MENU DE PEDIDOS====== ")
// console.log("1 - Café expresso")
// console.log("2 - Cappuccino")
// console.log("3 - Chá")
// console.log("4 - Chocolate Quente")
// let escolha = Number(prompt("qual sua escolha? R: "));

// switch(escolha){
//     case 1 :
//         console.log("seu Café expresso está sendo preparado") 
//         break
//     case 2 : 
//         console.log("seu cappuccino está sendo preparado ")
//         break
//     case 3 : 
//         console.log("seu chá está sendo preparado ")
//         break
//     case 4 : 
//         console.log("seu chocolate quente está sendo preparado ")
//         break
//     default:
//         console.log("opcao invalida")
// }









//4.

// const senhaOk = "admin2024"
// const maxTent = 5;
// let tentativas = 0;
// let acertou = false

// while (tentativas < maxTent) {
//     let senhaDigitada = prompt("Digite a senha de acesso: ");
//     tentativas++; 

//     if (senhaDigitada === senhaOk) {
//         console.log("\nAcesso Autorizado!");
//         acertou = true; 
//         break; //
//     } else {
//         let restantes = maxTent - tentativas;

//         if (restantes > 0) {
//             console.log(`Senha incorreta. Tentativas restantes: ${restantes}\n`);
//         }
//     }
// }

// if (!acertou) { 
//     console.log("\nConta Bloqueada: Número máximo de tentativas excedido");
// }
// console.log(`Total de tentativas utilizadas: ${tentativas}`);







//5.

// const vendasDoDia = [];

// console.log("=== BALANÇO DIÁRIO DE VENDAS ===");


// for (let i = 1; i <= 5; i++) {
//     let valorVenda = Number(prompt(`Digite o valor da ${i}ª venda realizada: `));
    
    
//     vendasDoDia.push(valorVenda);
// }

// let faturamentoTotal = 0;


// for (let venda of vendasDoDia) {
//     faturamentoTotal = faturamentoTotal + venda; 
// }


// const mediaVendas = faturamentoTotal / vendasDoDia.length;


// console.log("\n=================================");
// console.log(`Faturamento Total do Dia: R$ ${faturamentoTotal.toFixed(2)}`);
// console.log(`Média de valor por venda: R$ ${mediaVendas.toFixed(2)}`);
// console.log("=================================");






//6.

// const funcionario = {
//     nome: "João",
//     cargo: "Desenvolvedor",
//     salario: 5000
// }
// let aumento = 0;

    
//     if (funcionario.salario < 2500) {
//         aumento= funcionario.salario * 0.15;
//     }
//     else   {
//         aumento= funcionario.salario * 0.05;
//     }

//     funcionario.salario += aumento;

//     console.log(`Nome: ${funcionario.nome}`);
//     console.log(`Cargo: ${funcionario.cargo}`);
//     console.log(`Salário com aumento: R$ ${funcionario.salario.toFixed(2)}`);   







//8.
// const verificarQualidade = (tamanho) => tamanho >= 48 && tamanho <= 52;

// const pecasAprovadas = [];

// for (let i = 1; i <= 5; i++) {
//   let tamanhoPeca = Number(prompt(`Digite o tamanho da peça número ${i}:`));

//   if (verificarQualidade(tamanhoPeca)) {
//     pecasAprovadas.push(tamanhoPeca); 
//   }
// }

// console.log("Lista de peças aprovadas:", pecasAprovadas);
// console.log("Quantidade total de peças aprovadas:", pecasAprovadas.length);








//9.
const veiculo = {
  placa: "ABC-1234",
  quilometragens: [120, 250, 180] // Distâncias dos últimos 3 dias (Total: 550km)
};

// 2. Criamos uma variável para acumular a soma das distâncias
let distanciaTotal = 0;

// 3. Percorremos o array que está dentro do objeto usando um loop 'for...of'
for (let km of veiculo.quilometragens) {
  distanciaTotal += km; // Soma cada valor à distância total
}

// 4. Verificamos se passou de 500 km para criar a propriedade 'manutencao'
if (distanciaTotal > 500) {
  veiculo.manutencao = true;
} else {
  veiculo.manutencao = false;
}

// 5. Exibimos o total de km e o objeto completo atualizado
console.log(`Total de km percorridos: ${distanciaTotal} km`);
console.log("Objeto completo:", veiculo);