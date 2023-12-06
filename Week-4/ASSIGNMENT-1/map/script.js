function calcWordFrequencies() {
  const words = prompt("Enter a list of words separated by spaces:").split(" ");
  const wordFrequencies = new Map();

  words.forEach(word => {
    const lowercaseWord = word.toLowerCase();
    if (wordFrequencies.has(lowercaseWord)) {
      wordFrequencies.set(lowercaseWord, wordFrequencies.get(lowercaseWord) + 1);
    } else {
      wordFrequencies.set(lowercaseWord, 1);
    }
  });

  wordFrequencies.forEach((frequency, word) => {
    console.log(`${word} ${frequency}`);
  });
}

calcWordFrequencies();
