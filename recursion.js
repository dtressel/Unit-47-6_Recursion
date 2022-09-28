/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // base case
  if (i >= nums.length) return 1;
  // normal case
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  // base case
  if (i >= words.length) return 0;
  // normal case
  let longestLength = longest(words, i + 1);
  return words[i].length > longestLength ? words[i].length : longestLength;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  // base case
  if (i >= str.length) return '';
  // normal case
  if (i % 2 === 0) return str[i] + everyOther(str, i + 1);
  return '' + everyOther(str, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  // base case
  if (i >= Math.floor(str.length / 2)) return true;
  // normal case
  if (str[i] === str[str.length - 1 - i] && isPalindrome(str, i + 1)) return true;
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // base case
  if (i >= arr.length) return -1;
  // normal case
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  // base case
  if (i >= str.length) return '';
  // normal case
  return revString(str, i + 1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i = 0) {
  // base case
  if (i >= Object.keys(obj).length) return [];
  // normal case
  let value = obj[Object.keys(obj)[i]];
  if (typeof value === 'string') {
    return [value, ...gatherStrings(obj, i + 1)];
  }
  if (typeof value === 'object') {
    return [...gatherStrings(value), ...gatherStrings(obj, i + 1)];
  }
  return [...gatherStrings(obj, i + 1)];
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, startIndex = 0, endIndex = arr.length - 1) {
  arrLength = endIndex - startIndex + 1;
  if (startIndex > endIndex) {
    return -1;
  }
  let testIndex = Math.floor(arrLength / 2) + startIndex;
  let midpoint = arr[testIndex];
  if (midpoint < val) {
    return binarySearch(arr, val, testIndex + 1, endIndex);
  }
  else if (midpoint > val) {
    return binarySearch(arr, val, startIndex, testIndex - 1);
  }
  else {
    return testIndex;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
