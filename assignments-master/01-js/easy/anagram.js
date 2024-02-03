/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//npx jest ./tests/

function isAnagram(str1, str2) {

  if (str1.length !== str2.length) {
     return false;
  }
  let count = new Array(256).fill(0);
  for (let i = 0; i < str1.length; i++) {
     count[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
     count[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }
  return !count.some((val) => val !== 0);
}

module.exports = isAnagram;
