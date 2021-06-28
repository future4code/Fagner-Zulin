# Undo Friendship

Usado para desfazer amizade com outro usuário.

- Obs: o outro usuário deixa de ser seu amigo automaticamente.

**URL** : `/users/:id`

**Method** : `DELETE`

**Auth required** : `YES`

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req params_ o id do usuário que se deseja desfazer a amizade.

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "message": "Friendship undo successfully"
}
```

---

## Error Response

**Condição** : Caso não tenha amizade com o usuário informado.

**Code** : `403 FORBIDDEN`

**Retorno** :

```json
{
  "message": "Friendship doesn't exists"
}
```
