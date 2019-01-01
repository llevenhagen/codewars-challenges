// find key/value pairs in recipe
// find key/value pairs in available
// make sure every recipe ingredient is present in available
// find values of matching keys in both
// divide recipe value by available value, put in array
// find smallest value from divided array - return that number rounded down
//
//
//



// function cakes(recipe, available) {
//   let recipeKeys = Object.keys(recipe)
//   let availableKeys = Object.keys(available)
//   if (availableKeys < recipeKeys) {
//     return 0
//   }
//   else {
//     for (item in recipeKeys) {
//       for (available in availableKeys) {
//         if (!recipeKeys[item] == availableKeys[available]) {
//           return 0
//         }
//         else {
//           return recipe
//         }
//       }
//     }
//   }
// }
function cakes(recipe, available) {
  let recipeKeys = Object.keys(recipe).sort()
  let availableKeys = Object.keys(available).sort()
  console.log(recipeKeys, availableKeys);
    for (let i = 0; i < recipeKeys.length; i++) {
      for (let j = 0; j < availableKeys.length; j++) {
        if (!recipeKeys[i] == availableKeys[j]) {
          return 0
        }
        else {
          let recipeKey = Object.entries(recipe)[i][0]
          let availableKey = Object.entries(available)[i][0]
          return ??
        }
      }
    }
}


  var recipe, available;
    recipe = {flour: 500, sugar: 200, eggs: 1};
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
  console.log(cakes(recipe, available))
