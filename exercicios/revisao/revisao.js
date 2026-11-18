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
// const veiculo = {
//   placa: "ABC-1234",
//   quilometragens: [] 
// };

// for (let dia = 1; dia <= 3; dia++) {
//   let km = Number(prompt(`Digite os km do dia ${dia}: `));
//   veiculo.quilometragens.push(km);
// }

// let distanciaTotal = 0;

// for (let km of veiculo.quilometragens) {
//   distanciaTotal += km;
// }

// veiculo.quilometragem = distanciaTotal;

// if (distanciaTotal > 500) {
//   veiculo.manutencao = true;
// } else {
//   veiculo.manutencao = false;
// }

// console.log("Total de km:", veiculo.quilometragem);
// console.log("Veículo:", veiculo);







//10.
// const ContaEmpresarial = {
//   titular: "Empresa Exemplo",
//   saldo: 0,
//   historico: []
// };

// let opcao = 0;

// do {
//   console.log("\n--- TERMINAL DO GERENTE ---");
//   console.log("1. Depositar");
//   console.log("2. Sacar");
//   console.log("3. Extrato");
//   console.log("4. Sair");

//   opcao = Number(prompt("Escolha uma opção: "));

//   switch (opcao) {
//     case 1:
//       let deposito = Number(prompt("Valor do depósito: "));
//       ContaEmpresarial.saldo += deposito;
//       ContaEmpresarial.historico.push({ tipo: "Depósito", valor: deposito });
//       console.log("Depósito realizado! Saldo atual: R$", ContaEmpresarial.saldo);
//       break;

//     case 2:
//       let saque = Number(prompt("Valor do saque: "));
//       if (saque <= ContaEmpresarial.saldo) {
//         ContaEmpresarial.saldo -= saque;
//         ContaEmpresarial.historico.push({ tipo: "Saque", valor: saque });
//         console.log("Saque realizado! Saldo atual: R$", ContaEmpresarial.saldo);
//       } else {
//         console.log("Saldo Insuficiente");
//       }
//       break;

//     case 3:
//       console.log("\n--- EXTRATO ---");
//       for (let item of ContaEmpresarial.historico) {
//         console.log(item.tipo + ": R$ " + item.valor);
//       }
//       console.log("Saldo atual: R$", ContaEmpresarial.saldo);
//       break;

//     case 4:
//       console.log("Encerrando o programa...");
//       break;

//     default:
//       console.log("Opção inválida! Tente novamente.");
//       break;
//   }

// } while (opcao !== 4);






//desafios
//1.
// const biblioteca = [
//   { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true },
//   { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", disponivel: true },
//   { titulo: "1984", autor: "George Orwell", disponivel: true }
// ];

// function emprestarLivro(nomeDoLivro) {
//   for (let livro of biblioteca) {
//     if (livro.titulo === nomeDoLivro) {
//       if (livro.disponivel === true) {
//         livro.disponivel = false;
//         return "Empréstimo realizado com sucesso!";
//       } else {
//         return "Erro: Este livro já está emprestado.";
//       }
//     }
//   }
//   return "Erro: Livro não encontrado.";
// }

// let opcao = 0;

// do {
//   console.log("\n--- BIBLIOTECA VIRTUAL ---");
//   console.log("1 - Emprestar livro");
//   console.log("2 - Ver todos os livros");
//   console.log("3 - Sair");

//   opcao = Number(prompt("Escolha uma opção: "));

//   switch (opcao) {
//     case 1:
//       console.log("\nQual livro você deseja?");
//       console.log("1 - Dom Casmurro");
//       console.log("2 - O Pequeno Príncipe");
//       console.log("3 - 1984");

//       let escolha = Number(prompt("Digite o número do livro: "));
//       let nomeEscolhido = "";

//       if (escolha === 1) {
//         nomeEscolhido = "Dom Casmurro";
//       } else if (escolha === 2) {
//         nomeEscolhido = "O Pequeno Príncipe";
//       } else if (escolha === 3) {
//         nomeEscolhido = "1984";
//       }

//       let resultado = emprestarLivro(nomeEscolhido);
//       console.log(resultado);
//       break;

