// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

const lettersIn = (str) => {
  return str.includes('B') ? str + ' has the letter B': str + ' does not have the letter B'
}
console.log(lettersIn(mantra));
// 1b. Write the code that determines if there is an 'x' in mantra.

const lettersIn1 = (str) => {
  return str.includes('x') ? str + ' has the letter x': str + ' does not have the letter x'
}
console.log(lettersIn1(mantra));


// 1c. Write the code that determines if there is a 'v' in mantra.
const lettersIn2 = (str) => {
  return str.includes('v') ? str + ' has the letter v': str + ' does not have the letter v'
}
console.log(lettersIn2(mantra));

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

const letterInStr = (letter, str) => {
  return str.includes(letter) ? `${letter} is in ${str}`: `${letter} is not ${str}`
}
console.log(letterInStr('d', mantra));
// ------------------------------ Consider the following variables:
// ---------------------------------------------------------------------------//

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

const longerWord = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1; 
    } else {
        return str2; 
    }
}
console.log(longerWord(myDog, myCat));
console.log(longerWord(myCat, myDog));

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

const joinStr = (str1, str2) => {
  let strArr = []; 
    strArr.push(str1, str2)
    return strArr
}
console.log(joinStr(myDog, myCat))

// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"
const lowerCase = (str1, str2) => {
  console.log(str1.concat(' ', str2).toLowerCase());
}

lowerCase(myDog, myCat)
// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
for (var i = 0; i < myMessage.length; i++) {
  console.log(myMessage[i])
}

// 3b. Write the code that logs each letter of the message using map.

const sepLetters = (arr) => {
  let betterArr =[]
  for (var i = 0; i < arr.length; i++) {
    betterArr.push(arr[i])
  }
  return betterArr;
}
console.log(myMessage.split('').map(sepLetters))

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

const whileLoop = (str) => {
  let i = 0
  while (i < str.length) {
    return str.split('').map(sepLetters)
  }
}
console.log(whileLoop(myMessage));

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

myMessage.split("").forEach(x => {
  console.log(x);
});


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

const removeVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
                                          
  return str.split('').filter(x => vowels.indexOf(x) == -1).join('')  
}

console.log(removeVowel(testString)) 


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

const removeVowel1 = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (typeof str !== 'string') {return 'not a string'}                                    
  return str.split('').filter(x => vowels.indexOf(x) == -1).join('')
}
console.log(removeVowel1(23));
// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

const getCat = (arr) => {
  return arr.filter(x => x.animal == 'cat')
}
console.log(getCat(toonimals));


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

const notCat = (arr) => {
  let aniName = arr.filter(x => x.animal !== 'cat')
  console.log(aniName);
  return aniName.map(x => x.name).join(' ')
}
console.log(notCat(toonimals));


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const describeAnimal = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let {name} = toonimals[i]
    let {animal} = toonimals[i]
      console.log(`${name} is a ${animal}`)
  }
}

describeAnimal(toonimals) 