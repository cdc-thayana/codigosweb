/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT
 app.js
 Versão 1.0
==========================================================*/

"use strict";

/*==========================================================
CONFIGURAÇÕES
==========================================================*/

const App = {

    version: "1.0",

    currentLanguage: "javascript",

    currentTheme: "dark",

    autoSave: true,

    fileName: "Novo Projeto",

    projects: [],

    currentProject: null

};


/*==========================================================
ELEMENTOS
==========================================================*/

const editor = document.getElementById("code");

const preview = document.getElementById("preview");

const consoleOutput = document.getElementById("console");

const languageSelect = document.getElementById("lang");


/*==========================================================
INICIALIZAÇÃO
==========================================================*/

window.addEventListener("load", () => {

    initialize();

});


function initialize(){

    loadProject();

    createEvents();

    updateTitle();

}


/*==========================================================
EVENTOS
==========================================================*/

function createEvents(){

    if(editor){

        editor.addEventListener("input",()=>{

            autoSave();

        });

    }

}


/*==========================================================
CONSOLE
==========================================================*/

function clearConsole(){

    consoleOutput.textContent="";

}


function log(message){

    consoleOutput.textContent += message + "\n";

}


function error(message){

    consoleOutput.textContent +=

    "❌ " + message + "\n";

}


/*==========================================================
EXECUTAR
==========================================================*/

function run(){

    clearConsole();

    const language = languageSelect.value;

    if(language==="JavaScript"){

        runJavaScript();

    }

    else if(language==="HTML"){

        runHTML();

    }

    else if(language==="Python (futuro Pyodide)"){

        runPython();

    }

}


/*==========================================================
JAVASCRIPT
==========================================================*/

function runJavaScript(){

    const originalConsole = console.log;

    let logs = [];

    console.log = function(...args){

        logs.push(args.join(" "));

    };

    try{

        new Function(editor.value)();

        logs.forEach(item=>{

            log(item);

        });

    }

    catch(e){

        error(e.message);

    }

    console.log = originalConsole;

}


/*==========================================================
HTML
==========================================================*/

function runHTML(){

    preview.srcdoc = editor.value;

    log("Preview atualizado.");

}


/*==========================================================
PYTHON
==========================================================*/

function runPython(){

    log("Pyodide será integrado.");

}


/*==========================================================
SALVAR
==========================================================*/

function saveProject(){

    const data = {

        language: languageSelect.value,

        code: editor.value,

        date: new Date().toLocaleString()

    };

    localStorage.setItem(

        "ppj_project",

        JSON.stringify(data)

    );

    log("Projeto salvo.");

}


/*==========================================================
AUTO SAVE
==========================================================*/

function autoSave(){

    if(!App.autoSave) return;

    saveProject();

}


/*==========================================================
CARREGAR
==========================================================*/

function loadProject(){

    const project =

    localStorage.getItem("ppj_project");

    if(!project) return;

    const data = JSON.parse(project);

    editor.value = data.code;

    languageSelect.value = data.language;

}


/*==========================================================
NOVO PROJETO
==========================================================*/

function newProject(){

    if(confirm("Criar novo projeto?")){

        editor.value="";

        clearConsole();

    }

}


/*==========================================================
DOWNLOAD
==========================================================*/

function downloadProject(){

    const blob = new Blob(

        [editor.value],

        {type:"text/plain"}

    );

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download="codigo.txt";

    a.click();

    URL.revokeObjectURL(a.href);

}


/*==========================================================
ATUALIZAR TÍTULO
==========================================================*/

function updateTitle(){

    document.title =

    "Praticando com Python e JavaScript";

}


/*==========================================================
BOTÕES
==========================================================*/

window.run = run;

window.save = saveProject;

window.download = downloadProject;

window.clearConsole = clearConsole;

window.newProject = newProject;