//     case 2:
//       console.log("\n--- LISTA DE LIVROS ---");
//       for (let livro of biblioteca) {
//         let status = livro.disponivel ? "Disponível" : "Emprestado";
//         console.log(livro.titulo + " - " + status);
//       }
//       break;

//     case 3:
//       console.log("Saindo da biblioteca...");
//       break;

//     default:
//       console.log("Opção inválida! Escolha 1, 2 ou 3.");
//       break;
//   }

// } while (opcao !== 3);






//2.
// const frota = [
//   { placa: "ABC-1111", faturamentoDia: 0, emServico: false },
//   { placa: "XYZ-2222", faturamentoDia: 0, emServico: false }
// ];

// function registrarCorrida(placa, valor) {
//   for (let taxi of frota) {
//     if (taxi.placa === placa) {
//       taxi.emServico = true; 
//       taxi.faturamentoDia += valor; 
//       taxi.emServico = false; 
//       console.log("Corrida registrada para " + taxi.placa);
//       return; 
//     }
//   }
//   console.log("Táxi não encontrado.");
// }

// let opcao = 0;

// do {
//   console.log("\n--- FROTA DE TÁXIS ---");
//   console.log("1 - Registrar Corrida");
//   console.log("2 - Encerrar Expediente");

//   opcao = Number(prompt("Escolha uma opção: "));

//   switch (opcao) {
//     case 1:
//       console.log("\nQual táxi fez a corrida?");
//       console.log("1 - " + frota[0].placa);
//       console.log("2 - " + frota[1].placa);

//       let escolhaTaxi = Number(prompt("Digite o número do táxi: "));
//       let placaEscolhida = "";

//       if (escolhaTaxi === 1) {
//         placaEscolhida = frota[0].placa;
//       } else if (escolhaTaxi === 2) {
//         placaEscolhida = frota[1].placa;
//       }

//       if (placaEscolhida !== "") {
//         let valorCorrida = Number(prompt("Digite o valor da corrida (R$): "));
//         registrarCorrida(placaEscolhida, valorCorrida);
//       } else {
//         console.log("Táxi inválido! Tente novamente.");
//       }
//       break;

//     case 2:
//       console.log("\nEncerrando expediente...");
//       break;

//     default:
//       console.log("Opção inválida! Digite 1 ou 2.");
//       break;
//   }

// } while (opcao !== 2);

// console.log("\n--- FATURAMENTO FINAL DO DIA ---");
// for (let taxi of frota) {
//   console.log("Placa: " + taxi.placa + " | Total: R$ " + taxi.faturamentoDia);
// }





//3.
// const Carteira = {
//   titular: "Marcio",
//   saldoGeral: 0,
//   historicoDeTransacoes: []
// };

// function adicionarTransacao(tipo, categoria, valor) {
//   const novaTransacao = {
//     tipoDaMovimentacao: tipo,
//     categoria: categoria,
//     montante: valor
//   };

//   Carteira.historicoDeTransacoes.push(novaTransacao);

//   if (tipo === "Receita") {
//     Carteira.saldoGeral += valor;
//   } else if (tipo === "Despesa") {
//     Carteira.saldoGeral -= valor;
//   }
// }

// let opcao = 0;

// do {
//   console.log("\n--- FINANÇAS PESSOAIS ---");
//   console.log("1 - Lançar transação");
//   console.log("2 - Ver extrato completo");
//   console.log("3 - Ver resumo por categoria");
//   console.log("4 - Sair");

//   opcao = Number(prompt("Escolha uma opção: "));

//   switch (opcao) {
//     case 1:
//       console.log("\nTipo: 1 - Receita | 2 - Despesa");
//       let opTipo = Number(prompt("Escolha o tipo: "));
//       let tipoEscolhido = opTipo === 1 ? "Receita" : "Despesa";

//       console.log("\nCategoria: 1 - Alimentação | 2 - Transporte | 3 - Lazer | 4 - Salário");
//       let opCat = Number(prompt("Escolha a categoria: "));
//       let categoriaEscolhida = "Outros";

//       if (opCat === 1) categoriaEscolhida = "Alimentação";
//       else if (opCat === 2) categoriaEscolhida = "Transporte";
//       else if (opCat === 3) categoriaEscolhida = "Lazer";
//       else if (opCat === 4) categoriaEscolhida = "Salário";

