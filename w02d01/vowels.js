const numberOfVowels = (string) => {
  if (!string) return null;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let count = 0;
  for (const char of string) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
};

module.exports = numberOfVowels;
