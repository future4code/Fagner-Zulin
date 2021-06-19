# LABOOK

## Primeiros Passos

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

## Endpoints

---

### Endpoints Abertos

Endpoints que não requerem autenticação.

- [Login](example/user/login.md) : `POST /users/login/`
- [Signup](example/user/signup.md) : `POST /users/signup/`

---

### Endpoints com Autenticação

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