//       let valorDigitado = Number(prompt("Digite o valor (R$): "));

//       adicionarTransacao(tipoEscolhido, categoriaEscolhida, valorDigitado);
//       console.log("Transação registrada com sucesso!");
//       break;

//     case 2:
//       console.log("\n--- EXTRATO COMPLETO ---");
//       for (let item of Carteira.historicoDeTransacoes) {
//         console.log(item.tipoDaMovimentacao + " | " + item.categoria + " | R$ " + item.montante.toFixed(2));
//       }
//       break;

//     case 3:
//       let totalAlimentacao = 0;
//       let totalTransporte = 0;
//       let totalLazer = 0;
//       let totalSalario = 0;

//       for (let item of Carteira.historicoDeTransacoes) {
//         if (item.categoria === "Alimentação") totalAlimentacao += item.montante;
//         else if (item.categoria === "Transporte") totalTransporte += item.montante;
//         else if (item.categoria === "Lazer") totalLazer += item.montante;
//         else if (item.categoria === "Salário") totalSalario += item.montante;
//       }

//       console.log("\n--- RESUMO POR CATEGORIA ---");
//       console.log("Alimentação: R$ " + totalAlimentacao.toFixed(2));
//       console.log("Transporte: R$ " + totalTransporte.toFixed(2));
//       console.log("Lazer: R$ " + totalLazer.toFixed(2));
//       console.log("Salário: R$ " + totalSalario.toFixed(2));
//       break;

//     case 4:
//       console.log("\nEncerrando o aplicativo...");
//       break;

//     default:
//       console.log("Opção inválida! Escolha de 1 a 4.");
//       break;
//   }

// } while (opcao !== 4);

// console.log("Saldo Geral Final: R$ " + Carteira.saldoGeral.toFixed(2));







//4.
// const alunos = [
//   { nome: "Ana", notas: [] },
//   { nome: "Bruno", notas: [] },
//   { nome: "Carla", notas: [] }
// ];

// function registrarNota() {
//   const nomeBusca = prompt("Digite o nome do aluno (Ana, Bruno ou Carla): ");
//   let alunoEncontrado = null;

//   for (let i = 0; i < alunos.length; i++) {
//     if (alunos[i].nome.toLowerCase() === nomeBusca.toLowerCase().trim()) {
//       alunoEncontrado = alunos[i];
//       break;
//     }
//   }

//   if (alunoEncontrado !== null) {
//     const entradaNota = prompt(`Digite a nota para ${alunoEncontrado.nome}: `);
//     const notaDigitada = Number(entradaNota.replace(",", "."));

//     if (!isNaN(notaDigitada) && notaDigitada >= 0 && notaDigitada <= 10) {
//       alunoEncontrado.notas.push(notaDigitada);
//       console.log(`Nota ${notaDigitada} registrada para ${alunoEncontrado.nome}!`);
//     } else {
//       console.log("Nota inválida! Digite um número entre 0 e 10.");
//     }
//   } else {
//     console.log("Aluno não encontrado no sistema.");
//   }
// }


// function fecharSemestre() {
//   let boletim = "\n=== BOLETIM FINAL DA TURMA ===\n\n";

//   for (let i = 0; i < alunos.length; i++) {
//     const alunoAtual = alunos[i];
//     let somaNotas = 0;

//     for (let j = 0; j < alunoAtual.notas.length; j++) {
//       somaNotas += alunoAtual.notas[j];
//     }

//     let media = 0;
//     if (alunoAtual.notas.length > 0) {
//       media = somaNotas / alunoAtual.notas.length;
//     }

//     if (media >= 7) {
//       alunoAtual.status = "Aprovado";
//     } else if (media >= 5) {
//       alunoAtual.status = "Exame";
//     } else {
//       alunoAtual.status = "Reprovado";
//     }

//     boletim += `Aluno: ${alunoAtual.nome}\n`;
//     boletim += `Notas: ${alunoAtual.notas.length > 0 ? alunoAtual.notas.join(", ") : "Nenhuma nota"}\n`;
//     boletim += `Média: ${media.toFixed(1)}\n`;
//     boletim += `Status: ${alunoAtual.status}\n`;
//     boletim += "------------------------------\n";
//   }

//   console.log(boletim);
// }

// let opcao = "";

