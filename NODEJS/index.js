// const fs=require('fs');
// console.log("A");
// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) {
//    throw err;
//   }
//   console.log( data);
// });
// console.log("B");



const fs=require('fs');
console.log("A");
const data=fs.readFileSync('file.txt', 'utf8');
console.log(data);

console.log("B");