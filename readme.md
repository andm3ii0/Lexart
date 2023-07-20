Introdução
Bem-vindo ao projeto Fullstack "Chatbot e Exportação de Histórico de Conversas". Este sistema foi desenvolvido com o objetivo de permitir aos usuários interagir com um chatbot inteligente, exportar o histórico de conversas e também apresenta um desafio chamado "Cyclotron".

Frontend
---------
Página do Chatbot

Acesse a [página do chatbot][https://lexart-beige.vercel.app/], que está pronta para responder a solicitações simples, como "hello", "good", "i want", e "goodbye". Além disso, o chatbot solicita informações de login ou cadastro e fornece opções quando o termo "loan" é mencionado. O histórico de conversas é armazenado quando o usuário menciona "goodbye".

Página de Exportação de Conversas

Para visualizar o [histórico de conversas][https://lexart-beige.vercel.app/messages], acesse a página de exportação de conversas. Informe o nome de usuário e a página exibirá o histórico de mensagens. Você também encontrará um botão para exportar o histórico em formato CSV.

Segunda Parte do Teste: Cyclotron

Acesse a página do [Cyclotron][https://lexart-beige.vercel.app/cyclotron] para testar visualmente a segunda parte do desafio. Essa parte do projeto foi disponibilizada no frontend para permitir que você teste o algoritmo "Cyclotron". A página contém dois campos de entrada para definir o tamanho da matriz e um campo para escolher o tipo de partícula. O resultado do algoritmo será exibido na tela.

Backend
--------

A API oferece as seguintes rotas:

POST /user: Criação de novo usuário. Requisição para criar um novo usuário no sistema.

POST /user/login: Login do usuário. Requisição para efetuar o login do usuário no sistema.

GET /user/:user: Informações do usuário. Requisição para obter informações de um usuário específico.

POST /messages: Criação de mensagem. Requisição para armazenar uma nova mensagem de conversa.

GET /messages/:user: Histórico de mensagens. Requisição para obter o histórico de conversas de um usuário específico.

Tecnologias Utilizadas
----------------------

Frontend

O frontend foi desenvolvido com as seguintes tecnologias:

- React: Utilizado para a construção de interfaces de usuário reativas e interativas.

- JavaScript: Linguagem de programação para a implementação de lógica e interações no frontend.

- StyledComponents: Biblioteca utilizada para estilização dos componentes de forma modular e reutilizável.

- ContextAPI: Utilizado para gerenciamento de estado entre os componentes.

Backend


O backend foi desenvolvido com as seguintes tecnologias:

- TypeScript: Linguagem utilizada para adicionar tipagem estática ao JavaScript, aumentando a robustez e manutenibilidade do código.

- Express: Framework utilizado para criação das rotas e manipulação das requisições HTTP.

- MongoDB: Banco de dados NoSQL utilizado para armazenar as informações dos usuários e histórico de conversas.

Instalação e Execução
---------------------

Para executar o projeto localmente, siga as seguintes etapas:

1. Certifique-se de ter o Node.js e o MongoDB instalados em seu ambiente de desenvolvimento.

2. Clone o repositório do projeto em sua máquina local.

3. Acesse a pasta do projeto e instale as dependências do frontend e do backend utilizando o comando `npm install` em cada diretório (frontend e backend).

4. Inicie o servidor do backend utilizando o comando `npm start` ou `npm run start` no diretório do backend.

5. Em seguida, inicie o servidor do frontend utilizando o comando `npm start` no diretório do frontend.

Com essas etapas, você poderá executar o projeto localmente e testar todas as funcionalidades do chatbot e da exportação de histórico de conversas.
