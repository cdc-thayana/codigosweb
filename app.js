/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 app.js
 Versão 3.8

 Controlador Principal

==========================================================*/


"use strict";



/*==========================================================
 CONFIGURAÇÃO
==========================================================*/


const App = {


    version:"3.8",


    language:"javascript",


    editor:null,


    currentQuestion:0,


    score:0,


    resolved:0,


    total:0


};






/*==========================================================
 INICIALIZAÇÃO
==========================================================*/


window.onload=function(){


    initMonaco();


    loadStats();


    loadQuestion();


};








/*==========================================================
 MONACO EDITOR
==========================================================*/


function initMonaco(){



require(
{

paths:
{
vs:
"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
}

},

function(){


require(
[
"vs/editor/editor.main"
],

function(){



App.editor = monaco.editor.create(

document.getElementById("editor"),

{


value:getStarterCode("javascript"),


language:"javascript",


theme:"vs-dark",


automaticLayout:true,


fontSize:15


}



);



});

});


}








/*==========================================================
 CÓDIGOS INICIAIS
==========================================================*/


function getStarterCode(lang){


if(lang==="python"){


return `# Python 3.8

nome="Maria"

print(nome)
`;

}



if(lang==="html"){


return `

<h1>
Olá Mundo
</h1>

<p>
Minha página HTML
</p>

`;

}




if(lang==="css"){


return `

body{

background:black;
color:white;

}

`;

}



return `

// JavaScript

console.log("Olá Mundo");

`;

}









/*==========================================================
 TROCAR LINGUAGEM
==========================================================*/


function changeLanguage(lang){


App.language=lang;


document.getElementById("lang").value=lang;



if(App.editor){



monaco.editor.setModelLanguage(

App.editor.getModel(),

lang==="python"?"python":lang

);



App.editor.setValue(

getStarterCode(lang)

);



}



}








document
.getElementById("lang")
.addEventListener(

"change",

function(){


changeLanguage(this.value);


}

);









/*==========================================================
 EXECUTAR
==========================================================*/


document
.getElementById("run")
.onclick=function(){


executeCode();


};









async function executeCode(){



let code=App.editor.getValue();



clearConsole();



try{



if(App.language==="python"){



let result=
await runPython(code);



showConsole(result);



}



else if(App.language==="javascript"){



let result=
runJavaScript(code);



showConsole(result);



}



else if(
App.language==="html" ||
App.language==="css"
){



let result=
runCSS(code);



showPreview(result);



}



}

catch(error){



showConsole(

"Erro:\n"+error

);



}



}









/*==========================================================
 CONSOLE
==========================================================*/


function showConsole(text){


document
.getElementById("consoleOutput")
.textContent=text;


}



function clearConsole(){


document
.getElementById("consoleOutput")
.textContent="Console limpo.";


}









/*==========================================================
 PREVIEW
==========================================================*/


function showPreview(html){


document
.getElementById("preview")
.innerHTML=html;


}









/*==========================================================
 SALVAR PROJETO
==========================================================*/


function saveProject(){


if(!App.editor)return;



localStorage.setItem(

"codigoWeb",

JSON.stringify(

{


language:App.language,


code:App.editor.getValue()


}


)

);



showConsole(
"Projeto salvo com sucesso."
);



}









/*==========================================================
 ABRIR PROJETO
==========================================================*/


function loadProject(){



let data=

localStorage.getItem(
"codigoWeb"
);



if(!data){

showConsole(
"Nenhum projeto salvo."
);

return;

}



let project=

JSON.parse(data);



changeLanguage(
project.language
);



App.editor.setValue(
project.code
);



showConsole(
"Projeto carregado."
);



}









/*==========================================================
 BAIXAR CÓDIGO
==========================================================*/


function downloadProject(){



let code=
App.editor.getValue();



let file = "codigo";


if(App.language === "javascript"){

    file += ".js";

}


else if(App.language === "python"){

    file += ".py";

}


else if(App.language === "html"){

    file += ".html";

}


else if(App.language === "css"){

    file += ".css";

}




let blob=
new Blob(

[code],

{
type:"text/plain"
}

);



let link=
document.createElement("a");



link.href=
URL.createObjectURL(blob);



link.download=file;



link.click();



}









/*==========================================================
 ESTATÍSTICAS
==========================================================*/


function loadStats(){


let saved=
localStorage.getItem(
"stats"
);



if(saved){


let s=
JSON.parse(saved);



App.score=s.score||0;


App.resolved=s.resolved||0;


}



updateStats();



}





function updateStats(){



document
.getElementById("resolved")
.textContent=
App.resolved;



document
.getElementById("correct")
.textContent=
App.score;



}








/*==========================================================
 EXERCÍCIOS
==========================================================*/


function loadQuestion(){


if(
typeof questions==="undefined"
)
return;



App.total=
questions.length;



document
.getElementById("totalQuestions")
.textContent=
App.total;



let q=
questions[
App.currentQuestion
];



if(!q)return;



document.querySelector(".question h3")
.textContent=
"Questão "+
(q.id);



document.querySelector(".question p")
.textContent=
q.title;



}





function nextQuestion(){


if(
App.currentQuestion <
questions.length-1
){


App.currentQuestion++;


loadQuestion();



}


}





function home(){


changeLanguage("javascript");


}
