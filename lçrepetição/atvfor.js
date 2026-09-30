import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num = Number(prompt("qual numero voĉe quer a tabuada?"));

var i
for(i = 0; i <= 100; i +=1) {

    console.log(`${num} x ${i} = ${ i * num}`)
}