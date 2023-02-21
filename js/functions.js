const getStringLength = (string, length) => string.length <= length;

const getMatchPalindrome = (palindrome) => {
  const tempString = palindrome.toLowerCase().replaceAll(' ', '');
  const half = Math.floor(tempString.length / 2);
  for (let i = 0; i < half; i++) {
    return tempString[i] === tempString[tempString.length - i - 1];
  }
};

const getNumber = (string) => {
  let numb = string.match(/\d/g);
  numb = numb.join('');
  return numb;
};

const getNewString = (string, minLength, symbols) => {
  const newString = string.padStart(minLength, symbols);
  return newString;
};

getStringLength();
getMatchPalindrome();
getNumber();
getNewString();
