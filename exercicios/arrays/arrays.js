import PromptSync from "prompt-sync";
const prompt = PromptSync();


// let frutas = ['morango', 'banana', 'pera'] 


// const numeros = [4, 8, 15]
// const soma = numeros[0] + numeros[1] + numeros[2]


// console.log(frutas[1]);


// console.log(frutas.length);


// frutas.push("manga");
// console.log(frutas);


// frutas.pop()
// console.log(frutas);


// console.log(frutas[0], frutas[frutas.length - 1]);


// console.log(soma)


// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }


// const temBanana = frutas.includes("banana");
// console.log(temBanana);


// const cidades = ["Curitiba", "Ponta Grossa", "Londrina", "Maringá"];
// let primeira = cidades[0]
// let ultima = cidades[cidades.length - 1] 
// console.log (primeira, ultima)



// let fila = ['ana', 'bruno']
// fila.push("carla")
// fila.unshift("diego")
// fila.shift("diego")
// console.log(fila);


// const vendas = [120, 340, 85, 200, 90];
// let total = 0;
// for (let i = 0; i < vendas.length; i++) {
// total = total + vendas[i];
// }
// console.log("Faturamento:", total); 


// const nomes = ["Léo", "Mia", "Théo"];
// for (let i = 0; i < nomes.length; i++) { // BUG
// console.log(nomes[i]);
// }


// const frutas = ["maçã", "banana", "uva"];
// if (frutas.indexOf("banana") !== -1) { // pense: o que indexOf retorna quando ACHA?
// console.log("Tem banana!");
// } else {
// console.log("Não tem banana.");
// }
// // Esperado: Tem banana!

// const frutas = ["maçã", "banana", "uva"];
// if (frutas.includes("banana")) {
//     console.log("Tem banana!");
// } else {
//     console.log("Não tem banana.");
// }


// const lista = [10, 20, 30];
// lista.push(40);
// lista.shift();
// console.log(lista); // (a)
// console.log(lista.length); // (b)
// console.log(lista[1]); // (c)
// console.log(lista.includes(10)); // (d)




// const temperaturas = [22, 30, 18, 27, 15, 33, 21];
// let maior = temperaturas[0];
// let menor = temperaturas[0];


// for (let i = 0; i < temperaturas.length; i++) {
//     if (temperaturas[i] > maior) {
//         maior = temperaturas[i];
//     }
    
//     if (temperaturas[i] < menor) {
//         menor = temperaturas[i];
//     }
// }
// console.log(`Maior: ${maior} | Menor: ${menor}`);



// const tarefas = []
// let quantidade = Number(prompt("quantas tarefas adicionar? R:"));

// for (let i = 0; i < quantidade; i++){
//     let novatarefa = prompt("tarefa:");
//     tarefas.push(novatarefa)
// }

// console.log (`voce tem ${tarefas.length} tarefas:`)

// for (let i= 0; i < tarefas.length; i++){
//      console.log(`${i + 1} - ${tarefas[i]}`);
// }
