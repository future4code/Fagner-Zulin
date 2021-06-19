# Get Post By Id

Usado para pegar um post pelo seu id.

**URL** : `/posts/:id`

**Method** : `GET`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req params_ o id do post se deseja consultar.

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "post": {
    "createdAt": "2021-06-19T23:30:41.000Z",
    "authorId": "f13d61cb-d3f3-4407-bab0-a73ca26f399f",
    "description": "Dognhos fofos",
    "id": "a26d2d35-c1a1-40d7-9631-f347897d553d",
    "photo": "https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv-1024x502.png"
  }
}
```

---

## Error Response

**Condição** : Caso o post não seja encontrado.

**Code** : `404 NOT FOUND`

**Retorno** :

```json
{
  "message": "Post not Found"
}
```
