// Code Challenges 2/366

// 1st
// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// console.log(reverseSeq(5));

// 2nd
// const reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();
// };

// console.log(reverseSeq(5));

// 3rd
// const reverseSeq = (n) => {
//   return [...Array(n)].map((el, i) => i + 1).reverse();
// };

// console.log(reverseSeq(5));

// 4th
// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

// console.log(reverseSeq(5));

// 5th
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
