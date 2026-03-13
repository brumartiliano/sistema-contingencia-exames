let cadastro = {};
let pendentes = [];
let todosAgendados = [];

function log(msg, tipo="info"){

const div = document.getElementById("log");

const cor = tipo === "erro" ? "red" : "black";

div.innerHTML += `
<div style="color:${cor}">
${new Date().toLocaleTimeString()} - ${msg}
</div>
`;

div.scrollTop = div.scrollHeight;

}

function carregarPlanilha(){

const file = document.getElementById("fileAgendados").files[0];

if(!file){
alert("Selecione um arquivo");
return;
}

const reader = new FileReader();

reader.onload = function(e){

try{

const data = new Uint8Array(e.target.result);

const workbook = XLSX.read(data,{type:"array"});

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const rows = XLSX.utils.sheet_to_json(sheet);

todosAgendados = rows;

log("Planilha carregada com sucesso");

document.getElementById("resumoSistema").innerHTML =
"<b>Total de agendamentos carregados:</b> " + todosAgendados.length;

}catch(err){

log("Erro ao ler arquivo","erro");

}

};

reader.readAsArrayBuffer(file);

}

function processarAgendados(){

if(!todosAgendados.length){

log("Nenhum agendamento encontrado","erro");

alert("Nenhum agendamento encontrado na planilha.");

return;

}

log("Processando agendamentos...");

}

function carregarCadastro(){

const file = document.getElementById("fileCadastro").files[0];

if(!file){
alert("Selecione um JSON");
return;
}

const reader = new FileReader();

reader.onload = function(e){

cadastro = JSON.parse(e.target.result);

log("Cadastro carregado com sucesso");

};

reader.readAsText(file);

}

function exportarPlanilha(){

log("Exportando planilha...");

}

function baixarCadastro(){

const blob = new Blob([JSON.stringify(cadastro,null,2)],{type:"application/json"});

saveAs(blob,"cadastro.json");

log("Cadastro exportado");

}

function buscarDadosManual(){

const mat = document.getElementById("manualMatricula").value;

if(cadastro[mat]){

document.getElementById("manualNome").value = cadastro[mat].nome || "";
document.getElementById("manualNascimento").value = cadastro[mat].nascimento || "";

}

}

function gerarFichaManual(){

log("Ficha manual gerada");

}

window.onload=function(){

const hoje = new Date();

const hojeStr = hoje.toISOString().split("T")[0];

document.getElementById("manualData").value = hojeStr;

};