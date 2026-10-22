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




let atleta = {
    nome: prompt("Digite o nome do atleta: "),
    peso: Number(prompt("Digite o peso do atleta: "));
    meta: prompt("Digite a sua meta? emagrecimento/performace. R: "));
    distancias: [5, 9, 7]
};

    for (let i = 0; i < 3; i++) {
    let distancia = Number(prompt(`digite a distancia em km:${i + 1}`));
    atleta.distancias.push(distancia);
    }
    


