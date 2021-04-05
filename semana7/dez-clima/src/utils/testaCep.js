export const testaInputCep = (valor) => {
  return /\D/g.test(valor) || valor.length < 8 || valor.length > 8;
};
