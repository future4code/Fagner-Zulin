# Exercício 1

a) Uma chave estrangeira é o elemento que estabelece a conexão (relação) entre duas tabelas.

b)

```SQL
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001",
  "Muito Legal",
  7.5,
  "001"
);
```

---

c)

> Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114467-fagner-zulin`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O erro ocorre por que havendo a relação entre a tabela rating e a tabela movies, só é possível adicionar avaliações em filmes que estão cadastrados préviamente na tabela movies;

---

d)

```SQL
ALTER TABLE Movies
DROP COLUMN rating;
```

---

e)

> Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114467-fagner-zulin`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Não é possível fazer a exclusão do dado pois ele está relacionado com outro dado em outra tabela.

# Exercício 2

a) A tabela serve como intermediaria, permitindo que seja feito o relacionamento de muitos para muitos.

---

b)

```SQL
INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
  "001",
  "002"
);
```

---

c)

> Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114467-fagner-zulin`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O erro ocorre por que para se inserir um registro na tabela MovieCast, tanto o ator quanto o filme deve estar registrado nas suas respectivas tabelas previamente.

---

d)

> Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114467-fagner-zulin`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível excluir um registro que esteja sendo referenciado como chave estrangeira em outra tabela.

# Exercício 3

a) A query seleciona todas as colunas das tabelas movies e rating onde há correspondência do id da tabela movie com o movie_id. O operador ON tem a função de terminar a condição de merge entre as tabelas.

---

b)

```SQL
SELECT Movies.id, name, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

# Exercício 4

a)

```SQL
SELECT Movies.id, name, rate, comment FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id;
```

---

b)

```SQL
SELECT Movies.id as "Movie id", Movies.name, Actor.id as "Actor id"
FROM MovieCast
JOIN Movies ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

---

c)

```SQL
SELECT AVG(rate), Movies.id, name FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.id);
```

# Exercício 5

a) A query faz a junção das informações das tabelas Actor e Movies por meio da tabela MovieCast. Tem dois Joins para selecionar tanto os registros da tabela Actor quanto da tabela Movies, com base nos ids registrados.

---

b)

```SQL
SELECT m.id as "Movie id", m.name as "Título", a.id as "Actor id", a.name as "Nome do ator"
FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

---

c)

> Error Code: 1054. Unknown column 'm' in 'field list'

É retornado esse erro, pois existe um erro de sintaxe na query, o correto é ponto no trecho `m,title` e não vigula.

---

d)

```SQL
SELECT m.name,  a.name, r.rate, r.comment
FROM Movies m
INNER JOIN  Rating r ON r.id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
LEFT JOIN Actor a ON a.id = mc.actor_id;
```

# Exercício 6

a) Trata-se de uma relação de muitos para muitos. Tendo em vista que o oscar pode ser ganhado diversas vezes, em edições diferentes, e um filme pode ganhar mais de um oscar

b)

```SQL
CREATE TABLE oscar_edition (
	id VARCHAR(255) PRIMARY KEY,
    date DATE NOT NULL
);

CREATE TABLE oscar_awards (
	id VARCHAR(255) PRIMARY KEY,
    award VARCHAR(255) NOT NULL
);

CREATE TABLE oscar_winners (
	edition_id VARCHAR(255),
    award_id VARCHAR(255),
    movie_id VARCHAR(255),
    FOREIGN KEY (edition_id) REFERENCES oscar_edition(id),
    FOREIGN KEY (award_id) REFERENCES oscar_awards(id),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```

---

d)

```SQL
SELECT m.name,  oe.date, oa.award FROM oscar_winners ow
INNER JOIN  Movies m ON m.id = ow.movie_id
JOIN oscar_awards oa ON oa.id = ow.award_id
JOIN oscar_edition oe ON oe.id = ow.edition_id;
```
