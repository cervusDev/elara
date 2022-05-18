<h6 align="center">
   Monorepo elara 🚀
</h4>

<br>

## 💻 Projeto

## 🎉 Iniciando o projeto

- Observer a versão node da sua máquina, `14.14.31` ou acima 
- Na raiz do projeto, rode o comando yarn para instalar as dependências.

## 📚 Subindo o servidor

- Finalizado a instalação, em packages/server execute o comando `touch .env .mysql` e copie as variáveis de example.env na raiz de server.
- Ainda em packages/server, rode o comando docker-compose up -d para iniciar o servidor mysql
- Caso o yarn não reconhecer as libs `@prisma/client` & `@nesjs/common` rode o comando yarn add @prisma/client @nesjs/common
- Após esses passos na raiz do server rode `yarn prisma generate` e na raiz do projeto `yarn prisma:migrate`
na pasta packager/server

## 📚 Subindo o cliente
- Finalizado o up do banco de dados, em packages/client execute o comando `touch .env` e copie as variáveis de example.env na raiz de client.

## 🎉  Rodando o projeto

- Rode o comando na raiz do projeto separamente os comandos `yarn server:dev` & `yarn client` para iniciar o cliente e o servidor.
