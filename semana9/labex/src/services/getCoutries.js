import axios from 'axios';

const getCoutries = async () => {
  try {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');

    const countiesNames = response.data.map((country) => ({
      name: country.translations.br,
    }));

    return countiesNames;
  } catch (err) {
    return err;
  }
};

export default getCoutries;
