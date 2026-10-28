import PromptSync from "prompt-sync";
const prompt = PromptSync();



// -------------------------------||--------------------------------------||----------------------------------------||----------------------------------

// const ola = () => "Olá!";

// const dobro = (n) => n * 2;

// const soma = (a, b) => a + b;

// const saudacao = (nome) => `Bem-vindo, ${nome}`;

// const quadrado = (n) => n * n;

// const Par = (n) => n % 2 === 0;

// const maior = (a, b) => (a > b ? a : b);

// const mediaDeDois = (a, b) => (a + b) / 2;

// const converterParaReal = (valor) => `R$ ${valor}`;

// let numero = Number(prompt("Digite um numero de 1 a 7: R:"));
// function diaDaSemana(numero) {
//   switch (numero) {
//     case 1: 
//         console.log("Segunda-feira");
//         break;
//     case 2: 
//         console.log("Terça-feira");
//         break;
//     case 3:
//         console.log("Quarta-feira");
//         break;
//     case 4: 
//         console.log("Quinta-feira");
//         break;
//     case 5: 
//         console.log("Sexta-feira");
//         break;
//     case 6: 
//         console.log("Sábado");
//         break;
//     case 7: 
//         console.log("Domingo");
//         break;
//     default: 
//         console.log("Dia inválido");
//   }
// }
// diaDaSemana(numero);

// ================================||===============================||====================================||======================================||========================

// let numero = Number(prompt("Digite um numero: R:"));

// function dobro(numero) {
//     return numero * 2;
// }
//     console.log(`O dobro de ${numero} é: ${dobro(numero)}`);















// let nome = prompt("Digite seu nome: R:");
// let curso = prompt("Digite seu curso: R:");

// function saudacao(nome, curso) {
//     return `Olá ${nome}, bem-vindo ao curso de ${curso}!`;
// }
// console.log(saudacao(nome, curso));





















// let base = Number(prompt("Digite a base do retângulo: R:"));
// let altura = Number(prompt("Digite a altura do retângulo: R:"));
// const areaRetangulo = (base, altura) => base * altura;  
//     console.log(`A área do retângulo é: ${areaRetangulo(base, altura)}`);























// const soma = (a, b) => a + b; // BUG: pense na diferença entre imprimir e retornar
// let resultado = soma(2, 3);
// console.log("Resultado:", resultado); // Esperado: Resultado: 5

















// function nomeDoDia(dia) {
// let nome;
// switch (dia) {
// case 1:
// nome = "Domingo";
// break;
// case 2:
// nome = "Segunda";
// break;
// case 3:
// nome = "Terça";
// break;
// default:
// nome = "Dia inválido";
// }
// return nome;
// }
// console.log(nomeDoDia(2)); // Esperado: Segunda


















// function quadrado(n) {
// return n * n;
// }
// console.log("Início");
// console.log(quadrado(3) + quadrado(4));
// let x = quadrado(5);
// console.log("x vale", x);
// console.log("Fim");


// const somar = (a, b) => a + b;

// const subtrair = (a, b) => a - b;

// const multiplicar = (a, b) => a * b;

// const dividir = (a, b) => {
//   if (b === 0) {
//     return "Erro: divisão por zero";
//   }
//   return a / b;
// };

// console.log(somar(2, 3));        
// console.log(subtrair(10, 4));    
// console.log(multiplicar(3, 3));  
// console.log(dividir(10, 2));     
// console.log(dividir(10, 0)); 





















// const somar = (a, b) => a + b;
// const subtrair = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => {
//   if (b === 0) {
//     return "Erro: divisão por zero";
//   }
//   return a / b;
// };

// function calculadora(operacao, num1, num2) {
//   switch (operacao) {
//     case "+":
//       return somar(num1, num2); 
//     case "-":
//       return subtrair(num1, num2); 
//     case "*":
//       return multiplicar(num1, num2); 
//     case "/":
//       return dividir(num1, num2); 
//     default:
//       return "Operação inválida"; 
//   }
// }

// console.log("=== CALCULADORA COM SWITCH ===");
// const operacao = prompt("Digite a operação (+, -, *, /): ");
// const num1 = Number(prompt("Digite o primeiro número: "));
// const num2 = Number(prompt("Digite o segundo número: "));

// const resultado = calculadora(operacao, num1, num2);

// if (typeof resultado === "number") {
//   console.log(`Resultado: ${resultado.toFixed(2)}`);
// } else {
//   console.log(`Resultado: ${resultado}`);
// }














