// Simple problems to solve using the native .reduce and .map array methods. Each of these problems can be solved in many
// different ways, but try to solve them using the requested higher order function.

// MAP

// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
const capitalize = function(string){
  const stringArr = Array.from(string);
  const upperCaseString = stringArr.map(word => {
    return word.toUpperCase();
  })
  return upperCaseString.join('');
}

// console.log(capitalize('This is a sentence that is going be be uppercased.'));

// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"

// METHOD 1 - Using .map()
// var swapCase = function(string = 'Default string') {
//   const stringArr = string.split(' ');
//   const newSentence = stringArr.map(function (word, index) {
//     // Can try using a reduce function in here as well instead of +=
//     let swapped = '';
//     if (index % 2) {
//       swapped += capitalize(word);
//     } else {
//       swapped += word;
//     }
//     return swapped;
//   });
//   //join() used to turn this back into a string
//   return newSentence.join(' ');
// }
// console.log(swapCase('wow this sentence is really tripping me out!'));

//  METHOD 2 - Using reduce (I know I skipped ahead here)
// const capitalize = function(string){
//   const stringArr = Array.from(string);
//   const upperCaseString = stringArr.map(word => {
//     return word.toUpperCase();
//   })
//   return upperCaseString.join('');
// }

// const swapCase = function(string = 'Default string') {
//   const stringArr = string.split(' ');
//   const newSentence = stringArr.reduce(function (sentence, nextWord, index) {
//     // Ensure every other word gets put through the capitlize function
//     index % 2 ? nextWord = capitalize(nextWord) : nextWord;
//     return `${sentence} ${nextWord}`;
    
//     // If we did not use a second parameter on reduce, below could be a way to get around it. Which would probably be very seldom.
//     // If it is not the first value in the array start joining it with the previous value to form a sentence
//     // return index === 0 ? nextWord : sentence + ' ' + nextWord;
//   }, '');
//   return newSentence;
// }
// console.log(swapCase());



// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
// const shiftLetters = function(string = 'hello') {
//   // Transform into an array to use .map
//   const stringArray = string.split('');
//   // Use .map to shift the letters into a new array
//   const convertString = stringArray.map(function (letter) {
//     // 1) Find the character code first // 2) We then need to +1 to the code
//     const characterCode = letter.charCodeAt(letter) + 1;
//     // Using the new code, retrieve the character itself
//     return String.fromCharCode(characterCode);
//   })
//   // Return the stringArray output
//   return convertString.join('');
// }
// console.log(shiftLetters());


// REDUCE

// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
const countLetters = function(string = 'abvcsdawerrghbyuthfdvd') {
  // Convert string to array
  const stringArray = Array.from(string);
  // Begin .reduce function, parameters will be (currentLetters, nextLetter)
  const letterCount = stringArray.reduce((currentLetters, nextLetter) => {
    // Push the string into the object as a property, and the count as a value
    // Need to have a check to see if the currentLetters === nextLetter ? X : Y
    // If it does not exist, make = 1
    if (currentLetters[nextLetter]) {
      currentLetters[nextLetter]++;
    } else {
      // If it does exist, increment
      currentLetters[nextLetter] = 1;
    }
    // Concise but less readable version
    // currentLetters[nextLetter] ? currentLetters[nextLetter]++ : currentLetters[nextLetter] = 1;

    return currentLetters;
  }, {})
  return letterCount;
};
console.log(countLetters());

// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to accomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
const isPresent = function(string = 'abc', target = 'x') {
  // Convert string to array
  const stringArray = Array.from(string);
  // Begin .reduce function, parameters will be (currentLetters, nextLetter)
  const letterCount = stringArray.reduce((currentLetters, nextLetter) => {
    // If needs to check whether the TARGET exists

    //Start here
    if (target === nextLetter) {
      currentLetters = true;
    }
    return currentLetters;
  }, false)
  return letterCount
}
console.log(isPresent());

// PARTY WITH MAP AND REDUCE *AT THE SAME TIME*

// Write a function decode that will take a string of number sets and decode it using the following rules:
// When each digit of each set of numbers is added together, the resulting sum is the ascii code for a single letter.
// Convert each set of numbers into a letter and discover the secret message! 
// Try using map and reduce together to accomplish this task.
// ex. decode("361581732726247521644353 4161492813593986955 84654117917337166147521") // => "abc"
// ex. decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
// => "secret-message"


// Once you successfully write a decoding function, use it to decode this secret message! 
// Use reduce to add the numbers up and find the ascii
const secret = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956"

const decode = function(string = secret) {
  // Return an array from string
  const stringArray = string.split(' ');
  // Use .map to return an array of numbers
  const numbersArray = stringArray.map(function(codes) {
    return String.fromCharCode(codes.split('').reduce( (currentValue, nextValue) => {
      return parseInt(currentValue) + parseInt(nextValue);
    }))
  }).join('')
  
  return numbersArray;
}

console.log(decode());


// Try to write a encoding function
