/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT
 app.js
 Versão 2.0
 Plataforma de Estudos
==========================================================*/

"use strict";


/*==========================================================
 CONFIGURAÇÃO GLOBAL
==========================================================*/


const App = {


version:"2.0",


language:"javascript",


theme:"dark",


autoSave:true,


editor:null,


projectName:"Novo Projeto",


executionCount:0,


score:0,


stats:{


questions:0,

correct:0,

time:0


},


files:{


javascript:"",

python:"",

html:"",

css:""


}


};



/*==========================================================
 INICIALIZAÇÃO
==========================================================*/


window.addEventListener("DOMContentLoaded",()=>{


startApp();


});




async function startApp(){


console.log(
"🚀 Plataforma iniciada"
);



loadStorage();



initializeEditor();



events();



updateStats();


}





/*==========================================================
 MONACO EDITOR
==========================================================*/


function initializeEditor(){


if(typeof monaco==="undefined"){


console.warn(
"Monaco Editor não carregado"
);


return;


}



App.editor =
monaco.editor.create(

document.getElementById("editor"),


{


value:
getStarterCode(),


language:
App.language,


theme:
"vs-dark",


automaticLayout:true,


fontSize:15,


minimap:{enabled:false}



});


}





function changeLanguage(lang){


App.language=lang;



monaco.editor.setModelLanguage(

App.editor.getModel(),

lang

);



App.editor.setValue(
getStarterCode()
);



autoSave();



}




/*==========================================================
 CÓDIGO INICIAL
==========================================================*/


function getStarterCode(){



switch(App.language){


case"python":

return `print("Olá Python")`;



case"html":

return `<h1>Minha Página</h1>`;



case"css":

return `body{
background:white;
}`;



default:

return `console.log("Olá JavaScript");`;



}



}





/*==========================================================
 EXECUÇÃO PRINCIPAL
==========================================================*/


function run(){


clearConsole();



App.executionCount++;



switch(App.language){


case"javascript":

executeJavaScript();

break;



case"python":

executePython();

break;



case"html":

executeHTML();

break;



case"css":

executeCSS();

break;



default:

log(
"Linguagem não encontrada"
);


}



saveStats();



}






/*==========================================================
 JAVASCRIPT
==========================================================*/


function executeJavaScript(){


let output=[];


const oldLog=
console.log;



console.log=(...args)=>{


output.push(
args.join(" ")
);


};



try{


new Function(

App.editor.getValue()

)();



output.forEach(log);



}


catch(error){


showError(error);


}



console.log=oldLog;



}




/*==========================================================
 PYTHON PYODIDE
==========================================================*/


async function executePython(){


if(!window.pyodide){


log(
"Carregando Python..."
);


window.pyodide =
await loadPyodide();


}



try{


let result =

await pyodide.runPythonAsync(

App.editor.getValue()

);



log(result ?? "");



}


catch(error){


showError(error);



}


}





/*==========================================================
 HTML
==========================================================*/


function executeHTML(){


const preview=

document.getElementById(
"preview"
);



preview.srcdoc =

App.editor.getValue();



log(
"HTML atualizado"
);



}




/*==========================================================
 CSS
==========================================================*/


function executeCSS(){


const preview=

document.getElementById(
"preview"
);



preview.srcdoc=`

<style>

${App.editor.getValue()}

</style>


<h1>

Preview CSS

</h1>


`;



log(
"CSS aplicado"
);


}




/*==========================================================
 CONSOLE
==========================================================*/


function clearConsole(){


const box=

document.getElementById(
"console"
);



if(box)

box.textContent="";


}




function log(text){


const box=

document.getElementById(
"console"
);



if(box)

box.textContent +=

text+"\n";


}





function showError(error){


log(
"❌ ERRO\n"+
error.message

);


}





/*==========================================================
 SALVAR PROJETO
==========================================================*/


function saveProject(){


const data={


name:App.projectName,


language:App.language,


code:

App.editor.getValue(),


date:

new Date()


};



localStorage.setItem(

"PPJ_PROJECT",

JSON.stringify(data)

);



log(
"💾 Projeto salvo"
);


}




/*==========================================================
 CARREGAR PROJETO
==========================================================*/


function loadStorage(){


const data=

localStorage.getItem(
"PPJ_PROJECT"
);



if(!data)

return;



const project=

JSON.parse(data);



App.language=
project.language;



App.projectName=
project.name;


}





/*==========================================================
 AUTO SAVE
==========================================================*/


function autoSave(){


if(!App.autoSave)

return;



saveProject();



}





/*==========================================================
 NOVO PROJETO
==========================================================*/


function newProject(){


if(confirm(
"Novo projeto?"
)){



App.editor.setValue("");



clearConsole();



}



}





/*==========================================================
 DOWNLOAD
==========================================================*/


function downloadProject(){


const code=

App.editor.getValue();



const blob=

new Blob(

[code],

{
type:"text/plain"
}

);



const link=

document.createElement(
"a"
);



link.href=

URL.createObjectURL(blob);



link.download=

"Projeto_codigo.txt";



link.click();



}





/*==========================================================
 ESTATÍSTICAS
==========================================================*/


function updateStats(){


localStorage.setItem(

"PPJ_STATS",

JSON.stringify(
App.stats
)

);



}




function saveStats(){


App.stats.time++;

updateStats();


}




/*==========================================================
 EVENTOS
==========================================================*/


function events(){



const runButton=

document.getElementById(
"run"
);



if(runButton)

runButton.onclick=run;



const saveButton=

document.getElementById(
"save"
);



if(saveButton)

saveButton.onclick=saveProject;



}





/*==========================================================
 EXPORTAÇÃO GLOBAL
==========================================================*/


window.App=App;


window.run=run;


window.saveProject=
saveProject;


window.newProject=
newProject;


window.downloadProject=
downloadProject;


window.clearConsole=
clearConsole;


window.changeLanguage=
changeLanguage;
