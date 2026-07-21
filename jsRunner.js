/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT
 jsRunner.js
 Executor JavaScript
 Versão 1.0
==========================================================*/


"use strict";



const JSRunner = {



execute(code){


let output=[];



const oldConsole = console.log;



console.log=function(...args){


output.push(

args.join(" ")

);


};



try{


new Function(code)();



}


catch(error){


output.push(

"❌ Erro: " +

error.message

);


}




console.log = oldConsole;



return output.length

?

output.join("\n")

:

"Execução concluída sem saída.";





}



};





window.JSRunner = JSRunner;