// let cargo = prompt("qual seu cargo? R:");
// let salario = Number(prompt("qual seu salario? R:"));
// let aumento

// switch (cargo){
//     case "estagiario":
//         aumento = salario * 0.10
//         console.log (`seu bonus sera de R$:${aumento}`)
//         break
//     case "junior":
//         aumento = salario * 0.15
//         console.log (`seu bonus sera de R$:${aumento}`)
//         break
//     case "pleno":
//         aumento = salario * 0.20
//         console.log (`seu bonus sera de R$:${aumento}`)
//         break
//     default:
//         console.log ("cargo nao identificado!")
//         break
//}




















// const validarAcesso = (nome, codigoCracha) => {

//   return nome.length > 5 && codigoCracha > 1000;
// };

// console.log("=== VALIDADOR DE ACESSO RAPIDO ===");
// const nome = prompt("Digite o nome do usuário: ");
// const chacha = Number(prompt("Digite o código do crachá: "));


// const acessoLiberado = validarAcesso(nome, chacha);

// if (acessoLiberado) {
//   console.log("Acesso Concedido");
// } else {
//   console.log("Acesso Negado");
// }



















// const nomeCliente = prompt("Digite o nome do cliente: ");
// const pedido = {
//   cliente: nomeCliente
// };

// console.log("\n--- MENU DE ELETRÔNICOS ---");
// console.log("1 - Fone (R$ 150.00)");
// console.log("2 - Teclado (R$ 250.00)");
// console.log("3 - Mouse (R$ 90.00)");
// const escolha = Number(prompt("Digite o número do produto escolhido: "));

// switch (escolha) {
//   case 1:
//     pedido.produto = "Fone";
//     pedido.preco = 150.00;
//     break;
//   case 2:
//     pedido.produto = "Teclado";
//     pedido.preco = 250.00;
//     break;
//   case 3:
//     pedido.produto = "Mouse";
//     pedido.preco = 90.00;
//     break;
//   default:
//     pedido.produto = "Desconhecido";
//     pedido.preco = 0;
// }

// console.log("\n=== RESUMO DO PEDIDO FINAL ===");
// console.log(pedido);

















// const avaliarTemperaturas = (listaTemperaturas) => {
//   const soma = listaTemperaturas[0] + listaTemperaturas[1] + listaTemperaturas[2];
//   const media = soma / 3;
//     console.log(`\nMédia das Temperaturas: ${media.toFixed(2)}°C`);

//   if (media > 30) {
//     return "Alerta de Aquecimento";
//   } else {
//     return "Clima Estável";
//   }
// };

// console.log("=== MONITORAMENTO CLIMÁTICO ===");
// const temp1 = Number(prompt("Digite a primeira temperatura: "));
// const temp2 = Number(prompt("Digite a segunda temperatura: "));
// const temp3 = Number(prompt("Digite a terceira temperatura: "));



// const historicoTemperaturas = [temp1, temp2, temp3];

// const resultadoFinal = avaliarTemperaturas(historicoTemperaturas);

// console.log(`\nStatus do Laboratório: ${resultadoFinal}`);











// function traduzirStatus(codigo) {
//   switch (codigo) {
//     case "P":
//       return "Pendente de Envio";
//     case "E":
//       return "Em Rota de Entrega";
//     case "C":
//       return "Cancelado";
//     default:
//       return "Status Inválido";
//   }
// }

// console.log("=== SISTEMA LOGÍSTICO DE ENCOMENDAS ===");

// const id = prompt("Digite o ID da encomenda: ");
// const encomenda = {
//   id: id
// };

// const status = prompt("Digite o código do status (P, E, C): ").toUpperCase();

// encomenda.statusTexto = traduzirStatus(status);

// console.log("\n=== REGISTRO FINAL DA ENCOMENDA ===");
// console.log(encomenda);











// const classificarJogador = (listaPontuacoes) => {

//   const somaTotal = listaPontuacoes[0] + listaPontuacoes[1] + listaPontuacoes[2];
  
//   const ultimaPartida = listaPontuacoes[2];

//   if (somaTotal > 200 || ultimaPartida > 90) {
//     return "Veterano";
//   } else {
//     return "Iniciante";
//   }
// };


// console.log("=== SISTEMA DE PONTUAÇÃO DE GAMES ===");
// const p1 = Number(prompt("Digite a pontuação da 1ª partida: "));
// const p2 = Number(prompt("Digite a pontuação da 2ª partida: "));
// const p3 = Number(prompt("Digite a pontuação da 3ª partida: "));

