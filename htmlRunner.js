/*==========================================================
 PRATICANDO COM PYTHON E JAVASCRIPT
 htmlRunner.js
 Preview HTML/CSS
 Versão 1.0
==========================================================*/


"use strict";



const HTMLRunner = {



execute(code){



const iframe =

document.getElementById(

"preview"

);



if(!iframe)

return;



iframe.srcdoc = code;



return "Preview atualizado.";





},





executeCSS(css){



const iframe =

document.getElementById(

"preview"

);



iframe.srcdoc = `


<style>

${css}

</style>


<h1>

Preview CSS

</h1>


<p>

Teste de estilos

</p>


`;



return "CSS aplicado.";


}



};





window.HTMLRunner = HTMLRunner;
