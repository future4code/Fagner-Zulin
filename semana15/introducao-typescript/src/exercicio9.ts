function transformToRNA(dna: string): string {
  let rna: string = "";
  for (let caracter of dna) {
    if (caracter === "A") rna += "U";
    if (caracter === "T") rna += "A";
    if (caracter === "C") rna += "G";
    if (caracter === "G") rna += "C";
  }

  return rna;
}

console.log(transformToRNA("ATTGCTGCGCATTAACGACGCGTA"));
