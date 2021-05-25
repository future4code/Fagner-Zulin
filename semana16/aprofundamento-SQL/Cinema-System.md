# Exercício 1

a) O comando exclui a coluna salary da tabela Actor

b) O comando altera a coluna gender da tabela Actor, passando a se chamar sex do tipo varchar de tamanho 6;

c) O comando altera o tipo da coluna gender na tabela Actor, passando a ser um varchar de tamanho 255

d)

```SQL
ALTER TABLE Actor
CHANGE gender gender varchar(100);
```

# Exercício 2

a)

```SQL
UPDATE Actor
SET name="Fernanda Torres", birth_date ="1965-09-15"
WHERE id="003";
```

---

b)

```SQL
UPDATE Actor
SET name="JULIANA PAES"
WHERE name= "Juliana Paes";

UPDATE Actor
SET name="Juliana Paes"
WHERE name= "JULIANA PAES";
```

---

c)

```SQL
UPDATE Actor
SET name="Marjorie Estiano" , birth_date = "1982-03-08", salary= 500000
WHERE id= "005";
```

---

d)

```SQL
UPDATE Actor
SET name="Rodrigo Santoro" , birth_date = "1975-08-22"
WHERE id= "010";
```

A operação não deu nenhum erro, no entanto não ouve nenhuma alteração no banco. O retorno foi:

> 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0

# Exercício 3

a)

```SQL
DELETE FROM Actor
WHERE name = "Fernanda Montenegro"
```

---

b)

```SQL
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

# Exercício 4

a)

```SQL
SELECT MAX(salary) from Actor;
```

---

b)

```SQL
SELECT MIN(salary) from Actor
WHERE gender="female";
```

---

c)

```SQL
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```

---

d)

```SQL
SELECT SUM(salary) FROM Actor;
```

# Exercício 5

a) A última Query retorna a quantidade de atores homens e mulheres

b)

```SQL
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

---

c)

```SQL
SELECT salary
FROM Actor
ORDER BY salary ASC;
```

---

d)

```SQL
SELECT salary, name
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

---

e)

```SQL
SELECT avg(salary), gender
FROM Actor
GROUP BY gender;
```

# Exercício 6

a)

```SQL
ALTER TABLE Movies
ADD playing_limit_date DATE;
```

---

b)

```SQL
ALTER TABLE Movies
CHANGE rating rating FLOAT;
```

---

c)

```SQL
UPDATE Movies
SET playing_limit_date = "2021-06-05"
WHERE id = "003";

UPDATE Movies
SET playing_limit_date = "1998-06-05"
WHERE id = "004";
```

---

d)

```SQL
DELETE FROM Movies
WHERE id = "001";

UPDATE Movies
SET blurb = "Testando hahaha"
WHERE id = "001";
```

Resultado do update:

> 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0

Como não existe mais o registro, o SQL não apresenta erro, mas também não altera nenhum registro.

# Exercício 7

a) 3 filmes estão avaliados acima de 7.5;

```SQL
SELECT COUNT(*)
FROM Movies
WHERE rating > 7.5;
```

---

b) A média é 8.66;

```SQL
SELECT AVG(rating)
FROM Movies;
```

---

c) O Total de filmes em cataz é de 1

```SQL
SELECT COUNT(*)
FROM Movies
WHERE playing_limit_date > CURDATE();
```

---

d) O Total de filmes que ainda não foram laçados é 0

```SQL
SELECT COUNT(*)
FROM Movies
WHERE release_date > CURDATE();
```

---

e) A maior nota é 10

```SQL
SELECT MAX(rating)
FROM Movies;
```

---

f) A menor nota é 8

```SQL
SELECT MIN(rating)
FROM Movies;
```

# Exercício 8

a)

```SQL
SELECT *
FROM Movies
ORDER BY name;
```

---

b)

```SQL
SELECT *
FROM Movies
ORDER BY name DESC
LIMIT 5;
```

---

c)

```SQL
SELECT *
FROM Movies
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

---

d)

```SQL
SELECT *
FROM Movies
ORDER BY rating DESC
LIMIT 3;
```