// while (opcao !== "2") {
//   console.log("\nSISTEMA ESCOLAR");
//   console.log("1 - Registrar Nota");
//   console.log("2 - Fechar o Semestre");
//   opcao = prompt("Escolha uma opção: ");

//   if (opcao === "1") {
//     registrarNota();
//   } else if (opcao === "2") {
//     fecharSemestre();
//   } else {
//     console.log("Opção inválida! Escolha 1 ou 2.");
//   }
// }







//5.
// const personagem = {
//   nome: "Aragorn",
//   capacidadePesoMaximo: 50,
//   listaInventario: []
// };

// function coletarLoot(nomeItem, pesoItem) {
//   let pesoAtualOcupado = 0;

//   for (let i = 0; i < personagem.listaInventario.length; i++) {
//     pesoAtualOcupado += personagem.listaInventario[i].peso;
//   }

//   if (pesoAtualOcupado + pesoItem <= personagem.capacidadePesoMaximo) {
//     personagem.listaInventario.push({
//       nome: nomeItem,
//       peso: pesoItem
//     });
//     return "Item guardado com segurança";
//   } else {
//     return "Personagem sobrecarregado! O item ficou no chão";
//   }
// }

// function mostrarInventario() {
//   let pesoTotal = 0;
//   console.log(`\n=== MOCHILA DE ${personagem.nome.toUpperCase()} ===`);

//   if (personagem.listaInventario.length === 0) {
//     console.log("A mochila está vazia.");
//   } else {
//     for (let i = 0; i < personagem.listaInventario.length; i++) {
//       const item = personagem.listaInventario[i];
//       console.log(`- ${item.nome} (${item.peso} kg)`);
//       pesoTotal += item.peso;
//     }
//   }

//   console.log(`Peso ocupado: ${pesoTotal.toFixed(1)} kg / ${personagem.capacidadePesoMaximo} kg`);
//   console.log("===================================");
// }

// let opcao = "";

// while (opcao !== "3") {
//   console.log("\nAVENTURA DE SOBREVIVÊNCIA");
//   console.log("1 - Encontrar e guardar novo item");
//   console.log("2 - Ver mochila");
//   console.log("3 - Concluir a aventura (Sair)");
//   opcao = prompt("Escolha sua ação: ");

//   if (opcao === "1") {
//     const nomeEncontrado = prompt("Qual item você encontrou?: ").trim();
//     const entradaPeso = prompt(`Qual o peso de "${nomeEncontrado}" (em kg)?: `);
//     const pesoEncontrado = Number(entradaPeso.replace(",", "."));

//     if (nomeEncontrado !== "" && !isNaN(pesoEncontrado) && pesoEncontrado > 0) {
//       const resultado = coletarLoot(nomeEncontrado, pesoEncontrado);
//       console.log(`>> ${resultado}`);
//     } else {
//       console.log("Dados inválidos! Digite um nome válido e um peso numérico maior que 0.");
//     }
//   } else if (opcao === "2") {
//     mostrarInventario();
//   } else if (opcao === "3") {
//     console.log("\nVocê montou acampamento e encerrou a aventura!");
//     mostrarInventario();
//   } else {
//     console.log("Opção inválida! Escolha 1, 2 ou 3.");
//   }
// }







//6.
// const fileiraPremium = [
//   { numeroAssento: 1, ocupado: false, nomeCliente: null },
//   { numeroAssento: 2, ocupado: false, nomeCliente: null },
//   { numeroAssento: 3, ocupado: false, nomeCliente: null },
//   { numeroAssento: 4, ocupado: false, nomeCliente: null },
//   { numeroAssento: 5, ocupado: false, nomeCliente: null }
// ];

// function exibirPainel() {
//   console.log("\n=== PAINEL DA FILEIRA PREMIUM ===");
//   for (let i = 0; i < fileiraPremium.length; i++) {
//     const poltrona = fileiraPremium[i];
//     if (poltrona.ocupado === false) {
//       console.log(`Poltrona ${poltrona.numeroAssento}: [ LIVRE ]`);
//     } else {
//       console.log(`Poltrona ${poltrona.numeroAssento}: [ OCUPADA - ${poltrona.nomeCliente} ]`);
//     }
//   }
//   console.log("=================================");
// }

