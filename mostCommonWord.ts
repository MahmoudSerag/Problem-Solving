/*
  Problem name: Most Common Word

  Difficulty level: Easy

  Problem description: 

    Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

    The words in paragraph are case-insensitive and the answer should be returned in lowercase.



  Examples: {

    Example 1:
      Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
      Output: "ball"
      Explanation: 
      "hit" occurs 3 times, but it is a banned word.
      "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
      Note that words in the paragraph are not case sensitive,
      that punctuation is ignored (even if adjacent to words, such as "ball,"), 
      and that "hit" isn't the answer even though it occurs more because it is banned.
    }

    Example 2: {
      Input: paragraph = "a.", banned = []
      Output: "a"
    }
  }
*/

// const removePunctuationAndRepeatedSpaces = (paragraph: string): string => {
//   const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
// };

// console.log(removePunctuationAndRepeatedSpaces('ahmed,'));

// const isBannedWord = (word: string, banned: string[]): boolean => {
//   for (let i = 0; i < banned.length; i++) {
//     if (word.toLowerCase() === banned[i]) return true;
//   }

//   return false;
// };

// const mostCommonWord = (paragraph: string, banned: string[]): string => {
//   let mostRepeatedWord: string = '',
//     wordCounter: number = 0;

//   paragraph = removePunctuationAndRepeatedSpaces(paragraph);
//   const splitParagraph = paragraph.split(' ');

//   for (let i = 0; i < splitParagraph.length; i++) {
//     if (!isBannedWord(splitParagraph[i], banned)) {
//       let currentWordCounter = 1;
//       for (let j = i + 1; j < splitParagraph.length; j++) {
//         if (splitParagraph[i].toLowerCase() === splitParagraph[j].toLowerCase())
//           currentWordCounter++;
//       }

//       if (currentWordCounter > wordCounter) {
//         wordCounter = currentWordCounter;
//         mostRepeatedWord = splitParagraph[i].toLowerCase();
//       }
//     }
//   }
//   return mostRepeatedWord;
// };

const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const words = paragraph.toLowerCase().match(/\w+/g) || paragraph;

  const wordFreq = new Map<string, number>();
  for (const word of words) {
    if (!banned.includes(word)) {
      const count = wordFreq.get(word) || 0;
      wordFreq.set(word, count + 1);
    }
  }

  let mostCommon = '';
  let maxFreq = 0;
  for (const [word, freq] of wordFreq.entries()) {
    if (freq > maxFreq) {
      mostCommon = word;
      maxFreq = freq;
    }
  }

  return mostCommon;
};

console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']));
