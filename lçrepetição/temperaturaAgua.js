import PromptSync from "prompt-sync";
const prompt = PromptSync();

let temperaturaAgua = 90;

// do {
//     console.log(`A temperatura está em ${temperaturaAgua} graus. Aquecendo...`)
//     temperaturaAgua = temperaturaAgua + 2
//     }   
//     while (temperaturaAgua < 100)

while (temperaturaAgua <= 100) {
    console.log(`A temperatura está em ${temperaturaAgua} graus. Aquecendo...`)
    temperaturaAgua += 2
}