// const historicoPartidas = [p1, p2, p3];

// const somaParaTeste = historicoPartidas[0] + historicoPartidas[1] + historicoPartidas[2];
// console.log(`\nSoma Total: ${somaParaTeste} pontos`);
// console.log(`Última partida: ${historicoPartidas[2]} pontos`);

// const classificacaoFinal = classificarJogador(historicoPartidas);

// console.log(`Classificação Final: ${classificacaoFinal}`);








// console.log("=== CADASTRO DO SERVIDOR ===");
// const nomeServidor = prompt("Digite o nome do servidor: ");
// const espacoTotal = Math.floor(Number(prompt("Digite o espaço total (em GB): ")));
// const espacoOcupado = Math.floor(Number(prompt("Digite o espaço já ocupado (em GB): ")));

// const servidor = {
//   nome: nomeServidor,
//   totalGB: espacoTotal,
//   ocupadoGB: espacoOcupado
// };

// const gerenciarUpload = (objServidor, tamanhoArquivo) => {
//   const espacoNecessario = objServidor.ocupadoGB + tamanhoArquivo;

//   if (espacoNecessario <= objServidor.totalGB) {
//     objServidor.ocupadoGB = espacoNecessario;
//     return true; 
//   } else {
//     return false; 
//   }
// };

// console.log("\n=== TENTATIVA DE UPLOAD ===");
// const tamanhoNovoArquivo = Math.floor(Number(prompt("Digite o tamanho do novo arquivo (em GB): ")));

// const uploadAceito = gerenciarUpload(servidor, tamanhoNovoArquivo);


// if (uploadAceito) {
//   console.log("\n Upload aceito com sucesso!");
// } else {
//   console.log("\n Upload rejeitado! Espaço insuficiente no servidor.");
// }

// console.log("\n=== STATUS FINAL DO SERVIDOR ===");
// console.log(servidor);

















// function triagemChamado(nivel) {
//   switch (nivel) {
//     case 1:
//       return "Atendimento Básico";
//     case 2:
//       return "Equipe Especializada";
//     case 3:
//       return "Gestão de Crise";
//     default:
//       return "Setor Desconhecido"; 
//   }
// }


// const filaDeAtendimento = [];

// console.log("=== TRIAGEM DE CHAMADOS DE TI ===");
// const criticidade = Number(prompt("Digite a criticidade do problema (1, 2 ou 3): "));

// const setorResponsavel = triagemChamado(criticidade);

// filaDeAtendimento.push(setorResponsavel);

// console.log("\n=== FILA DE ATENDIMENTO ATUALIZADA ===");
// console.log(filaDeAtendimento);

















const nomeOperador = prompt("Digite o nome do operador do caixa: ");

const caixa = {
  operador: nomeOperador,
  saldo: 100.00, 
  historicoTransacoes: [] 
};

const registrarVenda = (saldoAtual, valor) => {
  return saldoAtual + valor;
};

const registrarDespesa = (saldoAtual, valor) => {
  return saldoAtual - valor;
};

let continuar = true;

while (continuar) {
  console.log(`\n--- PAINEL DE CONTROLE (Saldo Atual: R$ ${caixa.saldo.toFixed(2)}) ---`);
  console.log("V - Registrar Venda");
  console.log("D - Registrar Despesa");
  console.log("S - Sair e Fechar Caixa (Auditoria)");
  

  const escolha = prompt("Escolha a operação desejada: ").toUpperCase();

  switch (escolha) {
    case "V":
      console.log("\n--- REGISTRAR VENDA ---");
      const valorVenda = Number(prompt("Digite o valor da venda: "));
      
      caixa.saldo = registrarVenda(caixa.saldo, valorVenda);
      
      caixa.historicoTransacoes.push("Entrada");
      console.log(" Venda registrada com sucesso!");
      break;

    case "D":
      console.log("\n--- REGISTRAR DESPESA ---");
      const valorDespesa = Number(prompt("Digite o valor da despesa: "));
      
      caixa.saldo = registrarDespesa(caixa.saldo, valorDespesa);
      
      caixa.historicoTransacoes.push("Saída");
      console.log(" Despesa registrada com sucesso!");
      break;

    case "S":
    
      console.log("\n Fechando o painel de controle...");
      continuar = false;
      break;

    default:
      console.log("\n Opção inválida! Digite V, D ou S.");
  }
}

console.log("\n=====================================");
console.log("   AUDITORIA FINAL DO CAIXA DE LOJA   ");
console.log("=====================================");
console.log(caixa);
console.log("=====================================");