// Code Challenges 5/366

// 1st
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump / mpg <= fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

// 2nd
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft ? true : false;
// }

// 3rd
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// }

// 4th
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return fuelLeft * mpg >= distanceToPump;
// }

// 5th
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
