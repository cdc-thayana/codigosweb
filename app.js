/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 app.js
 Versão 3.8.1 FINAL

 Controlador Principal

==========================================================*/


"use strict";



/*==========================================================
 CONFIGURAÇÃO
==========================================================*/


const App = {


    version:"3.8.1",


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



    loadStats();



    const languageSelect =

    document.getElementById("lang");



    if(languageSelect){



        languageSelect.addEventListener(

            "change",

            function(){


                changeLanguage(this.value);


            }

        );

    }






    const runButton =

    document.getElementById("run");



    if(runButton){



        runButton.onclick=function(){


            executeCode();


        };


    }



    initMonaco();



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
 setTimeout(()=>{

    loadQuestion();

},500);





loadQuestion();



}



);



}



);



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



const select =

document.getElementById("lang");



if(select){


select.value=lang;


}






if(App.editor){



let editorLanguage =

lang==="python"

?

"python"

:

lang;





monaco.editor.setModelLanguage(


App.editor.getModel(),


editorLanguage


);





}



}









/*==========================================================
 EXECUTAR CÓDIGO
==========================================================*/


async function executeCode(){



if(!App.editor){



showConsole(

"Editor carregando..."

);



return;


}






let code =

App.editor.getValue();





clearConsole();






try{



if(App.language==="python"){



let result =

await runPython(code);



showConsole(result);



}






else if(App.language==="javascript"){



let result =

runJavaScript(code);



showConsole(result);



}






else if(App.language==="html"){



let result =

runHTML(code);



showPreview(result);



}






else if(App.language==="css"){



let result =

runCSS(code);



showPreview(result);



}



}



catch(error){



showConsole(

"Erro:\n"+error.message

);



}



}









/*==========================================================
 CONSOLE
==========================================================*/


function showConsole(text){



let consoleBox =

document.getElementById("consoleOutput");



if(consoleBox){



consoleBox.textContent=text;


}



}



function clearConsole(){



let consoleBox =

document.getElementById("consoleOutput");



if(consoleBox){



consoleBox.textContent=

"Console limpo.";


}



}

/*==========================================================
 PREVIEW
==========================================================*/


function showPreview(html){


let preview =

document.getElementById("preview");



if(preview){


preview.innerHTML = html;


}



}









/*==========================================================
 SALVAR PROJETO
==========================================================*/


function saveProject(){



if(!App.editor){



showConsole(

"Editor não carregado."

);



return;


}






localStorage.setItem(


"codigoWeb",


JSON.stringify({


language:App.language,


code:App.editor.getValue()



})


);






showConsole(

"Projeto salvo com sucesso."

);



}









/*==========================================================
 ABRIR PROJETO
==========================================================*/


function loadProject(){



let data =

localStorage.getItem(

"codigoWeb"

);






if(!data){



showConsole(

"Nenhum projeto salvo."

);



return;


}






if(!App.editor){



showConsole(

"Editor ainda carregando."

);



return;


}






let project;



try{



project =

JSON.parse(data);



}

catch(error){



showConsole(

"Projeto salvo inválido."

);



return;


}






changeLanguage(

project.language

);






setTimeout(()=>{



App.editor.setValue(

project.code

);



},200);






showConsole(

"Projeto carregado com sucesso."

);



}









/*==========================================================
 BAIXAR CÓDIGO
==========================================================*/


function downloadProject(){



if(!App.editor){



showConsole(

"Editor não carregado."

);



return;


}






let code =

App.editor.getValue();





let file="codigo";






if(App.language==="javascript"){


file+=".js";


}


else if(App.language==="python"){


file+=".py";


}


else if(App.language==="html"){


file+=".html";


}


else if(App.language==="css"){


file+=".css";


}






let blob =

new Blob(

[code],

{

type:"text/plain"

}

);






let link =

document.createElement("a");





link.href =

URL.createObjectURL(blob);





link.download=file;






link.click();






URL.revokeObjectURL(link.href);



}









/*==========================================================
 ESTATÍSTICAS
==========================================================*/


function loadStats(){



let saved =

localStorage.getItem(

"stats"

);






if(saved){



let stats =

JSON.parse(saved);





App.score =

stats.score || 0;





App.resolved =

stats.resolved || 0;



}






updateStats();



}








function saveStats(){



localStorage.setItem(


"stats",


JSON.stringify({



score:App.score,


resolved:App.resolved



})


);



}









function updateStats(){



let resolved =

document.getElementById(

"resolved"

);





let correct =

document.getElementById(

"correct"

);






if(resolved){



resolved.textContent=

App.resolved;



}







if(correct){



correct.textContent=

App.score;



}






saveStats();



}





function completeQuestion(correct){



App.resolved++;





if(correct){



App.score++;



}






updateStats();



}






/*==========================================================
 EXERCÍCIOS
==========================================================*/


function loadQuestion(){



if(typeof questions==="undefined"){



return;


}






App.total =

questions.length;






let total =

document.getElementById(

"totalQuestions"

);





if(total){



total.textContent=

App.total;



}






let q =

questions[

App.currentQuestion

];






if(!q){



return;


}






let title =

document.querySelector(

".question h3"

);





if(title){



title.textContent=

"Questão "+q.id;



}






let description =

document.querySelector(

".question p"

);





if(description){



description.textContent=

q.title;



}






if(App.editor){



loadQuestionCode();



}



}






function loadQuestionCode(){



if(typeof questions==="undefined"){



return;


}






if(!App.editor){



return;


}






let q =

questions[

App.currentQuestion

];






if(!q){



return;


}







changeLanguage(

q.language

);






setTimeout(()=>{



App.editor.setValue(

q.answer

);



},200);



}





function nextQuestion(){



if(typeof questions==="undefined"){



return;


}






if(

App.currentQuestion <

questions.length-1

){



App.currentQuestion++;





loadQuestion();



}

else{



showConsole(

"Você chegou ao final dos exercícios."

);



}



}





/*==========================================================
 DICA E RESPOSTA
==========================================================*/


function showHint(){



if(typeof questions==="undefined"){



return;


}






let q =

questions[

App.currentQuestion

];






if(q){



showConsole(

"💡 Dica:\n\n"+q.hint

);



}



}









function showAnswer(){



if(typeof questions==="undefined"){



return;


}






let q =

questions[

App.currentQuestion

];






if(q){



showConsole(

"✓ Resposta:\n\n"+q.answer

);



}



}









/*==========================================================
 INÍCIO
==========================================================*/


function home(){



changeLanguage(

"javascript"

);






if(App.editor){



App.editor.setValue(

getStarterCode("javascript")

);



}



}
