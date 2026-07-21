/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT

 storage.js
 Sistema de Projetos

 Versão 1.0

==========================================================*/


"use strict";



const StorageManager = {



key:"PPJ_PROJECTS",




/*==========================================================
 LISTAR PROJETOS
==========================================================*/


getProjects(){



const data =

localStorage.getItem(

this.key

);



if(!data)

return [];



return JSON.parse(data);



},






/*==========================================================
 SALVAR PROJETO
==========================================================*/


saveProject(project){



let projects =

this.getProjects();



if(!project.id){



project.id =

Date.now();



}



project.date =

new Date()

.toLocaleString();





projects.push(project);



localStorage.setItem(

this.key,

JSON.stringify(projects)

);



return project;



},






/*==========================================================
 ATUALIZAR PROJETO
==========================================================*/


updateProject(id,data){



let projects =

this.getProjects();



projects =

projects.map(project=>{



if(project.id===id){



return {

...project,

...data,

date:

new Date()

.toLocaleString()

};



}



return project;



});




localStorage.setItem(

this.key,

JSON.stringify(projects)

);



},






/*==========================================================
 ABRIR PROJETO
==========================================================*/


getProject(id){



let projects =

this.getProjects();



return projects.find(

project=>

project.id===id

);



},






/*==========================================================
 EXCLUIR PROJETO
==========================================================*/


deleteProject(id){



let projects =

this.getProjects();



projects =

projects.filter(

project=>

project.id!==id

);



localStorage.setItem(

this.key,

JSON.stringify(projects)

);



},






/*==========================================================
 LIMPAR TODOS
==========================================================*/


clear(){


localStorage.removeItem(

this.key

);



},






/*==========================================================
 EXPORTAR PROJETO
==========================================================*/


exportProject(id){



const project =

this.getProject(id);



if(!project)

return;



const file =

new Blob(

[

JSON.stringify(

project,

null,

4

)

],

{

type:

"application/json"

}

);



const link=

document.createElement(

"a"

);



link.href=

URL.createObjectURL(file);



link.download=

project.nome+".json";



link.click();



}



};





window.StorageManager = StorageManager;
