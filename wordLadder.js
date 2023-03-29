function findLadders(beginWord, endWord, wordList) {
  // Create a set of words to keep track of which words have been visited
  const visited = new Set();

  // Create a map to store the transformation sequences for each word
  const sequences = new Map();

  // Add the beginWord to the sequences map with an empty sequence
  sequences.set(beginWord, []);

  // Create a queue to hold the words that we need to explore
  const queue = [beginWord];

  // While the queue is not empty
  while (queue.length > 0) {
    // Get the first word in the queue
    const word = queue.shift();

    // If the word is the endWord, we're done
    if (word === endWord) {
      return sequences.get(endWord);
    }

    // Get all the words that differ by a single letter from the current word
    const nextWords = getNextWords(word, wordList);

    // For each of the next words
    for (const nextWord of nextWords) {
      // If the word has already been visited, skip it
      if (visited.has(nextWord)) continue;

      // Mark the word as visited
      visited.add(nextWord);

      // Add the next word to the queue
      queue.push(nextWord);

      // Update the transformation sequence for the next word
      sequences.set(nextWord, [...sequences.get(word), nextWord]);
    }
  }

  // If we reach here, it means there was no valid transformation sequence
  return [];
}

// Helper function to get all the words that differ by a single letter from the given word
function getNextWords(word, wordList) {
  const nextWords = [];
  for (const candidate of wordList) {
    if (differByOne(word, candidate)) {
      nextWords.push(candidate);
    }
  }
  return nextWords;
}

// Helper function to check if two words differ by a single letter
function differByOne(word1, word2) {
  if (word1.length !== word2.length) return false;
  let differences = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) differences++;
    if (differences > 1) return false;
  }
  return differences === 1;
}
const beginWord = 'hit';
const endWord = 'cog';
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
const sequences = findLadders(beginWord, endWord, wordList);
console.log(sequences);
