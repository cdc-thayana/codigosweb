/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT
 pyRunner.js
 Executor Python Pyodide
 Versão 1.0
==========================================================*/


"use strict";



const PythonRunner = {



pyodide:null,



async load(){



if(this.pyodide)

return;



this.pyodide =

await loadPyodide();



},





async execute(code){



try{


await this.load();



let result =

await this.pyodide.runPythonAsync(code);



return result || "Execução finalizada.";



}



catch(error){



return (

"❌ Python Error:\n"+

error.message

);



}



}



};





window.PythonRunner = PythonRunner;
