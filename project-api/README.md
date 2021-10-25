# Informações do Projeto: <br>

Framework: NestJS <br>
ORM: Prisma <br>
Banco de Dados: SQLite <br>

Para executar é necessário ter o nodeJS 17.0.1 e o npm 8.1.0 instalado

## Como executar

Crie um arquivo .env e insira o seguinte comando:

DATABASE_URL="file:./dev.db"

Para instalar os módulos e rodar use os seguintes comandos: 

 npm install 

 npm run start 

## Comandos para testar

O uso do Postman é necessário para testar.

<b>Criar uma nova tarefa no banco de dados </b><br>

POST localhost:3000/tarefas/tarefas 
    Adcione esse JSON no Body; 
    Id e Completa consegue gerar automaticamente. 
    {   
        "id": 1,
        "desc": "test",
        "prazo": "2016-08-29T09:12:33.001Z",
        "completa": false 
    } 

<b>Pegar todas as tarefas no banco de dados </b>

GET 'localhost:3000/tarefas/tarefas'

<b>Pegar uma tarefa específica do banco de dados</b> <br>
O ID deve ficar no fim do URL, da seguinte forma:

GET 'localhost:3000/tarefas/tarefas/1'

<b>Editar uma tarefa do banco de dados </b> <br>
O ID deve ficar no fim do URL, da seguinte forma: <br>
Essa alteração irá modificar o estado da tarefa para completa.

PUT 'localhost:3000/tarefas/tarefas/1'

Usando o exemplo acima depois de fazer a alteração irá imprimir o seguinte JSON

    {   
        "id": 1,
        "desc": "test",
        "prazo": "2016-08-29T09:12:33.001Z",
        "completa": true 
    }

<b>Deletar uma tarefa específica do banco de dados </b> <br>
O ID deve ficar no fim do URL da seguinte forma <br>

DELETE 'localhost:3000/tarefas/tarefas/2'