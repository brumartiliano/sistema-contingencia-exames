# 🏥 Núcleo Atende +

**Sistema de Contingência de Atendimento – Prevent Senior**  
*Protótipo desenvolvido para atendimento de exames e consultas em modo offline.*

![Status](https://img.shields.io/badge/status-estável-brightgreen)
![Tecnologias](https://img.shields.io/badge/HTML5-CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 📌 Sobre o Projeto

O **Núcleo Atende +** é uma ferramenta web **100% client‑side** (front‑end puro) criada para situações de contingência, quando o sistema principal de agendamentos está indisponível. Ele permite:

- Importar planilhas de agendamento (exames e consultas)
- Buscar pacientes por nome ou matrícula
- Gerar **fichas de atendimento** em PDF (com campos para anamnese)
- Gerar **etiquetas de identificação** (tamanho 90×36 mm, compatível com Tally Dascom)
- Registrar atendimentos **manuais** (Livre Demanda e Encaixe)
- Visualizar pacientes com **consulta + exame no mesmo dia** (aba combinada)

Nenhum dado é enviado para servidores – tudo acontece localmente no navegador.  
Perfeito para uso em **unidades de saúde** que precisam de um plano B rápido e confiável.

---

## ✨ Funcionalidades

| Módulo | O que faz |
|--------|-----------|
| **Carregar agendas** | Leitura de arquivos Excel (.xlsx, .xls) e CSV com agendamentos de exames e consultas. |
| **Busca inteligente** | Filtra pacientes por nome ou matrícula em tempo real. |
| **Fichas de atendimento** | Gera PDF com cabeçalho específico (Agendado / Livre Demanda / Encaixe), dados do paciente, lista de procedimentos e anamnese completa (9 seções). |
| **Etiquetas** | Gera etiqueta separada para exames (tamanho 90×36 mm, pronta para impressora Tally Dascom). |
| **Registro manual** | Permite criar atendimentos de **Livre Demanda** (exames) ou **Encaixe** (exame ou consulta) com todos os campos. |
| **Aba “Consulta + Exames”** | Mostra apenas pacientes que têm pelo menos uma consulta e um exame no mesmo dia – com botão para gerar ambas as fichas de uma vez. |
| **QR Codes** | Inclui no rodapé das fichas QR Codes para Portal do Beneficiário e apps da Prevent Senior. |
| **Log de ações** | Exibe todas as operações realizadas, auxiliando na auditoria. |

---

## 🖥️ Tecnologias utilizadas

- **HTML5 / CSS3** – Estrutura e estilização responsiva
- **JavaScript (ES6)** – Toda a lógica do sistema
- [SheetJS](https://sheetjs.com/) – Leitura de planilhas Excel/CSV
- [jsPDF](https://github.com/parallax/jsPDF) + [html2canvas](https://html2canvas.hertzen.com/) – Geração de PDF a partir do DOM
- [FileSaver.js](https://github.com/eligrey/FileSaver.js) – Salvamento dos arquivos PDF
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) – Geração dinâmica de QR Codes

---

## 🚀 Como usar (localmente)

1. **Baixe ou clone** este repositório.
2. Abra o arquivo `index.html` diretamente no seu navegador (não precisa de servidor web).
3. Carregue as planilhas de **Exames** e **Consultas** (veja formato esperado abaixo).
4. Utilize as abas para localizar os pacientes.
5. Preencha data de nascimento e acompanhante (se necessário).
6. Clique em **Gerar Ficha** (e, para exames, também a **Etiqueta**).

> ⚠️ **Importante:** As bibliotecas são carregadas via CDN, portanto **é necessária conexão com a internet** para o funcionamento completo.

---

## 📁 Formato das planilhas

O sistema reconhece automaticamente colunas que contenham palavras‑chave (maiúsculas/minúsculas, com ou sem acento).  
**Colunas obrigatórias:**

### Planilha de Exames
- `matricula` (ou `matrícula`, `matr`)
- `beneficiario` (ou `beneficiário`, `nome`, `paciente`)
- `data` (ou `data agendada`, `dt`)
- `hora` (opcional)
- `procedimento` (opcional)
- `unidade` (opcional)
- `andar/sala` (opcional)
- `medico` (opcional)

### Planilha de Consultas
- `matricula`
- `beneficiario`
- `data consulta`
- `hora consulta` (opcional)
- `local` (opcional)
- `profissional` (opcional)
- `subespecialidade` (opcional)

> 💡 **Dica:** Se alguma coluna não for encontrada, o sistema exibirá um log de erro indicando qual campo está faltando.

---

## 🧪 Testando online

O sistema está hospedado no GitHub Pages:  
👉 [https://brumartiliano.github.io/sistema-contingencia-exames/](https://brumartiliano.github.io/sistema-contingencia-exames/)

Você pode usar o link diretamente – basta carregar suas planilhas.

---

## 📦 Como contribuir

Este é um projeto interno da Prevent Senior, mas sugestões são bem‑vindas.  
Para reportar bugs ou sugerir melhorias, abra uma **issue** neste repositório.

---

## 👩‍💻 Desenvolvido por

**Bruna Martiliano Lage**  
[GitHub](https://github.com/brumartiliano)

---

## 📄 Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

## 🙏 Agradecimentos

- Equipe de TI da Prevent Senior pelo suporte na definição dos requisitos.
- Comunidade open‑source pelas bibliotecas utilizadas.

---

*Última atualização: Abril de 2026*
