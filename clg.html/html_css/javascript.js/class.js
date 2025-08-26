// class Car{
//     brand;
//     speed;
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
// }
// const car1= new Car("BMW",150);
// console.log(car1);



// class Car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
// }
// const car1= new Car("bmw",150);
// console.log(car1);
// const car2=new Car ("Hyundai",120);
// console.log(car2);




//default value
// class Car{
   
//     constructor(speed,brand="BMW"){
//         this.brand=brand;
//         this.speed=speed;
//     }
// }
// const car1= new Car(150,"TOYOTA");
// console.log(car1);


// class Car{
//    brand="BMW";
//     constructor(speed,brand){
//         if(brand!==undefined)
//         this.brand=brand;
//         this.speed=speed;
//     }
// }
// const car1= new Car(150);
// console.log(car1);



// class Car{
//    brand="BMW";
//     constructor(speed,brand){
//         if(brand!==undefined)
//         this.brand=brand;
//         this.speed=speed;
//     };
//     drive(){
//         console.log(`this car is manufactured by ${this.brand} and has a speed of ${this.speed}`);
        
//     }
// }
// const car1= new Car(150);
// console.log(car1);
// car1.drive();


class Car{
   brand="BMW";
    constructor(speed,brand){
        if(brand!==undefined)
        this.brand=brand;
        this.speed=speed;
    };
    drive(){
        console.log(`this car is manufactured by ${this.brand} and has a speed of ${this.speed}`);
        
    }
    static print(){
        console.log("Harsh");
        
    }
}
const car1= new Car(150);
console.log(car1);
//car1.drive();
Car.print();