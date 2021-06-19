# Feed By Type

Usado para acessar os posts (feed) por tipo.

**URL** : `/posts/feed?type=`

**Method** : `GET`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req query_ o tipo (NORMAL ou EVENT), caso o contrário será retornado o feed normal.

---

## Success Response

**URL** : `/posts/feed?type=EVENT`

**Code** : `200 OK`

**Retorno**

```json
{
  "feed": [
    {
      "id": "c2321ce9-66d7-4291-b1ab-cace5d50527e",
      "photo": "https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv-1024x502.png",
      "description": "Dognhos niver",
      "type": "event",
      "created_at": "2021-06-19T23:40:50.000Z",
      "author_id": "f13d61cb-d3f3-4407-bab0-a73ca26f399f"
    }
  ]
}
```
