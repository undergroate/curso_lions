import PromptSync from "prompt-sync";
const prompt = PromptSync();

// let pessoa = {
//     nome:'claudinho',
//     idade: '26',
//     cidade:'irati'
//  }
//  console.log(`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`)

// let produto = {
//     nome: 'rx7600',
//     preco: '1300'
// }

// console.log(`produto ${produto.nome} custa R$:${produto.preco} lulacoins`)


// let carro = {
//     motor: {
//         combustivel:'flex'
//     }
// }
// console.log (carro.motor.combustivel)




// let aluno = {
//     notas: [8, 6, 10]
// } 
// console.log(aluno.notas[0])



// const time = { nome: "Alpha", pontos: 0 }
// time.pontos += 3;
// console.log(time.pontos)





// const time = { nome: "Alpha", pontos: 0 }
// time.pontos += 3;
// console.log(time.Alpha)




// const contato = {
// nome: "Marina",
// empresa: "LionsDev",
// telefone: "42 99999-0000",
// }
// console.log(`${contato.nome} trabalha na ${contato.empresa} .`);





// const usuario = { nome: "João", nivel: 1 };
// usuario.nivel = 2
// usuario.premium = true
// console.log(usuario);





// const carro = {
// modelo: "Uno",
// motor: { combustivel: "flex", potencia: 85 },
// opcionais: ["ar", "trava", "vidro"],
// };

// console.log(carro.motor.combustivel); 
// console.log(carro.opcionais[1]);




// const produto = { nome: "Teclado", preco: 150 };
// // console.log("Preço:", produto.valor); \\ undefined
// console.log(produto.preco);




// const pessoa = { nome: "Ana", cidade: "Ponta Grossa" };
// // console.log(pessoa.nome);
// // console.log(pessoa.Cidade); // BUG: repare na letra

// console.log(pessoa.nome);
// console.log(pessoa.cidade);






// const jogador = { nome: "Kaio", pontos: 100, ativo: true };
// jogador.pontos = jogador.pontos + 50;
// jogador.time = "Alpha";
// console.log(jogador.nome); // (a)               Kaio
// console.log(jogador.pontos); // (b)             150
// console.log(jogador.time); // (c)               alpha
// console.log(jogador.ativo); // (d)              true






// let aluno ={
//     nome: "laercio",
//     nota1: 8,
//     nota2: 6,
// }
// let media = (aluno.nota1 + aluno.nota2) / 2
// console.log (`${aluno.nome} | ${media}`)





const produtos = [
  { nome: "Teclado", preco: 150, estoque: 5 },
  { nome: "Mouse", preco: 80, estoque: 10 },
  { nome: "Monitor", preco: 900, estoque: 2 },
  { nome: "Fone de Ouvido", preco: 200, estoque: 4 }
];

let valorTotalEstoque = 0;

console.log (produtos);

for(let produto of produtos){
      console.log(`${produto.nome} - R$ ${produto.preco} (${produto.estoque} un.)`);

  valorTotalEstoque += produto.preco * produto.estoque;
}
  console.log(`Valor total em estoque: R$ ${valorTotalEstoque}`);
