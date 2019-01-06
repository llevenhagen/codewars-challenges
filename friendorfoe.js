// function getAge(inputString){
//   inputArray = inputString.split('')
//   numberArray = inputArray.map(input => parseInt(input))
//   for (let i = 0; i <= numberArray.length; i++) {
//     for (let j = 0; j <= 9; j++) {
//       if (numberArray[i] == j) {
//         return numberArray[i]
//       }
//     }
//   }
// }
//
// console.log(getAge("4 years old"))
//
// =================
// var isSquare = function (n) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isSquare(25));
// // console.log(Math.sqrt(3));
//
//
// ===========
//
// function friend(friends){
//   let myFriends = [];
//   for (friend in friends) {
//     if (friends[friend].length == 4) {
//       myFriends.push(friends[friend])
//     }
//   }
//   return myFriends;
// }
//
// console.log(friend(["Ryan", "Kieran", "Mark"]));
// ================
//
// function squareDigits(num){
// let splitArray = num.toString().split('')
// let squareNums = []
// for (let single in splitArray) {
//   let numb = Number(splitArray[single])
//   let square = numb * numb
//   squareNums.push(square)
// }
// let joinedSqNums = squareNums.join('')
// return Number(joinedSqNums)
// }
//
//
// console.log(squareDigits(9119));
// =============
//
// function digital_root(n) {
//   if (n.length === 1) {
//     return n
//   } else {
//     let sum = 0;
//     let numberArray = n.toString().split('').map(number => sum += Number(number))
//     loop:
//     while (sum.length > 1) {
//       let newsum = 0
//       numberArray = sum.toString().split('').map(number => newsum += Number(number))
//       sum = newsum
//     }
//     if (sum.toString().length>1) {
//       return digital_root(sum)
//     } else {
//       return sum
//     }
//   }
// }
//
//
// console.log(digital_root(456));
// =========

// function calculateYears(principal, interest, tax, desired) {
//     // loop where sum +=1 each time through while bankaccount < desired
//     let bankAccount = principal
//     let years = 0;
//     while (bankAccount < desired) {
//       bankAccount = bankAccount + (bankAccount * interest) - ((bankAccount * interest) * tax)
//       // let taxesTotal = ((bankAccount * interest) * tax)
//       // bankAccount = afterInterest - taxesTotal
//       // console.log(bankAccount);
//       years += 1
//     }
//     return years
//     // take the initial amount, multiply by interest and add.
//     // take that amount, multiply by tax and subtract
//     // once bankaccount = desired, return sum
// }
//
//
// console.log(calculateYears(1000, 0.05, 0.18, 1100))

// function likes(names) {
//   // if array is empty, return 'no one likes this'
//   // if the array has one, return 'name likes this'
//   // if the array has two items, return 'one AND two likes this'
//   // if the array has more than two items, 'one COMMA two COMMA AND three likes this'
//   if (names[0] == null) {
//     return 'no one likes this'
//   }
//   else if (names.length == 1) {
//     return `${names[0]} likes this`
//   }
//   else if (names.length == 2) {
//     return `${names[0]} and ${names[1]} like this`
//   }
//   else if (names.length == 3) {
//     let lastName = `and ${names[names.length-1]} like this`
//     names.pop()
//     firstString = names.join(', ');
//     return firstString + ' ' + lastName
//   }
//   else if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//   }
// }
//
// console.log(likes(['john', 'albert', 'callie', 'robert', 'alex', 'marigold']))
//
// function getMiddle(s) {
// let middle = s.length / 2
// console.log(middle);
// if (s.length % 2 == 0) {
//   return (s.split('')[middle - 1]) + (s.split('')[middle])
// } if (s.length % 2 != 0) {
//   return s.split('')[Math.floor(middle)]
// }
// }
//
// // find word length
// // divide by two
// // IF even, print that letter and the one after
// // if odd, print math.ceiling
// console.log(getMiddle("testling"));
//
// function isValidWalk(walk) {
//   if (walk.length == 10) {
//   let n=0;
//   let s=0;
//   let e=0;
//   let w=0;
//     for (let i =0; i<walk.length; i++) {
//       // console.log(walk[i]);
//       if (walk[i] === 'n') {
//         n++
//       }
//       else if (walk[i] === 's') {
//         s++
//       }
//       else if (walk[i] === 'e') {
//         e++
//       }
//       else if (walk[i] === 'w') {
//         w++
//       }
//     }
//     if (n === s && e === w) {
//       return true
//     }
//     else {
//       return false
//     }
//   } else {
//     return false
//   }
//   }
// // }
// // array.length has to be 10
// // s has to equal n and w has to equal e
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

