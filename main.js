const input = "Im gon get mine more than I get got"; // step 1
// const input = 'turpentine and turtles'; // step 14 WORKING returns: UUEEIEEAUUEE

const vowels = ["a", "e", "i", "o", "u"]; // step 2

const resultArray = []; // step 3

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]); // steps 8 - 9
    } 
  } 
  if (input[i] === 'e') {
    resultArray.push(input[i]); // step 10
  } else if (input[i] === 'u') {
    resultArray.push(input[i]); // step 11 - no 'u' in phrase
  }
}

console.log(`"${input}" in whale talk is:`);

// console.log(resultArray); // step 12

let resultString = resultArray.join(''); // step 13

console.log(`((${resultString.toUpperCase()}!!))`); 
