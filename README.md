# **Facebooks**
<img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" width="30" height="30" alt="evandroreichert" style="border-radius:70%">       

## Descrição

Este projeto é uma aplicação que permite ao usuário buscar livros através da API do Google Books e cadastrar livros com informações como título, autor, nota, data de início e fim da leitura, além de uma opinião sobre o livro. A aplicação permite também a exclusão de livros cadastrados.

## Funcionalidades

- **Busca de Livros**: Permite ao usuário buscar livros pela API do Google Books, utilizando o título.
- **Cadastro de Livros**: Após buscar um livro, o usuário pode cadastrar o livro no sistema com informações adicionais como:
  - Data de início e fim da leitura
  - Nota de 0 a 5
  - Opinião sobre o livro
- **Exclusão de Livros**: Permite excluir livros cadastrados.
- **Exibição de Livros Cadastrados**: Exibe todos os livros cadastrados com suas respectivas informações, como título, autor, nota e opinião.

## Tecnologias Utilizadas

- **Frontend**:
  - Vite
  - React
  - Axios
  - Tailwind CSS 
  
- **Backend**:
  - Node.js
  - Express
  - JSON (para armazenamento temporário dos livros)

 ### Não há conexão com banco de dados. Os livros cadastrados serão apagados quando o servidor for reiniciado.

## Como Rodar o Projeto

### 1. Clonando o Repositório

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/evandroreichert/facebooks.git
cd facebooks
```

### 2. Instalando Dependências

No diretório do projeto, instale as dependências do backend e frontend.

#### Backend

```bash
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3. Rodando o Projeto

#### Backend
No diretório raiz, inicie o servidor:

```bash
npm start
```
O servidor estará disponível em http://localhost:3000.

#### Frontend
No diretório do frontend, inicie a aplicação:

```bash
cd frontend
npm run dev
```
O servidor estará disponível em http://localhost:5173 ou em outra porta configurada.

### 4. Testando as Funcionalidades
Agora, você pode testar as funcionalidades do projeto:

- **Buscar Livros:** Digite o título de um livro na caixa de busca e veja os resultados da API do Google Books.
- **Cadastrar Livro:** Após selecionar um livro, preencha as informações adicionais e clique em "Cadastrar Livro".
- **Excluir Livro:** Clique no botão "Excluir" ao lado de um livro cadastrado para removê-lo.
- **Ver Livros Cadastrados:** Veja todos os livros cadastrados na seção "Livros Cadastrados".

## Endpoints do Backend

- **GET /api/livros**: Retorna todos os livros cadastrados.
- **POST /api/livros/cadastrar**: Cadastra um novo livro no sistema.

## Autor

[<img src="https://www.github.com/evandroreichert.png" width="70" height="70" alt="evandroreichert" style="border-radius:70%">](https://www.github.com/evandroreichert)