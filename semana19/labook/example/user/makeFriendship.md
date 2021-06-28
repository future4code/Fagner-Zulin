# Make Friendship

Usado para fazer amizade com outro usuário.

- Obs: a amizade não precisa de aprovação, o outro usuário passa a ser seu amigo automaticamente.

**URL** : `/users/:id`

**Method** : `POST`

**Auth required** : `YES`

```json
{
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

**Dados necessários**

- É necessário informar como _req params_ o id do usuário que se deseja fazer amizade.

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "message": "Friendship made successfully"
}
```

---

## Error Response

**Condição** : Caso já tenha feito amizade anteriormente.

**Code** : `403 FORBIDDEN`

**Retorno** :

```json
{
  "message": "Friendship already exists"
}
```