// function list(names){
//   if (names.length === 0) {
//     return ''
//   } else {
//     let lastName;
//     (names.length === 0 && names.length === 1) ?
//     lastName = names[0].name :
//     lastName = ` & ${names[names.length-1].name}`;
//
//     let namesArray = [];
//     for (let i = 0; i<names.length-1; i++) {
//       namesArray.push(names[i].name)
//     }
//     return (namesArray.join(', ')+ lastName)
//   }
//   console.log(names[0]);
// }
//
// // var lastname ='& lastname'
// // for loop reach into every object, pull the name, add it to an array, and then list them out
// // concatenate list made by joining them (',') + varlastname
// console.log(list([]));

// for loop - even get touppercase, odd get tolowercase, both pushed to array, array joined together and spit out
// function toWeirdCase(string){
//   let spacesArray = [];
//   for (let i=0; i<string.length; i++) {
//     if (string[i] === ' '){
//       spacesArray.push(i)
//     }
//   }
//   console.log(spacesArray);
//   let joinedArray = string.replace(/\s/g, '')
//   // console.log(joinedArray);
// let weirdArray = [];
//   for (let i=0; i<joinedArray.length; i++) {
//     if (i % 2 === 0) {
//       weirdArray.push(joinedArray[i].toUpperCase())
//     } else {
//       weirdArray.push(joinedArray[i].toLowerCase())
//     }
//   }
//   for (i=0; i<spacesArray.length; i++){
//     weirdArray.splice(spacesArray[i], 0, ' ')
//   }
//   return weirdArray.join('')
// }
// function toWeirdCase(string){
//   let spacesArray = [];
//   for (let i=0; i<string.length; i++) {
//     if (string[i] === ' '){
//       spacesArray.push(i)
//     }
//   }
//   let weirdArray = string.split(' ');
//   // console.log(weirdArray);
//   let weirdWordArray = []
//   for (let i=0; i<weirdArray.length; i++) {
//       let wordArray = []
//     for (let j=0; j<weirdArray[i].length; j++) {
//       if (j % 2 === 0) {
//         wordArray.push(weirdArray[i][j].toUpperCase())
//       } else {
//         wordArray.push(weirdArray[i][j].toLowerCase())
//       }
//     }
//     return weirdWordArray.push(wordArray.join('').join(' ');
//   }
//   return weirdWordArray.join(' ')
// }
// console.log(toWeirdCase('This is a test'));

// function findEvenIndex(arr) {
//   let sum =0;
//   for (let i=0; i<arr.length; i++) {
//     sum += arr[i]
//   }
//   let half = sum/2
//   let secondSum=0;
//   let answer;
//   let middle;
//   for (let j = 0; j<arr.length; j++) {
//       secondSum += arr[j]
//       answer = arr[j]
//       // console.log(secondSum);
//       if (secondSum >= half) {
//         middle = j;
//     }
//   }
//   // console.log(middle);
//   for (let k=middle-1; k<=arr.length; k++) {
//     console.log(arr[middle]);
//   }
// }
//
// console.log(findEvenIndex([1,2,3,4,5,6]));
// function toCamelCase(str){
// let array = str.split('')
// for (let i=0; i<array.length; i++) {
//   if (array[i]=== '-' || array[i] === '_'){
//     array[i+1] = array[i+1].toUpperCase()
//   }
// }
// let noDash = array.filter(char => char !== '-' && char !== '_')
//
// return noDash.join('')
// }
//
// // loop through string - look for dash, identify and capitalize next character and make into new array. eliminate dashes and make back into string
// console.log(toCamelCase("The-Stealth-Warrior"));

// function isPangram(string){
//   let array = string.toLowerCase().replace(/[\d. !'-:]+/g, "").split('')
//   console.log(array);
//   let unique = [...new Set(array)];
//   return (unique.length == 26)
// }
//
// // split into array. create new array and loop through first array - if the character doesn't exist in new array, push to new array. check length of new array. if 26, then true. if not, false.
// var string = "This isn't a pangram! 3"
// console.log(isPangram(string))

