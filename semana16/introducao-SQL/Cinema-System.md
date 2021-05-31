# Exercício 1

a) O comando create table é para criar uma tabela; varchar(n) representa o tipo texto e recebe o tamanho maximo do texto; primary key indica que o campo é a chave primária daquele conjunto de dados; not null impede que o registro seja feito como vazio, tornando o campo obrigatório; E date é representa o tipo data

b) O comando `SHOW database` retorna o nome do banco é um segundo campo _information_schema_; E o comando `SHOW tables` retorna os nomes das tabelas daquele banco.

c) O `DESCRIBE Actor` comando retorna informações sobre o _schema_ da tabela, como, por exemplo: os nomes das colunas, os tipos e as restrições de cada campo.

# Exercício 2

a)

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```

---

b)

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Angelina Jolie",
  10200000,
  "1975-06-04",
  "female"
);
```

> Erro: _**Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' - Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'**_

O Erro acontece por que chaves primarias são, por padrão, campos únicos, não podendo se repetir na tabela.

---

c)
Errada:

```SQL
INSERT INTO Actor (id, name, salary)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

> Erro: _**Error Code: 1136. Column count doesn't match value count at row 1 - Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1**_

O erro se deu pelo fato de query conter mais valores do que colunas indicadas.

Correta:

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

---

d)
Errada:

```SQL
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18",
  "male"
);
```

> Erro: _**Error Code: 1364. Field 'name' doesn't have a default value - Código de erro: 1364. O campo 'nome' não tem um valor padrão**_

O erro acontece por que a coluna nome está definida como not null e não foi passado na query um valor para ela.

Correta:

```SQL
INSERT INTO Actor (id,name,  salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18",
  "male"
);
```

---

e)

Errada:

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  1979-03-26,
  "female"
);
```

> Erro: _**Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1**_

O erro ocorre por que a data foi passada como numeros e não como um texto.

Correta:

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);
```

---

f)
Ator:

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Kit Harington",
  3500000,
  "1986-12-26",
  "male"
);
```

Atriz:

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007",
  "Viola Davis",
  30500000,
  "1965-08-11",
  "female"
);
```

# Exercício 3

a)

```SQL
SELECT * FROM Actor
WHERE gender = "female";
```

---

b)

```SQL
SELECT salary FROM Actor
WHERE name = "Tony Ramos";
```

---

c)

```SQL
SELECT * FROM Actor
WHERE gender = "invalid";
```

O retorno foi de campos vazios, pois não há correspondência no banco com o valor passado no where;

---

d)

```SQL
SELECT id, name, salary FROM Actor
WHERE salary < 500000;
```

---

e)

```SQL
SELECT id, nome from Actor WHERE id = "002";
```

> Erro: _**Error Code: 1054. Unknown column 'nome' in 'field list' - Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'**_

O erro ocorre porque o campo nome está errado, o correto é name.

Correta:

```SQL
SELECT id, name FROM Actor WHERE id = "002";
```

# Exercício 4

a) A query faz uma consulta na tabela Actor, informando que é para retornar todos os campos dos registros que o campo name comece com as letras "A" ou "J" e que o campo salary tenha um valor maior que 300000.

---

b)

```SQL
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

---

c)

```SQL
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
```

---

d)

```SQL
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%g%" OR name LIKE "%G%")
AND (salary > 350000 AND salary < 900000);
```

# Exercício 4

a)

```SQL
CREATE TABLE Movies (
	id varchar(255) PRIMARY KEY,
    name varchar(255) NOT NULL,
    blurb text NOT NULL,
    release_date date NOT NULL,
    rating integer NOT NULL
);
```

---

b)

```SQL
INSERT INTO Movies (id, name, blurb, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

---

c)

```SQL
INSERT INTO Movies (id, name, blurb, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

---

d)

```SQL
INSERT INTO Movies (id, name, blurb, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
```

---

e)

```SQL
INSERT INTO Movies (id, name, blurb, release_date, rating)
VALUES(
  "004",
  "Central do Brasil",
  "Em Central do Brasil, Dora (Fernanda Montenegro) trabalha escrevendo cartas para analfabetos na estação Central do Brasil, no centro da cidade do Rio de Janeiro. Ainda que a escrivã não envie todas as cartas que escreve - as cartas que considera inúteis ou fantasiosas demais -, ela decide ajudar um menino (Vinícius de Oliveira), após sua mãe ser atropelada, a tentar encontrar o pai que nunca conheceu, no interior do Nordeste.",
  "1998-04-03",
  8
);

```

# Exercício 6

a)

```SQL
SELECT id, name, rating FROM Movies
WHERE id = "004";
```

---

b)

```SQL
SELECT * FROM Movies
WHERE name = "Se Eu Fosse Você";
```

---

c)

```SQL
SELECT id, name, blurb FROM Movies
WHERE rating > 7;
```

# Exercício 7

a)

```SQL
SELECT * FROM Movies
WHERE name LIKE "%vida%";
```

---

b)

```SQL
SELECT * FROM Movies
WHERE name LIKE "%central%" OR blurb LIKE "%central%";
```

---

c)

```SQL
SELECT * FROM Movies
WHERE release_date < "2021-05-24";
```

---

d)

```SQL
SELECT * FROM Movies
WHERE release_date < "2021-05-24"
AND (name LIKE "%central%" OR blurb LIKE "%central%")
AND rating > 7;
```
