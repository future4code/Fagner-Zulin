# Feed

Usado para acessar os posts (feed) dos amigos.

- Obs: esse endpoint é retorna 5 posts por página.

**URL** : `/posts/feed/` ou `/posts/feed?page=`

**Method** : `GET`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req query_ o numero da pagina que se quer acessar. Por padrão, caso não seja informado, a primeira página sempre será retornada.

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "page": 1,
  "feed": [
    {
      "id": "c2321ce9-66d7-4291-b1ab-cace5d50527e",
      "photo": "https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv-1024x502.png",
      "description": "Dognhos niver",
      "type": "event",
      "authorId": "f13d61cb-d3f3-4407-bab0-a73ca26f399f",
      "createdAt": "2021-06-19T23:40:50.000Z"
    },
    {
      "id": "281e899b-669b-40c0-8f4b-ec120cdc9740",
      "photo": "https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv-1024x502.png",
      "description": "Dognhos lindos",
      "type": "normal",
      "authorId": "f13d61cb-d3f3-4407-bab0-a73ca26f399f",
      "createdAt": "2021-06-19T23:40:32.000Z"
    },
    {
      "id": "a26d2d35-c1a1-40d7-9631-f347897d553d",
      "photo": "https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv-1024x502.png",
      "description": "Dognhos fofos",
      "type": "normal",
      "authorId": "f13d61cb-d3f3-4407-bab0-a73ca26f399f",
      "createdAt": "2021-06-19T23:30:41.000Z"
    }
  ]
}
```
