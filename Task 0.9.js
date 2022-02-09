function vowels(word) {
  let arrVowel = [];
  let finalVowels = "";
  const vowels = "aeiou";
  const lowerCase = word.toLowerCase();
console.log('ww)
  for (let i = 0; i < lowerCase.length; i++) {
    if (vowels.indexOf(lowerCase[i]) !== -1) {
      if (arrVowel.indexOf(lowerCase[i]) == -1) {
        arrVowel.push(lowerCase[i]);
      }
    }
  }

  finalVowels = arrVowel.join();
  console.log("Vowels: " + finalVowels);
}
vowels("Umuzi");
