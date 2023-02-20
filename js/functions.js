const getStringLength = (string, length) => {
  if (string.length <= length) {
    return true;
  }
  return false;
};

const getMatchPalindrome = (palindrome) => {
  const half = Math.floor(palindrome.length / 2);
  for (let i = 0; i < half; i++) {
    if (palindrome[i] !== palindrome[palindrome.length - i - 1]) {
      return false;
    }
    return true;
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
