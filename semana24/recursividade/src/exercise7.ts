export default function findFirstCapitalLetter(str: string): string {
  if (str.length === 0) {
    return "";
  }
  const firstChar = str.charAt(0);
  if (firstChar === firstChar.toUpperCase()) {
    return firstChar;
  }
  return findFirstCapitalLetter(str.slice(1));
}
