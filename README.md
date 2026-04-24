# 📋 DevTrack Kanban

Uma ferramenta de organização visual inspirada no Trello, desenvolvida para ajudar desenvolvedores a rastrearem suas candidaturas a vagas de emprego.

## 🔗 Demonstração
Acesse o projeto online aqui: **[DevTrack Kanban](https://lucasriandev.github.io/DevTrack/)**

<img width="1914" height="856" alt="image" src="https://github.com/user-attachments/assets/931d0d7a-41c8-4325-8683-ee4e4aca3a1d" />

## 📋 Sobre o Projeto
O DevTrack é um gerenciador de tarefas estilo Kanban onde você pode adicionar empresas e cargos aos quais se candidatou, e movê-los entre diferentes colunas de status ("Para Aplicar", "Em Entrevista", "Oferta / Finalizado"). O projeto foi construído focando na interatividade do usuário e na retenção de dados nativa do navegador.

### 🛠️ Tecnologias Utilizadas
* **HTML5**: Estruturação semântica dividida em colunas lógicas de status.
* **CSS3**: 
  * Design limpo e moderno com uma paleta de cores escura (Dark Mode nativo).
  * Scroll horizontal (`overflow-x: auto`) para a área do quadro (board), imitando o comportamento de apps de gestão famosos.
  * Feedbacks visuais interativos, como mudanças de borda e fundo quando um card é arrastado sobre uma coluna.
* **JavaScript (ES6+)**:
  * Implementação completa da **HTML5 Drag and Drop API** (`dragstart`, `dragend`, `dragover`, `drop`) para mover cards entre as colunas fluidamente.
  * Armazenamento persistente utilizando o `localStorage`, garantindo que suas vagas continuem lá mesmo se a página for recarregada.

## ✨ Funcionalidades
* **Adição de Vagas**: Formulário intuitivo no cabeçalho para adicionar novas candidaturas rapidamente.
* **Drag and Drop (Arrastar e Soltar)**: Mova as vagas entre as colunas para atualizar seu status na jornada do processo seletivo.
* **Exclusão de Cards**: Possibilidade de deletar um card específico caso não queira mais rastrear aquela vaga.
* **Persistência de Dados**: O estado completo do quadro (incluindo a coluna exata onde o card foi solto) é salvo no LocalStorage do navegador.

## 📂 Estrutura de Arquivos
```text
├── index.html   # Estrutura principal com formulário e o Kanban Board
├── style.css    # UI/UX, Dark mode e estilização responsiva
├── script.js    # Lógica de manipulação do DOM, Drag & Drop e LocalStorage
└── README.md    # Documentação do projeto
