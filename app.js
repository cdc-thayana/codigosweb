/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 app.js
 Versão 3.0

 Controlador Principal

==========================================================*/


"use strict";



/*==========================================================
 CONFIGURAÇÃO
==========================================================*/


const App = {


version:"3.0",


language:"javascript",


editor:null,


projectName:"Projeto Novo",


autoSave:true,


running:false,


};






/*==========================================================
 INICIALIZAÇÃO
==========================================================*/
function createEvents(){


const runButton =
document.getElementById("run");


if(runButton){

runButton.onclick = run;

}



const language =
document.getElementById("lang");


if(language){


language.addEventListener(
"change",
function(){

App.language = this.value;


monaco.editor.setModelLanguage(

App.editor.getModel(),

this.value

);


console.log(
"Linguagem:",
App.language
);


});

}



window.addEventListener(

"DOMContentLoaded",

()=>{


initialize();


});





function initialize(){



console.log(

"🚀 Plataforma iniciada"

);



createEditor();


loadProject();


createEvents();


}




/*==========================================================
 MONACO EDITOR
==========================================================*/


function createEditor(){



require(

[

"vs/editor/editor.main"

],


function(){



App.editor =

monaco.editor.create(

document.getElementById(

"editor"

),


{


value:getDefaultCode(),


language:

App.language,


theme:

"vs-dark",


automaticLayout:true,


fontSize:15,


minimap:

{

enabled:false

}



}



);



});



}




function getDefaultCode(){


return `

console.log("Olá mundo");

`;



}




/*==========================================================
 TROCA DE LINGUAGEM
==========================================================*/


function changeLanguage(language){



App.language = language;



let model =

App.editor.getModel();



monaco.editor.setModelLanguage(

model,

language

);



switch(language){



case"python":


App.editor.setValue(

'print("Olá Python")'

);


break;



case"html":


App.editor.setValue(

"<h1>Minha Página</h1>"

);


break;



case"css":


App.editor.setValue(

"body{background:red;}"

);


break;



default:


App.editor.setValue(

'console.log("Olá JavaScript");'

);



}




}




/*==========================================================
 EXECUTAR
==========================================================*/


async function run(){



if(App.running)

return;



App.running=true;



clearConsole();



let code =

App.editor.getValue();



let result;



try{



switch(App.language){



case"javascript":


result =

JSRunner.execute(code);


break;




case"python":


result =

await PythonRunner.execute(code);


break;




case"html":


result =

HTMLRunner.execute(code);


break;




case"css":


result =

HTMLRunner.executeCSS(code);


break;



}




writeConsole(result);



}

catch(error){



writeConsole(

"❌ "+error.message

);



}



App.running=false;



}





/*==========================================================
 CONSOLE
==========================================================*/


function writeConsole(text){



const box =

document.getElementById(

"consoleOutput"

);



if(box)

box.textContent +=

text+"\n";



}




function clearConsole(){



const box=

document.getElementById(

"consoleOutput"

);



if(box)

box.textContent="";



}




/*==========================================================
 SALVAR
==========================================================*/


function saveProject(){



let project={



name:

App.projectName,


language:

App.language,


code:

App.editor.getValue(),


date:

new Date().toISOString()



};



localStorage.setItem(

"PPJ_PROJECT",

JSON.stringify(project)

);



writeConsole(

"💾 Projeto salvo"

);



}





/*==========================================================
 CARREGAR
==========================================================*/


function loadProject(){



let data =

localStorage.getItem(

"PPJ_PROJECT"

);



if(!data)

return;



let project=

JSON.parse(data);



App.language=

project.language;



setTimeout(()=>{


if(App.editor)

App.editor.setValue(

project.code

);



},1000);



}






/*==========================================================
 NOVO PROJETO
==========================================================*/


function newProject(){


if(confirm(

"Criar novo projeto?"

)){


App.editor.setValue("");

clearConsole();


}



}





/*==========================================================
 DOWNLOAD
==========================================================*/


function downloadProject(){



const code =

App.editor.getValue();



const file =

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

URL.createObjectURL(file);



link.download=

"Projeto_codigo.txt";



link.click();



}





/*==========================================================
 EVENTOS
==========================================================*/


function createEvents(){



const buttonRun=

document.getElementById(

"run"

);



if(buttonRun)

buttonRun.onclick=run;



}




/*==========================================================
 EXPORTAR
==========================================================*/


window.App=App;


window.run=run;


window.saveProject=

saveProject;


window.downloadProject=

downloadProject;


window.clearConsole=

clearConsole;


window.changeLanguage=

changeLanguage;


window.newProject=

newProject;
