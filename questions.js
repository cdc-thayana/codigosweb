/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 questions.js
 Banco de Exercícios

 Versão 1.0

==========================================================*/


"use strict";



const Questions = [




/*==========================================================
 PYTHON BÁSICO
==========================================================*/


{


id:1,


language:"python",


level:"fácil",


title:"Olá Mundo",


description:

'Crie um programa que mostre "Olá Mundo".',



hint:

"Use a função print().",



starter:

`print("")`,



answer:

`print("Olá Mundo")`,



points:10


},





{


id:2,


language:"python",


level:"fácil",


title:"Soma de números",


description:

"Crie um programa que some dois números.",



hint:

"Use variáveis e o operador +.",



starter:

`
a=10
b=20

print()
`,



answer:

`
a=10
b=20

print(a+b)
`,


points:10


},






{


id:3,


language:"python",


level:"fácil",


title:"Média escolar",


description:

"Calcule a média de duas notas.",



hint:

"Some as notas e divida por 2.",



starter:

`
nota1=8
nota2=10

`,



answer:

`
media=(nota1+nota2)/2

print(media)
`,


points:15


},






/*==========================================================
 JAVASCRIPT BÁSICO
==========================================================*/


{


id:100,


language:"javascript",


level:"fácil",


title:"Console Hello",



description:

'Mostre uma mensagem no console.',



hint:

"Use console.log().",



starter:

`
console.log("");
`,



answer:

`
console.log("Olá JavaScript");
`,



points:10


},






{


id:101,


language:"javascript",


level:"fácil",


title:"Somando valores",



description:

"Crie duas variáveis e mostre a soma.",



hint:

"Use o operador +.",



starter:

`
let a=10;
let b=20;

`,



answer:

`
let a=10;
let b=20;

console.log(a+b);
`,


points:10


},






/*==========================================================
 HTML
==========================================================*/


{


id:200,


language:"html",


level:"fácil",


title:"Primeira página",



description:

"Crie um título HTML.",



hint:

"Use a tag h1.",



starter:

`
<h1>

</h1>
`,



answer:

`
<h1>
Minha primeira página
</h1>
`,


points:10


},






/*==========================================================
 CSS
==========================================================*/


{


id:300,


language:"css",


level:"fácil",


title:"Alterar cor de fundo",



description:

"Modifique a cor do corpo da página.",



hint:

"Use background.",



starter:

`
body{

}
`,



answer:

`
body{

background:red;

}
`,


points:10


}




];






/*==========================================================
 FUNÇÕES DO BANCO
==========================================================*/


const QuestionManager = {



all(){


return Questions;


},





find(id){


return Questions.find(

q=>

q.id===id

);



},





filter(language){



return Questions.filter(

q=>

q.language===language

);



},






filterLevel(level){



return Questions.filter(

q=>

q.level===level

);



}



};





window.Questions = Questions;


window.QuestionManager = QuestionManager;
