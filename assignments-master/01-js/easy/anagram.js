/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//npx jest ./tests/

function isAnagram(str1, str2) {

   // Remove any non-alphanumeric characters and convert to lowercase
   const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
   const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

   // Check if the length of the strings is the same after cleaning
   if (cleanStr1.length !== cleanStr2.length) {
       return false;
   }

   // Create character frequency maps for both strings
   const charFrequency1 = {};
   const charFrequency2 = {};

   // Populate character frequency map for str1
   for (let char of cleanStr1) {
       charFrequency1[char] = (charFrequency1[char] || 0) + 1;
   }

   // Populate character frequency map for str2
   for (let char of cleanStr2) {
       charFrequency2[char] = (charFrequency2[char] || 0) + 1;
   }

   // Check if the character frequency maps are equal
   for (let char in charFrequency1) {
       if (charFrequency1[char] !== charFrequency2[char]) {
           return false;
       }
   }

   return true;
}

module.exports = isAnagram;