// function reservarAssento(numeroSelecionado, nomeComprador) {
//   let poltronaEncontrada = false;

//   for (let i = 0; i < fileiraPremium.length; i++) {
//     if (fileiraPremium[i].numeroAssento === numeroSelecionado) {
//       poltronaEncontrada = true;

//       if (fileiraPremium[i].ocupado === false) {
//         fileiraPremium[i].ocupado = true;
//         fileiraPremium[i].nomeCliente = nomeComprador;
//         console.log("\n>> Ingresso emitido!");
//       } else {
//         console.log("\n>> A transação não pôde ser completada pois o lugar está indisponível.");
//       }
//       break;
//     }
//   }

//   if (poltronaEncontrada === false) {
//     console.log("\n>> Poltrona inexistente! Escolha um número entre 1 e 5.");
//   }
// }

// let opcao = "";

// while (opcao !== "3") {
//   exibirPainel();
//   console.log("\nBILHETERIA - FILEIRA PREMIUM");
//   console.log("1 - Reservar poltrona");
//   console.log("2 - Atualizar painel de poltronas");
//   console.log("3 - Encerrar expediente");
//   opcao = prompt("Escolha uma opção: ").trim();

//   if (opcao === "1") {
//     const numeroDigitado = Number(prompt("Digite o número da poltrona desejada (1 a 5): "));
//     const clienteDigitado = prompt("Digite o nome do comprador: ").trim();

//     if (!isNaN(numeroDigitado) && clienteDigitado !== "") {
//       reservarAssento(numeroDigitado, clienteDigitado);
//     } else {
//       console.log("\n>> Dados inválidos! Informe um número de poltrona e um nome válido.");
//     }
//   } else if (opcao === "2") {
//     console.log("\nAtualizando status da sala...");
//   } else if (opcao === "3") {
//     console.log("\nBilheteria encerrada. Bom filme a todos!");
//   } else {
//     console.log("\n>> Opção inválida! Escolha 1, 2 ou 3.");
//   }
// }








//7.
// const estoqueAtacado = [
//   { nomeProduto: "Queijo Mussarela 1kg", categoria: "Laticinios", precoCusto: 40.00 },
//   { nomeProduto: "Caixa de Leite Integral", categoria: "Laticinios", precoCusto: 5.00 },
//   { nomeProduto: "pacote de Arroz 5kg", categoria: "Diversos", precoCusto: 18.00 },
//   { nomeProduto: "Caixa de Sabão em Pó", categoria: "Diversos", precoCusto: 12.00 }
// ];

// const acionarLiquidacaoNoturna = () => {
//   for (let i = 0; i < estoqueAtacado.length; i++) {
//     const produtoAtual = estoqueAtacado[i];

//     if (produtoAtual.categoria === "Laticinios") {
//       produtoAtual.novoPrecoSugerido = produtoAtual.precoCusto * 0.70;
//     } else if (produtoAtual.categoria === "Diversos") {
//       produtoAtual.novoPrecoSugerido = produtoAtual.precoCusto * 0.95;
//     }
//   }

//   console.log("=== RELATÓRIO DA LIQUIDAÇÃO NOTURNA ===\n");
//   for (let i = 0; i < estoqueAtacado.length; i++) {
//     const item = estoqueAtacado[i];
//     console.log(`Produto: ${item.nomeProduto} (${item.categoria})`);
//     console.log(`Preço Original: R$ ${item.precoCusto.toFixed(2)}`);
//     console.log(`Novo Preço Sugerido: R$ ${item.novoPrecoSugerido.toFixed(2)}`);
//     console.log("---------------------------------------");
//   }
// };

// acionarLiquidacaoNoturna();








//8.
// const candidatos = [
//   { nome: "Fulano", quantidadeVotos: 0 },
//   { nome: "Ciclano", quantidadeVotos: 0 },
//   { nome: "Beltrano", quantidadeVotos: 0 }
// ];

// let entrada = "";

// while (entrada.toLowerCase().trim() !== "encerrar") {
//   console.log("\n=== URNA DIGITAL SEGURA ===");

//   for (let i = 0; i < candidatos.length; i++) {
//     console.log(`${i + 1} - ${candidatos[i].nome}`);
//   }
//   console.log('Digite "encerrar" para finalizar a votação.');

