/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 runners/python38.js
 Versão 3.8

 Executor Python

==========================================================*/


"use strict";



let pyodideReady = false;


let pyodideInstance = null;








/*==========================================================
 CARREGAR PYTHON
==========================================================*/


async function loadPython(){



if(pyodideReady){


return;


}



try{


showConsole(
"Carregando Python..."
);



pyodideInstance = await loadPyodide();



pyodideReady=true;



showConsole(
"Python carregado com sucesso."
);



}



catch(error){


showConsole(

"Erro ao carregar Python:\n"+
error

);



}



}









/*==========================================================
 EXECUTAR PYTHON
==========================================================*/


async function runPython(code){



if(!pyodideReady){


await loadPython();



}



let output="";



try{



pyodideInstance.setStdout({

batched:

(text)=>{


output += text + "\n";


}


});




pyodideInstance.setStderr({

batched:

(text)=>{


output += "Erro: "+text+"\n";


}


});






await pyodideInstance.runPythonAsync(code);



if(output===""){


output=
"Programa executado sem saída.";

}



return output;



}



catch(error){



return (

"Erro Python:\n"+
error

);



}



}









/*==========================================================
 EXEMPLO PYTHON
==========================================================*/


const pythonExample = `

nome="Aluno"

print("Olá",nome)

`;
