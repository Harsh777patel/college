//destructuring of array
let name ="Hasrh";
let[a1,a2,a3,a4,a5]= name;
console.log(a1);

//another example
let arr=[1,2,3,4,5,6,7];
let [num1, ,num3,...others]=arr;
console.log(num1);
console.log(num3);

//rest operator sign  (...)
console.log(others);

//destructuring of object
// const obj={
//     names:"Harsh",
//     age:21,
//     gender:"Male",
// }
// const {names,age}=obj;
// console.log(name);

// //rename
// const {names:fname,}=obj;
// console.log(fname);
// console.log(obj);

//nested
const obj={
    names:"Harsh",
    age:21,
    gender:"Male",
address:{
    state:"U.P",
    City:"Lucknow",
}
}
// const {address:{state,City}}=obj;
// console.log(state,City);

const {address:{state,City},...other}=obj;
console.log(other);


//Destructuring of String

let naam="Harsh"
let[b1,b2,...oth]=naam;
console.log(a1);
console.log(a2);
console.log(oth);







