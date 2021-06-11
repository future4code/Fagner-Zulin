# Exercício 1

a) Acho que o uso de strings permitem aumentar as possibilidades de conbinações, tranzendo mais segurança para o dado. Sim, acho que números são mais fáceis de manipular do que strings mais complexas

# Exercício 2

a) O código estabelece uma conexão com o banco de dados e faz a inserção dos dados na tabela user

b)

```SQL
CREATE TABLE User(
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
```

# Exercício 3

a) ela força que a inferença do tipo seja de uma string. É necessario, pois o process.env pode retornar uma string ou um undefined

# Exercício 7

a) ela força que a inferença do tipo seja any. É necessario, pois o verify pode retornar lançar um erro
