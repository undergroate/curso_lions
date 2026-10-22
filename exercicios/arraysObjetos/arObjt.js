import PromptSync from "prompt-sync";
const prompt = PromptSync();




// let listaAlunos = ['bruna', 'alex'];
// let novoaluno = prompt("digite o nome do aluno:");
// listaAlunos.push(novoaluno)

// if (listaAlunos.length === 3 ){
//     console.log(`Turma formada com sucesso! Alunos: ${listaAlunos}`)
// } else
//     console.log("null")



// let estoqueTamanho = [10, 15, 8]
// let vendasP = Number(prompt("quantas pecas p foram vendidas hoje?"));
// estoqueTamanho[0] = estoqueTamanho[0] - vendasP;
// if(estoqueTamanho[0] < 5){
//     console.log("Alerta:Estoque de luvas tamanho P está crítico!");
// } else 
//     console.log(`Estoque atualizado. Quantidade restante do tamanho P: ${estoqueTamanho}`);



// let nomeDigitado = prompt("Digite o nome do cachorro: ");
// let racaDigitada = prompt("Digite a raça do cachorro: ");
// let idadeDigitada = Number(prompt("Digite a idade do animal: "));

// let paciente = {};
// paciente.nome = nomeDigitado;
// paciente.raca = racaDigitada;
// paciente.idade = idadeDigitada;

// if (paciente.idade >= 8 ){
//     console.log(`O paciente ${paciente.nome} já é sênior e precisa de exames de rotina`)
// } else
//     console.log("Paciente na faixa de idade regular.")

// console.log(paciente)



// let filaProjetos = []
// let nomeCliente = prompt("digite a empresa do cliente. R:");
// let valorEstimado = Number(prompt("digite o valor estimado do projeto? R:"));
// let urgente = prompt("o projeto possui  prazo de entrga urgente? sim/nao R:");
// let projeto = {
//     nome: nomeCliente,
//    valorEstimado
// };
// filaProjetos.push(projeto);

// if (urgente === "sim" && filaProjetos[0].valorEstimado > 3000) {
//     filaProjetos[0].valorEstimado = filaProjetos[0].valorEstimado * 1.15;
// }
// console.log(filaProjetos)




// let estacao = {
//     id: "s-01",
//     local: "laboratorio",
//     temperaturas: []
// };

// for (let i = 0; i < 3; i++) {
//     let temp = Number(prompt(`Digite a ${i + 1}ª leitura de temperatura:`));
//     estacao.temperaturas.push(temp);
// }
// let soma = estacao.temperaturas[0] + estacao.temperaturas[1] + estacao.temperaturas[2];
// let media = soma / 3;
// if (media > 35) {
//     estacao.alerta = true
//     console.log(`"PERIGO: Média de temperatura extrema ${media.toFixed(1)} graus detectada no ${estacao.local}!".`)
// } else{
//     estacao.alerta = false 
//     console.log("Temperaturas dentro da normalidade.");
// }
// console.log(estacao)




// let atleta = {
//     nome: prompt("Digite o nome do atleta: "),
//     peso: Number(prompt("Digite o peso do atleta: ")),
//     meta: prompt("Digite a sua meta? (e)emagrecimento/(p)performace. R: "),
//     distancias: [17, 19, 21]
// };
//     let selo = ["meta atingida", "novo recorde pessoal", "parabens, continue assim!"];
//     let hoje = Number(prompt("Digite a distância corrida hoje (em km): "));
// atleta.distancias.push(hoje);
    
// let totalUltimosTres = atleta.distancias[1] + atleta.distancias[2] + atleta.distancias[3];
// let media = totalUltimosTres / 3;

// if (atleta.meta === "e" && media >= 20) {
//     console.log(`Parabéns ${atleta.nome}! Você atingiu sua meta de emagrecimento!`);
//     console.log(selo[0])
//     atleta.peso = atleta.peso - 1;
//     console.log(`seu peso atual é ${atleta.peso} kg`)
// } else if (atleta.meta === "p" && hoje > atleta.distancias[2]) {
//     console.log(`Parabéns ${atleta.nome}! Você bateu seu recorde pessoal!`);
//     console.log(selo[1])
// } else {
//     console.log(`Continue se esforçando ${atleta.nome}!`);
//     console.log(selo[2])
// }   



// let cliente = {
//     nome: prompt("Digite o nome do cliente VIP: "),
//     categoria: "Gold", 
//     historicoViagens: [
//         { destino: "São Paulo", milhas: 2000 },
//         { destino: "Rio de Janeiro", milhas: 1500 }
//     ]
// };

// let novoDestino = prompt("Digite o destino do terceiro voo: ");
// let novasMilhas = Number(prompt("Digite a quantidade de milhas acumuladas nesse voo: "));

// cliente.historicoViagens.push({ destino: novoDestino, milhas: novasMilhas });

// let totalMilhas = 0;
// for (let i = 0; i < cliente.historicoViagens.length; i++) {
//     totalMilhas += cliente.historicoViagens[i].milhas;
// }

// if (totalMilhas > 5000) {
//     let saldoRestante = totalMilhas - 5000;
//     cliente.categoria = "Platinum";
//     cliente.saldoMilhas = saldoRestante; 
//     console.log(`Parabéns ${cliente.nome}! Você subiu para a categoria Platinum! Foram resgatadas 5.000 milhas e seu saldo atual é de ${saldoRestante}.`);
// } else {
//     let quantoFalta = 5001 - totalMilhas;
//     cliente.saldoMilhas = totalMilhas;    
//     console.log(`Faltam ${quantoFalta} milhas para você conseguir o upgrade para Platinum.`);
// }

