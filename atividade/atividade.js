//Exercício 1

i = 10;
while( i <= 20 ){
    console.log(i);
    i = i + 1;
}
console.log("fim");




//Exercício 2
menor = prompt("Entre com um número:");
maior = prompt("Entre com um número:");
menor = parseInt(menor);
maior = parseInt(maior);
i = menor;
while( i <= maior ){
    console.log(i);
    i = i + 1;
}
console.log("fim");



//Exercício 3
menor = prompt("Entre com um número:");
maior = prompt("Entre com um número:");
menor = parseInt(menor);
maior = parseInt(maior);
if( maior < menor ){
    aux = maior;
    maior = menor;
    menor = aux;
}
i = menor;
while( i <= maior ){
    console.log(i);
    i = i + 1;
}
console.log("fim");

//Exercício 4
inicio = prompt("Entre com um valor:");
fim = prompt("Entre com um valor:");
// converter para inteiro
inicio = parseInt(inicio);
fim = parseInt(fim);
2
// criar uma variável para acumular o somatório e iniciar com o valor neutro da soma
soma = 0;

// imprimir os números intervalo [inicio,fim]
while( inicio <= fim ){
    soma = soma + inicio;
    inicio = inicio + 1;
}
console.log("Somatório:", soma);


//Exercício 5

i = 0;
soma = 0;
while( i < 5 ){
    entrada = prompt("Entre com um número:");
    entrada = parseInt(entrada);
    soma = soma + entrada;
    i = i + 1;
}
console.log("Somatório:", soma);

//exercio 6

i = 0;
menor = Infinity;
while( i < 5){
    entrada = prompt("Entre com um numero:");
    entrada = parseInt(entrada);
    if(entrada < menor){
        menor = entrada;
    }
    i = i + 1;
}
console.log("menor" , menor);

//exercicio 7

i = 0;
maior = Infinity;
while( i < 5){
    entrada = prompt("Entre com um numero:");
    entrada = parseInt(entrada);
    if(entrada < menor){
        menor = entrada;
    }
    i = i + 1;
}
console.log("maior" , maior);