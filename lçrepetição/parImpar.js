let somaPares = 0;
let somaImpares = 0;
let totalPares  = 0;
let totalImpares = 0;


for (let i = 0; i <= 1000; i++){
    if(i%2 == 0){
        somaPares += i;
        totalPares ++
    }else {
        somaImpares += i;
        totalImpares ++
    }
}

console.log (`soma pares: ${somaPares}`);
console.log (`soma impares: ${somaImpares}`);
console.log (`total pares: ${totalPares}`);
console.log (`total impares: ${totalImpares}`);

let mediaPares = somaPares / totalPares;
let mediaImpares = somaImpares / totalImpares;



console.log (`a media dos pares é: ${mediaPares}`);
console.log (`a media dos impares é: ${mediaImpares}`);


if (somaPares > somaImpares){
    console.log ('a soma dos pares é maior');
}

else {
    console.log ('a soma dos impares é maior');
}