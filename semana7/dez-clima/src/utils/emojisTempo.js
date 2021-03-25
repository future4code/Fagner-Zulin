import storm from "../img/storm.png";
import snow from "../img/snow.png";
import rain from "../img/rain.png";
import fog from "../img/fog.png";
import clear_day from "../img/clear_day.png";
import clear_night from "../img/clear_night.png";
import cloud from "../img/cloud.png";
import cloudly_day from "../img/cloudly_day.png";
import cloudly_night from "../img/cloudly_night.png";

export const imagemClima = (condicao) => {
  const condicoesImagens = {
    storm: storm,
    snow: snow,
    rain: rain,
    fog: fog,
    clear_day: clear_day,
    clear_night: clear_night,
    cloud: cloud,
    cloudly_day: cloudly_day,
    cloudly_night: cloudly_night,
  };

  return condicoesImagens[condicao];
};
