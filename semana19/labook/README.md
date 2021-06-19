# LABOOK

## 💾 Sobre

---

O LaBook é um projeto, proposto pela equipe da Labenu, de uma rede social com o objetivo de aprofundar os conhecimentos em desenvolvimento de aplicações usando arquitetura em camadas e orientação a objetos. Os usuários podem fazer suas contas, criar posts de dois tipos ("evento" ou "normal"), comentá-los e curti-los também.

## 🎮 Tecnologias utilizadas

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
- **[uuid](https://github.com/uuidjs/uuid#readme)**

> Veja o arquivo [package.json](https://github.com/future4code/Fagner-Zulin/blob/semana19-projeto/semana19/labook/package.json)

---

## 🎯 Primeiros Passos

---

- Clonar este repositório
- Executar `npm install` para adicionar as dependências
- Criar um arquivo .env na raiz do projeto, (ou renomear o arquivo .env.example) e preencher as chaves a seguir com os valores apropriados:

  ```
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_SCHEMA=

   JWT_EXPIRES_IN=
   JWT_KEY=

   BCRYPT_COST=
  ```

- Executar `npm run migrations` para adicionar as tabelas ao banco de dados
- E por último, execute `npm run start`, e a api estará pronta para receber requisições

---

## 🚩 Endpoints

---

### 🔓 Endpoints Abertos

Endpoints que não requerem autenticação.

- [Login](example/user/login.md) : `POST /users/login/`
- [Signup](example/user/signup.md) : `POST /users/signup/`

---

### 🔒 Endpoints com Autenticação

Endpoints que requerem autenticação por meio do token.

- [Make Friendship](example/user/makeFriendship.md) : `POST /users/:id`
- [Undo Friendship](example/user/undoFriendship.md) : `DELETE /users/:id`

- [Create Post](example/post/create.md) : `POST /posts/create/`
- [Get Post By Id](example/post/getById.md) : `GET /posts/:id`
- [Feed](example/post/feed.md) : `GET /posts/feed/`
- [Feed By Type](example/post/feedByType.md) : `GET /posts/feed/`
- [Comment Post](example/post/comment.md) : `POST /posts/:id`
- [Like Post](example/post/like.md) : `PUT /posts/:id`
- [Unlike Post](example/post/unlike.md) : `DELETE /posts/:id`

---
