// Code Challenges 3/366

// 1st
// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// 2nd
// function hero(bullets, dragons) {
//   return bullets / 2 >= dragons ? true : false;
// }

// 3rd
// function hero(bullets, dragons) {
//   return bullets / 2 >= dragons;
// }

// 4th
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
