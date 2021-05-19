function reverse(aString: string): string {
  let reverse: string = "";

  for (let i = aString.length - 1; i >= 0; i--) {
    reverse += aString[i];
  }
  return reverse;
}

console.log(reverse("abcd"));
