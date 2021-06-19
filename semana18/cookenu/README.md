# Cookenu

---

### 💻 Sobre o projeto

---

Esse projeto nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ela possui todas as funcionalidades mais comuns em redes sociais:

1. **Cadastro**

   Como o projeto está no início, o usuário só precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

2. **Login**

   Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar **um** **token.**

3. **Informações do próprio perfil**

   A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email)

4. **Criar receitas**

   O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação

5. **Seguir usuário**

   Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.

6. **Feed**

   Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.

7. **Muito mais...**

   Editar e deletar receitas, deletar conta de usuário e resetar a senha.

---

### 🛠🛠 Tecnologias utilizadas

---

As seguintes ferramentas foram usadas na construção do projeto:

- **[NodeJS](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[Typescript](https://www.typescriptlang.org/)**
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)**
- **[cors](https://github.com/expressjs/cors#readme)**
- **[dotenv](https://github.com/motdotla/dotenv#readme)**
- **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)**
- **[knex](http://knexjs.org/)**
- **[nodemailer](https://nodemailer.com/about/)**
- **[uuid](https://github.com/uuidjs/uuid#readme)**

> Veja o arquivo [package.json](https://github.com/future4code/Fagner-Zulin/blob/semana18-projeto/semana18/cookenu/package.json)

---

### 🚀 Executando o Projeto

---

1. Clone esse repositório na sua máquina
2. Abra o CLI da sua preferência na pasta do clone e rode os seguintes comandos:

   - `npm install`

3. No arquivo .env.exemple estão todas as variáveis de ambiente necessárias para esse projeto. Se preferir, pode renomea-lo para .env e usá-lo para setar as informações:

   - Credênciais de acesso do banco de dados;
   - Uma palavra chave para o JWT (de preferência um hash)
   - O custo do bcrypt, sugiro que seja 12;
   - Credênciais para envio de e-mail

4. No arquivo queries.sql está as queries de criação das tabelas do Banco de Dados, pode usá-lo no seu DB, ou, se preferir, executa as queries a seguir:

   ```SQL
   CREATE TABLE cookenu_user (
   	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role ENUM("ADMIN", "NORMAL") NOT NULL DEFAULT "NORMAL",
    password VARCHAR(255) NOT NULL
   );
   ```

   ```SQL
   CREATE TABLE cookenu_recipes (
   	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    creator_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES cookenu_user(id)
   );
   ```

   ```SQL
   CREATE TABLE cookenu_followers (
   	follower_id VARCHAR(255) NOT NULL,
    followed_id VARCHAR(255) NOT NULL,
    PRIMARY KEY(follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES cookenu_user(id),
    FOREIGN KEY (followed_id) REFERENCES cookenu_user(id)
   );
   ```

5. Execute o comando `npm run start` em seu CLI

6. Para testar os endpoints, será necessário um Rest Client, como o Insominia ou o Postman, ou qualquer outro de sua preferência.

---

### 🚩 Endpoints

---

- **Signup**

  **Método:** POST

  **Path:** `/signup`

  **Entradas:**

  Body

  ```json
  {
    "name": "Alice",
    "email": "alice@lbn.com",
    "password": "123456",
    "role": "NORMAL"
  }
  ```

  **Saídas**

  Body

  ```json
  {
    "token": "token de acesso"
  }
  ```

  **Observações**:

  - O campo `role` pode assumir o valor de _'ADMIN'_ ou _'NORMAL'_

---

- **Login**

  **Método:** POST

  **Path:** `/login`

  **Entradas:**

  Body

  ```json
  {
    "email": "alice@lbn.com",
    "password": "123456"
  }
  ```

  **Saídas**

  Body

  ```json
  {
    "token": "token de acesso"
  }
  ```

---

- **Reset Password**

  **Método:** PUT

  **Path:** `/reset`

  **Entradas:**

  Body

  ```json
  {
    "email": "alice@lbn.com"
  }
  ```

  **Saídas**

  Body

  ```json
  {
    "message": "Your new password will be sent to your email"
  }
  ```

  **Observações**:

  - Uma nova senha será enviada para o e-mail do usuário.

---

- **Pegar próprio perfil**

  **Método:** GET

  **Path:** `/user/profile`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  **Saídas**

  Body

  ```json
  {
    "id": "id do usuário",
    "name": "Alice",
    "email": "alice@lbn.com"
  }
  ```

---

- **Pegar perfil de outro usuário**

  **Método:** GET

  **Path:** `/user/:id`

  **Entradas:**

  Path Param

  ```
  id: "id do usuário"
  ```

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  **Saídas**

  Body

  ```json
  {
    "id": "id do usuário",
    "name": "Bob",
    "email": "bob@lbn.com"
  }
  ```

---

- **Criar receita**

  **Método:** POST

  **Path:** `/recipe`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  Body

  ```json
  {
    "title": "título da receita",
    "description": "descrição da receita"
  }
  ```

  **Saídas**

  Body

  ```json
  {
    "message": "Recipe created"
  }
  ```

---

- **Pegar receita**

  **Método:** GET

  **Path:** `/recipe/:id`

  **Entradas:**

  Path Param

  ```
  id: "id da receita"
  ```

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  **Saídas**

  Body

  ```json
  {
    "id": "id da receita",
    "title": "Ovo Frito",
    "description": "Pega o ovo, põe na frigideira e reza!",
    "cratedAt": "31/12/2020"
  }
  ```

---

- **Seguir usuário**

  **Método:** POST

  **Path:** `/user/follow`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  Body

  ```json
  {
    "userToFollowId": "id do usuário que se deseja seguir"
  }
  ```

  **Saídas**

  Body

  ```json
  {
    "message": "Followed"
  }
  ```

---

- **Deixar de seguir usuário**

  **Método:** POST

  **Path:** `/user/unfollow`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  Body

  ```json
  {
    "userToUnfollowId": "id do usuário que se deseja deixar de seguir"
  }
  ```

  **Saídas**

  Body

  ```json
  {
    "message": "Unfollowed"
  }
  ```

---

- **Pegar feed de receitas**

  **Método:** GET

  **Path:** `/user/feed`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  **Saídas**

  Body

  ```json
  {
    "feed": [
      {
        "id": "id da receita",
        "title": "título da receita",
        "description": "descrição da receita",
        "createdAt": "31/12/2020",
        "userId": "id do usuário que criou a receita",
        "userName": "nome do usuário que criou a receita"
      }
    ]
  }
  ```

---

- **Editar receita**

  **Método:** PUT

  **Path:** `/recipe/:id`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  Body

  ```json
  {
    "title": "Feijão",
    "description": "Ferve o feijão com água"
  }
  ```

  **Observações**

  - A edição pode ser dos dois campos (_title_ ou _description_) ou só de um deles.
  - Usuário "normal" só é capaz de editar as receitas próprias dele.

---

- **Deletar receita**

  **Método:** DELETE

  **Path:** `/recipe/:id`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  **Observações**

  - Usuário "normal" só é capaz de deletar as receitas próprias dele.

  - Usuário "admin" é capaz de deletar as receitas de qualquer um.

---

- **Deletar usuário**

  **Método:** DELETE

  **Path:** `/user/:id`

  **Entradas:**

  Headers

  ```
  Authorization: "token de autenticação"
  ```

  **Observações**

  - Somente usuários "admin" podem deletar contas de usuários.

---
