# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento de um sistema que integra empresas a usuários. E que usuários podem solicitar a entrega dos produtos disponibilizados pelas empresas.

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.
<br><br>

## Link da API

- https://server-hamburgueria.herokuapp.com/

<br><br>

# Users

<br>

### <strong> \* CADASTRO \*</strong>

- POST /register <br/>
- POST /signup <br/>
- POST /users

<pre>
Formato da Requisição - 

{<br>
    "email": "fulano@mail.com",<br>
    "password": "123456",<br>
    "name": "Fulano",<br>
}

Formato da Resposta - 

{<br>
    "accessToken": "token",<br>
    "user": {<br>
        "email": "fulano@mail.com",<br>
        "name": "Fulano",<br>
        "id": 3<br>
    }
}
</pre>

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.<br><br><br>

### <strong> \* LOGIN \*</strong>

- POST /login <br/>
- POST /signin

<pre>
Formato da Requisição - 

{<br>
    "email": "fulano@mail.com",<br>
    "password": "123456",<br>
}

Formato da Resposta - 

{<br>
    "accessToken": "token",<br>
    "user": {<br>
        "email": "fulano@mail.com",<br>
        "name": "Fulano",<br>
        "id": 3<br>
    }
}
</pre>

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"<br><br><br>

### <strong> \* LEITURA DE USUÁRIOS\*</strong><br><br>

- GET/users

Esse endpoint pode ser usado para realizar leitura dos usuários cadastrados na lista de "Users". Esses dados serão trazidos com os comentários que o usuário fez em produtos cadastrados e o carrinho de compras com itens que adicionou em seções anteriores.<br><br><br><br>

# Produtos<br>

### <strong> \* LISTAR TODOS OS PRODUTOS \*</strong>

- GET /produtos <br/>

Esse endpoint listará todos os produtos junto com os comentários relacionados aa ele.<br><br>

- GET /produtos/id <br/>

Esse endpoint listará um produto específico junto com os comentários relacionados aa ele.

<br><br><br>

# Comments<br>

### <strong> \* CADASTRO \*</strong>

- POST /comments <br/>

<pre>
Formato da Requisição - 

{
    "userId": 1,
    "productId": 1,
    "comment": "Esse produto é de muita qualidade"
}

Formato da Resposta - 

{
    "userId": 1,
    "productId": 1,
    "comment": "Esse produto é de muita qualidade"
    "id": 1
}
</pre>

Esse endpoint pode ser usado para realizar o registro de um novo cometário com um dos usuários cadastrados na lista de "Users" e um dos produtos cadastrados na lista de "Produtos",como também, precisa que o token de acesso esteja em igualdade com o userId passado no corpo do objeto JSON, ou seja, é necessário estar logado na plataforma<br><br>

- GET /comments <br/>

Esse endpoint retornará todos os comentários feitos por todos os usuários.<br><br><br><br>

# Cart<br>

- GET /cart <br/>

Esse endpoint listará todos os produtos, mas é necessário que o usuário esteja logado para visualizar.<br><br>

- POST /cart <br/>
<pre>
Formato da Requisição -

{
"userId": 1,
"productId": 1,
}

Formato da Resposta -

{
"userId": 1,
"productId": 1,
"id": 1
}

</pre>

Esse endpoint permite o cadastro de itens no carrinho de compras realcionados ao usuário que o grava. Precisa que o token de acesso esteja em igualdade com o userId passado no corpo do objeto JSON, ou seja, é necessário estar logado na plataforma
