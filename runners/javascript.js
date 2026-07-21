/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 runners/javascript.js
 Versão 3.8

 Executor JavaScript

==========================================================*/


"use strict";





/*==========================================================
 EXECUTAR JAVASCRIPT
==========================================================*/


function runJavaScript(code){



let output=[];




/*----------------------------------------------------------
 Capturar console.log
----------------------------------------------------------*/


let oldConsole=
console.log;



console.log=function(...args){



output.push(

args
.map(item=>{


if(
typeof item==="object"
)

{

return JSON.stringify(
item,
null,
2
);


}


return item;


})
.join(" ")


);



};








try{



let result =

Function(code)();



if(
result!==undefined
)

{


output.push(result);


}



}




catch(error){



output.push(

"Erro JavaScript:\n"+
error.message

);



}






finally{



console.log=
oldConsole;



}






if(output.length===0){


return "Programa executado sem saída.";


}



return output.join("\n");



}









/*==========================================================
 EXEMPLO JAVASCRIPT
==========================================================*/


const javascriptExample = `

// JavaScript

let nome="Maria";

console.log(
"Olá",
nome
);


`;