// function goodVsEvil(good, evil) {
//   good = good.split(' ')
//   evil = evil.split(' ')
//   let goodPoints = 0;
//   let goodAbilities = [1, 2, 3, 3, 4, 10];
//   let evilAbilities = [1, 2, 2, 2, 3, 5, 10]
//   let evilPoints = 0;
//   for (let i = 0; i < 6; i++) {
//     goodPoints += (goodAbilities[i] * good[i])
//   }
//   for (let j = 0; j < 7; j++) {
//     evilPoints += (evilAbilities[j] * evil[j])
//   }
//   if (goodPoints > evilPoints) {
//     return 'Battle Result: Good triumphs over Evil'
//   }
//   if (evilPoints > goodPoints) {
//     return 'Battle Result: Evil eradicates all trace of Good'
//   }
//   if (goodPoints === evilPoints) {
//     return 'Battle Result: No victor on this battle field'
//   }
// }
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))

// here is the code it wouldn't let me submit for the roman numerals one:
// function solution(roman){
// let sum = 0;
// let romanArray = roman.split('');
// romanArray.map(item => {
//   let itemIndex = roman.indexOf(item)
//   if (item === 'I' && roman[itemIndex +1] === 'V'){
//     sum += 4
//     romanArray.splice(item, 2)
//   } if (item === 'I' && roman[itemIndex +1] === 'X'){
//     sum += 9
//     romanArray.splice(item, 2)
//   }
// })
// romanArray.map(item => {
//   item === 'I' ? sum+= 1 : ''
//   item === 'V' ? sum+= 5 : ''
//   item === 'X' ? sum+= 10 : ''
//   item === 'L' ? sum+= 50 : ''
//   item === 'C' ? sum+= 100 : ''
//   item === 'D' ? sum+= 500 : ''
//   item === 'M' ? sum+= 1000 : ''
// })
// return sum
// }
// // loop through the roman and convert into translation integer, then add the translation to the sum
// console.log(solution('V'));

// NOT MY SOLUTION - I COULDN'T GET IT SO I SKIPPED TO THE SOLUTION TO LEARN:
// longestPalindrome=function(s){
//   var longest = 0;
//   var length = s.length;
//
//   for(var i=0; i < length; i++){
//     for(var j = i+1; j <= length; j++) {
//       var str = s.slice(i,j);
//       var l = str.length
//       if(isPalindrome(str) && longest < l) {
//         longest = l;
//       }
//     }
//   }
//   return longest;
// }
//
// function isPalindrome(s) {
//   var arr = s.split("");
//   return s == arr.reverse().join("");
// }
// // make s into array and do a loop and pop off each letter and make the array into a new string, push that string into an array of strings.
// // reverse the string, do the same process. then compare the two arrays for matching, push length of matches to an array. find the longest length, and there is the answer.
// console.log(longestPalindrome('baa'));
// function sortArray(array) {
//   let oddNumbers = []
//   let oddIndexes = []
//   for (number in array) {
//     if (array[number] % 2 !== 0) {
//       oddNumbers.push(array[number])
//       oddIndexes.push(Number(number))
//     }
//   }
//   console.log(oddNumbers);
//   console.log(oddIndexes);
//   oddNumbers.sort(function(a, b){return a-b})
//     console.log(oddNumbers);
//   for (let i=0; i<oddIndexes.length; i++) {
//     array.splice(oddIndexes[i], 1, oddNumbers[i])
//   }
//   return array
// }
// // loop through the array, - if the number is odd, push it into an array and its index into another new array
// // map new odd number array and reorganize each item in ascending order.
// // loop through index array, use it to replace that index from the original array with the same [i] as from the numbers array
// // loop through, insert the number into
// sortArray([64, 19, 3, 26, 88, 92, 98, 96, 49, 70, 53, 22, 46, 68, 7, 12, 50, 83, 95])