//   entrada = prompt("Seu voto: ");

//   if (entrada.toLowerCase().trim() === "encerrar") {
//     console.log("\nVotação encerrada! Iniciando apuração...");
//     break;
//   }

//   const numeroVoto = Number(entrada);
//   if (!isNaN(numeroVoto) && Number.isInteger(numeroVoto) && numeroVoto >= 1 && numeroVoto <= candidatos.length) {
//     const indiceCandidato = numeroVoto - 1;
//     candidatos[indiceCandidato].quantidadeVotos++;
//     console.log(">> Voto confirmado com sucesso!");
//   } else {
//     console.log(">> Voto nulo");
//   }
// }

// function apurarVencedor(listaCandidatos) {
//   let vencedor = listaCandidatos[0];

//   for (let i = 1; i < listaCandidatos.length; i++) {
//     if (listaCandidatos[i].quantidadeVotos > vencedor.quantidadeVotos) {
//       vencedor = listaCandidatos[i];
//     }
//   }

//   return `Vencedor(a): ${vencedor.nome} com ${vencedor.quantidadeVotos} voto(s)!`;
// }

// console.log("\n=== BOLETIM DE URNA - RESULTADO FINAL ===");
// for (let i = 0; i < candidatos.length; i++) {
//   console.log(`${candidatos[i].nome}: ${candidatos[i].quantidadeVotos} voto(s)`);
// }

// const resultadoFinal = apurarVencedor(candidatos);
// console.log("-----------------------------------------");
// console.log(resultadoFinal);









//9.
// const agendaClinica = [
//   { nomePaciente: "Mariana Silva", horaMarcada: "08:30", especialidade: "Ortopedia" },
//   { nomePaciente: "Carlos Eduardo", horaMarcada: "09:15", especialidade: "Clínica Geral" },
//   { nomePaciente: "Fernanda Lima", horaMarcada: "10:00", especialidade: "Ortopedia" },
//   { nomePaciente: "Roberto Alves", horaMarcada: "11:30", especialidade: "Oftalmologia" },
//   { nomePaciente: "Juliana Costa", horaMarcada: "14:00", especialidade: "Clínica Geral" }
// ];

// function buscarPorEspecialidade(textoPesquisado) {
//   const resultados = [];

//   for (let i = 0; i < agendaClinica.length; i++) {
//     const consultaAtual = agendaClinica[i];

//     if (consultaAtual.especialidade === textoPesquisado) {
//       resultados.push(consultaAtual);
//     }
//   }

//   return resultados;
// }

// let opcao = "";

// while (opcao !== "2") {
//   console.log("\n=== PAINEL DE AGENDAMENTOS DA CLÍNICA ===");
//   console.log("1 - Filtrar consultas por especialidade");
//   console.log("2 - Sair do sistema");
//   opcao = prompt("Escolha uma opção: ").trim();

//   if (opcao === "1") {
//     console.log("\nQual especialidade deseja filtrar?");
//     console.log("1 - Ortopedia");
//     console.log("2 - Clínica Geral");
//     console.log("3 - Oftalmologia");
//     const escolhaEspecialidade = prompt("Digite o número da especialidade: ").trim();

//     let especialidadeSelecionada = "";

//     if (escolhaEspecialidade === "1") {
//       especialidadeSelecionada = "Ortopedia";
//     } else if (escolhaEspecialidade === "2") {
//       especialidadeSelecionada = "Clínica Geral";
//     } else if (escolhaEspecialidade === "3") {
//       especialidadeSelecionada = "Oftalmologia";
//     }

//     if (especialidadeSelecionada !== "") {
//       const consultasEncontradas = buscarPorEspecialidade(especialidadeSelecionada);

//       console.log(`\n--- RESULTADOS PARA: ${especialidadeSelecionada.toUpperCase()} ---`);

//       if (consultasEncontradas.length === 0) {
//         console.log("Nenhuma consulta encontrada para essa especialidade.");
//       } else {
//         for (let i = 0; i < consultasEncontradas.length; i++) {
//           const item = consultasEncontradas[i];
//           console.log(`Horário: ${item.horaMarcada} | Paciente: ${item.nomePaciente}`);
//         }
//       }
//       console.log("---------------------------------------------");
//     } else {
//       console.log("\n>> Especialidade inválida! Escolha 1, 2 ou 3.");
//     }
//   } else if (opcao === "2") {
//     console.log("\nEncerrando o painel de agendamentos. Bom trabalho!");
//   } else {
//     console.log("\n>> Opção inválida! Escolha 1 ou 2.");
//   }
// }







