/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 questions.js
 Versão 3.8

 Banco de Exercícios

==========================================================*/


"use strict";



const questions = [



/*==========================================================
 PYTHON BÁSICO
==========================================================*/


{


id:1,


language:"python",


level:"Fácil",


title:

"Crie um programa que leia dois números e mostre a soma.",



hint:

"Use input() e int().",



answer:

`
a=int(input())

b=int(input())

print(a+b)
`

},





{


id:2,


language:"python",


level:"Fácil",


title:

"Crie um programa que mostre uma mensagem na tela.",



hint:

"Use print().",



answer:

`
print("Olá Mundo")
`

},






{


id:3,


language:"python",


level:"Fácil",


title:

"Crie uma variável com seu nome e mostre na tela.",



hint:

"Use uma variável e print().",



answer:

`
nome="Maria"

print(nome)
`

},





{


id:4,


language:"python",


level:"Médio",


title:

"Calcule a média de três notas.",



hint:

"Some os valores e divida por 3.",



answer:

`
n1=7
n2=8
n3=9

media=(n1+n2+n3)/3

print(media)
`

},





{


id:5,


language:"python",


level:"Médio",


title:

"Verifique se um número é positivo ou negativo.",



hint:

"Use if e else.",



answer:

`
numero=int(input())

if numero>=0:
    print("Positivo")
else:
    print("Negativo")
`

},






/*==========================================================
 JAVASCRIPT
==========================================================*/


{


id:6,


language:"javascript",


level:"Fácil",


title:

"Mostre uma mensagem usando JavaScript.",



hint:

"Use console.log().",



answer:

`
console.log("Olá JavaScript");
`

},





{


id:7,


language:"javascript",


level:"Fácil",


title:

"Some dois números.",



hint:

"Use variáveis.",



answer:

`
let a=10;

let b=20;

console.log(a+b);
`

},






{


id:8,


language:"javascript",


level:"Médio",


title:

"Crie uma função que multiplica dois valores.",



hint:

"Use function.",



answer:

`
function multiplicar(a,b){

return a*b;

}


console.log(
multiplicar(5,2)
);
`

},







/*==========================================================
 HTML / CSS
==========================================================*/


{


id:9,


language:"html",


level:"Fácil",


title:

"Crie um título HTML.",



hint:

"Use a tag h1.",



answer:

`
<h1>
Meu primeiro site
</h1>
`

},





{


id:10,


language:"css",


level:"Fácil",


title:

"Altere a cor do texto de uma página.",



hint:

"Use color.",



answer:

`
body{

color:red;

}
`

},






/*==========================================================
 PYTHON INTERMEDIÁRIO
==========================================================*/


{


id:11,


language:"python",


level:"Médio",


title:

"Faça uma contagem de 1 até 10.",



hint:

"Use for.",



answer:

`
for i in range(1,11):

    print(i)
`

},






{


id:12,


language:"python",


level:"Avançado",


title:

"Crie uma lista e mostre seus elementos.",



hint:

"Use uma lista e for.",



answer:

`
lista=[1,2,3,4]

for item in lista:

    print(item)
`

},






/*==========================================================
 JAVASCRIPT AVANÇADO
==========================================================*/


{


id:13,


language:"javascript",


level:"Avançado",


title:

"Crie um array e percorra seus valores.",



hint:

"Use forEach().",



answer:

`
let numeros=[1,2,3];


numeros.forEach(

n=>console.log(n)

);
`

},






{


id:14,


language:"javascript",


level:"Avançado",


title:

"Crie um objeto JavaScript.",



hint:

"Use {}.",



answer:

`
let pessoa={

nome:"Ana",

idade:20

};


console.log(pessoa);

`

},






/*==========================================================
 HTML/CSS PROJETOS
==========================================================*/


{


id:15,


language:"html",


level:"Médio",


title:

"Crie um cartão simples usando HTML.",



hint:

"Use div.",



answer:

`
<div>

<h2>
Meu Cartão
</h2>

<p>
Conteúdo
</p>

</div>
`

}



];
