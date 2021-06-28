# Unlike Post

Usado para descurtir um post.

**URL** : `/posts/:id`

**Method** : `DELETE`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req params_ o id do post a ser descurtido.

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "message": "Unliked"
}
```

---

## Error Response

**Condição** : Caso o Post não seja encontrado.

**Code** : `404 NOT FOUND`

**Retorno** :

```json
{
  "message": "Post not Found"
}
```

---

**Condição** : Caso o post não esteja curtido pelo usuário.

**Code** : `403 FORBIDDEN`

**Retorno** :

```json
{
  "message": "Post was not liked"
}
```