//     console.log("\n--- Perfil Final do Cliente ---");
//     console.log(cliente);









// let pedido = {
//     nomeCliente: prompt("Digite o nome do cliente: "),
//     valorBaseBurger: 30.00,
//     quantidade: Number(prompt("Quantos lanches o cliente está comprando? ")),
//     ingredientesExtras: []
// };

// let extra1Nome = prompt("Digite o nome do primeiro ingrediente extra : ");
// let extra1Preco = Number(prompt(`Digite o valor do extra (${extra1Nome}): `));

// let extra2Nome = prompt("Digite o nome do segundo ingrediente extra : ");
// let extra2Preco = Number(prompt(`Digite o valor do extra (${extra2Nome}): `));


// pedido.ingredientesExtras.push(extra1Nome);
// pedido.ingredientesExtras.push(extra2Nome);

// let subtotal = (pedido.valorBaseBurger + extra1Preco + extra2Preco) * pedido.quantidade;
// let valorTotal = subtotal;

// if (pedido.ingredientesExtras.length === 2 && pedido.quantidade > 2) {
//     let desconto = subtotal * 0.20;
//     valorTotal = subtotal - desconto;
// }

// console.log("\n================ RESUMO DO PEDIDO ================");
// console.log(`Cliente: ${pedido.nomeCliente}`);
// console.log(`Quantidade de lanches: ${pedido.quantidade}`);
// console.log(`Ingredientes Extras adicionados: ${pedido.ingredientesExtras.join(", ")}`);
// console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);

// if (valorTotal < subtotal) {
//     console.log("Desconto Aplicado: 20%  por levar mais de 2 lanches com extras!");
// }

// console.log(`Valor Total a Pagar: R$ ${valorTotal.toFixed(2)}`);
// console.log("==================================================");








// let projeto = {
//     nomeCoordenador: prompt("Digite o nome do coordenador: "),
//     limiteVagas: Number(prompt("Digite o limite máximo de vagas do projeto: ")),
//     areaEstudo: prompt("Digite a área de estudo : "),
//     mentores: [
//         { nome: "Carlos Silva", areaDeAtuacao: "Tecnologia" },
//         { nome: "Ana Souza", areaDeAtuacao: "Tecnologia" }
//     ],
//     status: "Ativo" 
// };

// let nomeVoluntario = prompt("Digite o nome do novo voluntário: ");
// let areaVoluntario = prompt("Digite a área de atuação do voluntário: ");

// let novoMentor = {
//     nome: nomeVoluntario,
//     areaDeAtuacao: areaVoluntario
// };

// if (projeto.mentores.length < projeto.limiteVagas && areaVoluntario.toLowerCase() === projeto.areaEstudo.toLowerCase()) {
    
    
//     projeto.mentores.push(novoMentor);
//     console.log("\n Cadastro APROVADO! Novo mentor adicionado com sucesso.");

// } else {
    

//     projeto.status = "Bloqueado para Inscrições";
//     console.log("\n Cadastro REJEITADO! O projeto atingiu o limite de vagas ou a área de atuação não é compatível.");

// }

// console.log("\n================ FICHA DO PROJETO ================");
// console.log(projeto);
// console.log("==================================================");





// let turbina = {
//     lado: "Motor Esquerdo",
//     status: "Desligado",
//     leiturasCriticas: [15, 45, 10] 
// };

// let novaTemperatura = Number(prompt("Digite a nova temperatura atual (ºC): "));
// let novaPressao = Number(prompt("Digite a nova pressão do óleo (PSI): "));
// let novoCombustivel = Number(prompt("Digite o novo nível de combustível (%): "));

// turbina.leiturasCriticas[0] = novaTemperatura;
// turbina.leiturasCriticas[1] = novaPressao;
// turbina.leiturasCriticas[2] = novoCombustivel;

// let combustivelOk = novoCombustivel > 20;
// let pressaoOk = novaPressao > 50;
// let temperaturaOk = novaTemperatura >= 20 && novaTemperatura <= 90;

// if (combustivelOk && pressaoOk && temperaturaOk) {

//     turbina.status = "Ligado";
//     console.log("\n SISTEMA OK: Turbina acionada com sucesso!");

// } else {
//     turbina.status = "Falha Crítica";
//     turbina.bloqueioAtivado = true;
//     console.log("\n ALERTA DE SEGURANÇA: Limites vitais violados!");
// }

// console.log("\n================ PAINEL DA AERONAVE ================");
// console.log(turbina);
// console.log("====================================================");







// let passageiro = {
//     nome: prompt("Digite o nome do passageiro: "),
//     nacionalidade: prompt("Digite a nacionalidade: "),
//     estaATrabalho: prompt("Está vindo a trabalho? ('sim/nao'): ").toLowerCase() === "sim", 
//     documentos: ["Passaporte", "Visto"] 
// };


// let terceiroDocumento = prompt("Digite o terceiro documento apresentado : ");

// passageiro.documentos.push(terceiroDocumento);

// let liberado = false;

// let paisPassageiro = passageiro.nacionalidade.toLowerCase();

// if (paisPassageiro !== "brasil") {
//     let temVistoNoIndice1 = passageiro.documentos[1].toLowerCase() === "visto";
//     let terceiroNaoVazio = terceiroDocumento.trim() !== "";
    
//     if (temVistoNoIndice1 && terceiroNaoVazio) {
//         liberado = true;
//     }

// } else {
//     if (passageiro.documentos[0].toLowerCase() === "passaporte") {
//         liberado = true;
//     }
// }

// passageiro["Entrada Permitida"] = liberado;

// console.log("\n================ FICHA DE IMIGRAÇÃO ================");
// console.log(passageiro);
// console.log("====================================================");




