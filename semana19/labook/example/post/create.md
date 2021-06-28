# Create Post

Usado para criar um novo post.

**URL** : `/posts/create/`

**Method** : `POST`

**Auth required** : YES

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

```json
{
  "photo": "[link de uma foto]",
  "description": "[descrição do post]",
  "type": "[tipo do evento, deve ser 'NORMAL' ou 'EVENT']"
}
```

**Exemplo**

```json
{
  "photo": "https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv-1024x502.png",
  "description": "Dognhos fofos",
  "type": "NORMAL"
}
```

---

## Success Response

**Code** : `201 CREATED`

**Retorno**

```json
{
  "message": "Created"
}
```

---

## Error Response

**Condição** : Caso falte algum dos campos.

**Code** : `400 BAD REQUEST`

**Retorno** :

```json
{
  "message": "The description, photo and type fields are requiered"
}
```

---

**Condição** : Caso o tipo não seja válido.

**Code** : `400 BAD REQUEST`

**Retorno** :

```json
{
  "message": "Type must be NORMAL or EVENT"
}
```
