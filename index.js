// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}
function reverseString(str) {
  return str ? reverseString(str.substr(1)) + str[0] : str;
}

function isPalindrome(myString) {
  let l = myString.length;

  if (l < 2) {
    return true;
  } else if (myString[l - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, l - 1));
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    // console.log(array.pop());
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, integer) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === integer) {
    return true;
  } else {
    return includesNumber(array.slice(1), integer);
  }
}
