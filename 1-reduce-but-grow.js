// Code Challenges 1/366

// 1st
// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// 2nd
// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr, 1);
//   return result;
// }

// 3rd
const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([4, 1, 1, 1, 4]));
