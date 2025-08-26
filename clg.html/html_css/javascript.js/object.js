// Object1={
//   name1:"Harsh",
//   specification:"MERN",
// }

// console.log(Object1);
// Object1.name1="Royal";
// Object1.age="21"
// console.log(Object1);


//   "use strict"
// function show() {
//   return this;
// }
// console.log(show() );


// function show() {
//   return this;
// }
// console.log(show() );


// car={
//   drive: function(){
//     return this.brand+this.speed;
  
//   }
// }
// car1={
//   brand:"Suzuki",
//   speed: "150",
// }
//console.log(car.drive.call(car1));


  //  let counter=0;
  // function add(){
  //   let counter=0;
  //   counter++;
  //   return counter;
  // }
  // let x=0;
  // x=add();
  //  x=add();
  //   x= add();
  //    console.log(x);

//closure
    //   function add(){
    //   let counter =0;
    //   return function (){
    //     counter++;
    //     return counter;
    //   }
    // }
    //  let x = add();
    //  x();
    //  x();
    //  let y=x();
    //  console.log(y);
     
    // console.log(x());
    
    //nested object
    // const obj ={
    //   name:"Royal",
    //   class:"4year",
    //   address:{
    //     state:"U.P",
    //     City:"Lucknow",
    //   }
    // }
    // console.log(obj.address);

    //  const obj ={
    //   "first name":"Royal",
    //   class:"4year",
    //   address:{
    //     state:"U.P",
    //     City:"Lucknow",
    //   }
    // }
    // console.log(obj["first name"]);
    
    //  const obj ={
    //  " name":"Royal",
    //   class:"4year",
    //   address:{
    //     state:"U.P",
    //     City:"Lucknow",
    //   }
    // }
    //    console.log(Object.keys(obj));
    // console.log(Object.values(obj));
    // console.log(Object.entries(obj));
    // for (let key in obj){
    // console.log(key+" "+obj[key])}
    // console.log(obj.hasOwnProperty('City'));
function great(name,callback){
  console.log(`Hello,${name}`);
  callback();
}
    function sayHello(){
      console.log('Hello there..');  
    }
    great("Harsh",sayHello);