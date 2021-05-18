function ageHistory(year: number, age?: string) {
  enum PERIOD {
    "100000AC" = "Pré-história",
    "4000AC" = "Idade Antiga",
    "476DC" = "Idade Média",
    "1453DC" = "Idade Moderna",
    "1789DC" = "Idade Contemporânea",
  }
  const value: string = age ? age : "DC";
  const date: string = String(year) + value;
  let result: string;

  switch (date) {
    case "100000AC":
      result = PERIOD["100000AC"];
      break;
    case "4000AC":
      result = PERIOD["4000AC"];
      break;
    case "476DC":
      result = PERIOD["476DC"];
      break;
    case "1453DC":
      result = PERIOD["1453DC"];
      break;
    case "1789DC":
      result = PERIOD["1789DC"];
      break;
    default:
      console.error(
        "É necessário que o ano esteja correto e a era seja AC ou DC"
      );
      break;
  }

  result && console.log(result);
}

ageHistory(1789);
