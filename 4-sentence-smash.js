// Code Challenges 4/366

// 1st
// function smash(words) {
//   return words.join(' ');
// }

// 2nd
// const smash = (words) => words.join(" ");

// 3rd
function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i !== words.length - 1) result += " ";
  }
}

console.log(smash(["hello", "amazing", "world"]));
