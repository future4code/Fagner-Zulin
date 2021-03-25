export const getUrlViaCep = (cep) => `https://viacep.com.br/ws/${cep}/json/`;

export const getUrlHgBrasil = (cidade, uf) => {
  return `https://api.hgbrasil.com/weather?format=json-cors&key=834076b2&city_name=${cidade},${uf}`;
};
