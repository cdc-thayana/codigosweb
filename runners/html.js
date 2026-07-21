/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 runners/html.js
 Versão 3.8

 Executor HTML/CSS

==========================================================*/


"use strict";





/*==========================================================
 EXECUTAR HTML
==========================================================*/


function runHTML(code){



let content="";



/*
 Se o usuário escreveu uma página completa
*/


if(

code.includes("<html")

)

{


content=code;


}




else

{


content=

`

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">


<style>

body{

font-family:Arial;

padding:20px;

}


</style>


</head>


<body>


${code}


</body>


</html>

`;



}



return content;



}









/*==========================================================
 EXECUTAR CSS
==========================================================*/


function runCSS(css){



return

`

<!DOCTYPE html>

<html>


<head>


<style>


${css}


</style>


</head>


<body>


<h1>

Teste CSS

</h1>


<p>

Seu estilo foi aplicado.

</p>


</body>


</html>


`;



}









/*==========================================================
 MODELO DE EXEMPLO HTML
==========================================================*/


const htmlExample = `

<h1>

Minha primeira página

</h1>


<p>

Praticando HTML

</p>


`;









/*==========================================================
 MODELO DE EXEMPLO CSS
==========================================================*/


const cssExample = `


body{

background:#222;

color:white;

font-family:Arial;

}



h1{

color:#00ffff;

}


`;
