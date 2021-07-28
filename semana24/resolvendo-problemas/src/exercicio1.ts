export default function oneEditAway(str1: string, str2: string): boolean {
  if (str1.length === str2.length - 1 && str1.endsWith(str2[str2.length - 2])) {
    return true;
  }

  if (str1.length === str2.length + 1 && str1.startsWith(str2)) {
    return true;
  }

  if (onlyOneCharacter(str1, str2)) {
    return true;
  }

  return false;
}

function onlyOneCharacter(str1: string, str2: string): boolean {
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diff++;
    }
  }
  return diff === 1;
}
