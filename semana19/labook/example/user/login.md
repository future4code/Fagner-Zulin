# Login

Usado para autenticação do usuário.

**URL** : `/users/login/`

**Method** : `POST`

**Auth required** : NO

**Dados necessários**

```json
{
  "email": "[endereço de e-mail válido]",
  "password": "[senha valida]"
}
```

**Exemplo**

```json
{
  "email": "ale@mail.com",
  "password": "asdas1213@asda"
}
```

---

## Success Response

**Code** : `200 OK`

**Retorno**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZWFhOTI4LWY2ZDctNDMwMi1iNGY5LWE5NWU1Y2E3ZTc5MyIsImlhdCI6MTYyNDEzMDE5MywiZXhwIjoxNjI0MjE2NTkzfQ.Cxh1y1LMcTqcj3MJ3qKPiy0wI2NffjrY5JMsTZtOq8o"
}
```

---

## Error Response

**Condição** : Caso o email e/ou a senha estejam erradas.

**Code** : `401 UNAUTHORIZED`

**Retorno** :

```json
{
  "message": "Invalid credentials"
}
```
