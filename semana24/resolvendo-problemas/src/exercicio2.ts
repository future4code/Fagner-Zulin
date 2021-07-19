interface HashTable {
  [index: string]: number;
}
export default function getCharAndCount(str: string): string {
  const table: HashTable = {};
  let string = "";
  for (const char of str) {
    if (table[char] === undefined) {
      table[char] = 1;
    } else {
      table[char]++;
    }
  }

  for (const [key, value] of Object.entries(table)) {
    string += key + String(value);
  }

  if (string.length > str.length) {
    return str;
  }

  return string;
}
