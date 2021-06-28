# Exercício 3

c) A primeira implementação acessa diretamente a função que faz a validação dos personagens, ou seja, ela conhece exatamente quem faz esse tipo de validação. Já a segunda implementação é feita com ajuda da tipagem, a função não conhece exatamente quem vai fazer a validação, mas espera alguém que receba um personagem e devolva um boolean, independente de quem for fazer isso.

# Exercício 4

a) Devemos criar um Mock para a função validateCharacter, já que essa é uma dependencia de performAttack e já tem sua propria suite de testes. Dessa forma testamos performAttack de forma isolada.
