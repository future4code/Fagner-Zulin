//a)
function fatorialWord(value: number): number {
  if (value <= 1) {
    return 1;
  }
  return fatorialWord(value - 1) * value;
}

// console.log(fatorialWord("mesa".length));

//b

function anagrama(aString: string): number {
  const wordLength: number = aString.length;
  const lettersEqual: number = wordLength - ([...new Set(aString)].length - 1);

  return fatorialWord(wordLength) / fatorialWord(lettersEqual);
}
console.log(anagrama("anagrama"));
