/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 runners/python38.js
 Versão 3.8

 Executor Python

==========================================================*/


"use strict";



let pyodideInstance = null;


let pythonLoaded = false;







/*==========================================================
 CARREGAR PYTHON
==========================================================*/


async function loadPython(){



if(pythonLoaded){

    return;

}




if(typeof loadPyodide === "undefined"){


    throw new Error(

    "Pyodide ainda não carregou."

    );


}







showConsole(
"Carregando Python..."
);






pyodideInstance = await loadPyodide();





pythonLoaded=true;






showConsole(

"Python carregado."

);




}









/*==========================================================
 EXECUTAR PYTHON
==========================================================*/


async function runPython(code){



try{



if(!pythonLoaded){


await loadPython();


}






let output="";







pyodideInstance.setStdout({

batched(text){


output += text + "\n";


}


});







pyodideInstance.setStderr({

batched(text){


output +=

"Erro: "

+

text

+

"\n";


}


});







await pyodideInstance.runPythonAsync(code);







if(output.trim()===""){


output=

"Programa executado sem saída.";


}







return output;





}

catch(error){



return (

"Erro Python:\n"

+

error.message

);



}



}
