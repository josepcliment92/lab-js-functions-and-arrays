// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

if (num1 > num2) {
return num1
}
else if (num2 > num1) {
    return num2
}
else if (num1 === num2) {
    return num1
}
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {

    if (arrayOfWords.length === 0 ) {
        return 0;
    }

    let result = "";

    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > result.length) {
            result = arrayOfWords[i];
        }
    }
return result
  /* for (let i = 0; i < arrayOfWords.length; i++) {

    let eachWord = arrayOfWords[i];
    
    for (let i = 0; i < eachWord.length; i++) {
        charactersPerWord = eachWord[i]

        if (charactersPerWord > )

    }
 } */

   }




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {

    let result = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
    let eachNumber = arrayOfNumbers[i];
    result += eachNumber
}

return result
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    let result = 0;
    
if (arrayOfNumbers.length === 0 ) {
    return 0;
}

    for (let i = 0; i < arrayOfNumbers.length; i++) {
    let eachNumber = arrayOfNumbers[i];
    result += eachNumber;
    }
    let newThing = result / arrayOfNumbers.length

    return newThing 
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
        
    if (arrayOfWords.length === 0) {
        return null;
    }
        if (arrayOfWords.includes(wordToSearch)) {
            return true
        }
        else {
            return false
        }




}
