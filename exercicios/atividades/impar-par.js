import promptSync from 'prompt-sync';
const prompt = promptSync();

let nota1 = Number(prompt('Digite o primeiro número: '));
if (nota1 % 2 === 0) {
    console.log(`O número ${nota1} é par!`);
} else {
    console.log(`O número ${nota1} é ímpar!`);
}
