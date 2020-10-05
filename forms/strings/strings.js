let quoteString = "Failure is simply the opportunity to begin again this time more intelligently.";

let upperCaseString = quoteString.toUpperCase();
alert(upperCaseString)

console.log(`Upper case string is: ${upperCaseString}`)

authorString = "- Henry Ford";

completeString = quoteString.concat(authorString);
alert(completeString)

found = completeString.includes("Henry")

if (found) {
  console.log(`Henry was in the quote string`);
} else {
  console.log('Henry was NOT in the quote string');
}

secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

lowerCaseString = secondQuote.toLowerCase();
alert(lowerCaseString)

console.log(`Lower cased string is: ${lowerCaseString}`)

let n = parseInt(prompt("Please enter a number"));

let answer = n + 10;

console.log(`The number ${n} + 10 is ${answer}.`);