//10.
// const CaixaEletronico = {
//   gavetas: [
//     { valor: 100, quantidade: 10 },
//     { valor: 50, quantidade: 10 },
//     { valor: 20, quantidade: 15 }
//   ]
// };

// const Cliente = {
//   nome: "Carlos Mendes",
//   saldoEmConta: 800.00
// };

// function realizarSaque(valorSolicitado) {
//   if (isNaN(valorSolicitado) || valorSolicitado <= 0) {
//     console.log("\n>> Valor inválido! Digite um valor maior que R$ 0,00.");
//     return;
//   }

//   if (valorSolicitado > Cliente.saldoEmConta) {
//     console.log("\n>> Operação recusada: Saldo insuficiente em conta.");
//     return;
//   }

//   let valorRestante = valorSolicitado;
//   const notasSeparadas = []; 

//   for (let i = 0; i < CaixaEletronico.gavetas.length; i++) {
//     const gavetaAtual = CaixaEletronico.gavetas[i];

//     const notasNecessarias = Math.floor(valorRestante / gavetaAtual.valor);

//     const notasParaUsar = Math.min(notasNecessarias, gavetaAtual.quantidade);

//     notasSeparadas.push(notasParaUsar);
//     valorRestante -= notasParaUsar * gavetaAtual.valor;
//   }

//   if (valorRestante === 0) {
//     Cliente.saldoEmConta -= valorSolicitado;

//     console.log(`\n>> Saque de R$ ${valorSolicitado.toFixed(2)} aprovado! Retire suas cédulas:`);
//     for (let i = 0; i < CaixaEletronico.gavetas.length; i++) {
//       if (notasSeparadas[i] > 0) {
//         CaixaEletronico.gavetas[i].quantidade -= notasSeparadas[i];
//         console.log(`   - ${notasSeparadas[i]} nota(s) de R$ ${CaixaEletronico.gavetas[i].valor},00`);
//       }
//     }
//   } else {
//     console.log("\n>> Operação recusada: Não há combinação de cédulas disponível para este valor.");
//   }
// }

// let opcao = "";

// while (opcao !== "2") {
//   console.log("\n=========================================");
//   console.log(`ATM DIGITAL - Bem-vindo(a), ${Cliente.nome}`);
//   console.log(`Saldo disponível: R$ ${Cliente.saldoEmConta.toFixed(2)}`);
//   console.log("Notas disponíveis no terminal: R$ 100 | R$ 50 | R$ 20");
//   console.log("=========================================");
//   console.log("1 - Solicitar Saque");
//   console.log("2 - Sair e gerar relatório gerencial");
//   opcao = prompt("Escolha uma opção: ").trim();

//   if (opcao === "1") {
//     const entradaValor = prompt("Digite o valor desejado para saque: R$ ");
//     const valorSaque = Number(entradaValor.replace(",", "."));
//     realizarSaque(valorSaque);
//   } else if (opcao === "2") {
//     console.log("\nEncerrando sessão do cliente...");
//   } else {
//     console.log("\n>> Opção inválida! Escolha 1 ou 2.");
//   }
// }


// console.log("\n=== RELATÓRIO DE CONFERÊNCIA GERENCIAL ===");
// console.log(`Cliente: ${Cliente.nome}`);
// console.log(`Saldo Final em Conta: R$ ${Cliente.saldoEmConta.toFixed(2)}`);
// console.log("\nEstado Atualizado das Gavetas:");

// for (let i = 0; i < CaixaEletronico.gavetas.length; i++) {
//   const gaveta = CaixaEletronico.gavetas[i];
//   const subtotalGaveta = gaveta.valor * gaveta.quantidade;
//   console.log(`- Gaveta R$ ${gaveta.valor},00: ${gaveta.quantidade} cédula(s) restante(s) (Total: R$ ${subtotalGaveta.toFixed(2)})`);
// }
// console.log("==========================================");