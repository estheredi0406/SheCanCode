//Question 2
function sumDigits(n) {
  let somme = 0;
  let digits = n.toString();
  let correctDigits = digits.split("");
  correctDigits.forEach((CorrectDigit) => {
    somme += parseInt(CorrectDigit);
  });
  return somme;
}

console.log(sumDigits("123485664"));

//b

function power(exponent, base) {
  return Math.pow(base, exponent);
}
console.log(power(2, 3));

//c

function reverseWords(sentence) {
  let wordss = sentence.split(" ");
  let reverseCorrectSentence = wordss.reverse().join(" ");

  return reverseCorrectSentence;
}

console.log(reverseWords("Hello my anem is Edi"));

/* d recursion is less efficient than iteration when it uses more memory than iteration.Iteration would be a better 
choice in this case when we are dealing with a large number of iterations, when the dataSet is large.*/
