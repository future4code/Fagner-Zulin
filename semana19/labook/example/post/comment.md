# Comment Post

Usado para criar um novo comentário para um post.

**URL** : `/posts/:id`

**Method** : `POST`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req params_ o id do post a ser comentado.

```json
{
  "comment": "[o comentário]"
}
```

**Exemplo**

```json
{
  "comment": "Lindos mesmo"
}
```

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "message": "Commented"
}
```

---

## Error Response

**Condição** : Caso falte algum o campo.

**Code** : `400 BAD REQUEST`

**Retorno** :

```json
{
  "message": "The comment field is required"
}
```

---

**Condição** : Caso não seja encontrado o post.

**Code** : `404 NOT FOUND`

**Retorno** :

```json
{
  "message": "Post not Found"
}
```
