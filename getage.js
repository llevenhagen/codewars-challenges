function getAge(inputString){
  inputArray = inputString.split('')
  numberArray = inputArray.map(input => parseInt(input))
  for (let i = 0; i <= numberArray.length; i++) {
    for (let j = 0; j <= 9; j++) {
      if (numberArray[i] == j) {
        return numberArray[i]
      }
    }
  }
}

console.log(getAge("4 years old"))
