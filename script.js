let todosAgendados=[]
let cadastro={}
let pendentes=[]


function log(msg,tipo="info"){

const div=document.getElementById("log")

const cor = tipo==="erro" ? "#c0392b" : "#2c3e50"

div.innerHTML+=`<div style="color:${cor}">
${new Date().toLocaleTimeString()} - ${msg}
</div>`

div.scrollTop=div.scrollHeight

}



function carregarPlanilha(){

log("Carregando planilha...")

}



function carregarCadastro(){

log("Cadastro carregado")

}



function processarAgendados(){

log("Processando agendamentos")

}



function exportarPlanilha(){

log("Exportando planilha")

}



function gerarFichaManual(){

log("Gerando ficha manual")

}