// function dashatize(num) {
//   let array = num.toString().replace(/-/g, '').split('')
//   if (array[0] == 'N') {
//     return 'NaN'
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] % 2 !== 0) {
//         array.splice(i, 0, '-')
//         i++
//         array.splice(i + 1, 0, '-')
//         i++
//       }
//     }
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === '-' && array[i + 1] === '-') {
//         array.splice(i, 1)
//       }
//     }
//     if (array[0] === '-') {
//       array.shift()
//     }
//     if (array[array.length - 1] === '-') {
//       array.pop()
//     }
//
//     joinedArray = array.join().replace(/,/g, '')
//     return joinedArray
//   }
// };
//   // split, map, insert dash before and after, if array[0]== dash, shift. if last in array == dash, pop. join
// console.log(dashatize(-28369))


// function encrypt(text, n) {
//
// }
//
// function decrypt(encryptedText, n) {
//
// }
//
// console.log(encrypt("This is a test!", 1))

// function upArray(arr){
//   for (item in arr){
//     parseInt(arr[item])
//     if (arr.length == 0 || arr[item] > 10 || arr[item] < 0 || typeof arr[item] !== 'number'){
//       return null
//     }
//   }
//     let string = ((parseInt(arr.join('')) + 1).toString()).split('')
//     let newNumArray = []
//     for (let i=0; i<string.length; i++) {
//       newNumArray.push(parseInt(string[i]))
//     }
//     return newNumArray;
// }
//
// // join initial array, turn into number, add one, split into new array, output.
// console.log(upArray([NaN]))

// function solution(string) {
//   string = string.split('')
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase())
//       string[i] = ' ' + string[i]
//   }
//   return string.join('')
// }
// console.log(solution('camelCasing'))
//
// Math.round = function(number) {
//   let decimalSplit = number.toString().split('.')
//   if (!decimalSplit[1]){
//     return parseInt(decimalSplit[0])
//   } else {
//   // console.log(decimalSplit)
//   let firstNumber = parseInt(decimalSplit[0]);
//   let secondNumber = 0;
//   // console.log(typeof decimalSplit[1]);
//   let array = decimalSplit[1].split('')
//   // console.log(array);
//   let numArray = [];
//   array.map(function(item) {
//     numArray.push(parseInt(item))
//   })
//   // console.log(numArray);
//   while (numArray.length > 1) {
//     if (numArray[numArray.length -1] <= 5){
//       numArray.pop()
//     }
//     if (numArray[numArray.length - 1] > 5) {
//       numArray[numArray.length - 2] +=1
//       numArray.pop()
//     }
//   }
//   if (numArray[0]<5) {
//     return firstNumber
//   } else {
//     return firstNumber +1
//   }
// }
// };
// // WOULD NOT ACCEPT MY ROUND FUNCTION - THIS IS THE ONE THAT GOT UPVOTED THE MOST:
// // Math.round = function(number) {
// //   return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
// // };
//
// Math.ceil = function(number) {
//   let decimalSplit = number.toString().split('.')
//   console.log(decimalSplit[1]);
//   if (!decimalSplit[1]){
//     return parseInt(decimalSplit[0])
//   } else {
// return parseInt(decimalSplit[0]) +1
// }
// };
//
// Math.floor = function(number) {
//   let decimalSplit = number.toString().split('.')
//   if (!decimalSplit[1]){
//     return parseInt(decimalSplit[0])
//   } else {
//   return parseInt(decimalSplit[0])}
// };
//
// console.log(Math.round(22.933));
// console.log(Math.ceil(0));
// console.log(Math.floor(0));


// function revrot(str, sz) {
//   if (str.length < sz || sz <= 0 || str.length === 0) {
//     return ""
//   } else {
//     let sum = 0;
//     for (let i = 1; i < str.length / sz; i++) {
//       sum = i;
//     }
//     array= str.split('')
//     array.splice(sz*sum)
//     let newArrayToJoin = []
//     for (let i=0; i<sum; i++){
//       let smallArray = array.slice(i*sz, (i+1)*sz)
//       // console.log(smallArray);
//       let smallArraySum = 0;
//       for (let j=0; j<sz; j++){
//         let num = parseInt(smallArray[j])
//         smallArraySum += num
//         // console.log(smallArray[j);
//       }
//       if (smallArraySum % 2 === 0){
//         newArrayToJoin.push(smallArray.reverse().join(''))
//       } else {
//         let addToBeginning = smallArray.shift();
//         smallArray.push(addToBeginning);
//         newArrayToJoin.push(smallArray)
//       }
//     }
//     return newArrayToJoin.join('').replace(/,/g, '')
//   }
// }
//
// console.log(revrot("733049910872815764", 5))

// function dataReverse(data) {
// let sum = data.length / 8;
// reverseArray = []
// for (let i = 0; i<sum; i++){
//   let spliced = data.splice(0, 8);
//   for (let j=7; j>=0; j--){
//     reverseArray.unshift(spliced[j])
//   }
// }
// return reverseArray
// }
//
// const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
//    console.log(dataReverse(data1))

function findChildren(dancingBrigade){
   let capitalArray = dancingBrigade.match(/([A-Z])/g).sort()
   let lowercaseArray = dancingBrigade.match(/([a-z])/g).sort()
   for (let i=0; i<lowercaseArray.length; i++){
     for (let j=0; j<capitalArray.length; j++){
       if (capitalArray[j].toLowerCase()===lowercaseArray[i]){
         lowercaseArray.splice(i, 0, capitalArray[j])
         capitalArray.splice(j, 1)
       }
     }
   }
   return lowercaseArray.join('')
};


console.log(findChildren("beeeEBb"));
