//verify by hardik sir

//arrow function is only callable ,not constructible.
//normal function can be calling uaed new keyword. 



// Arguments objects are not availablein arrow functions.
// hrjthekrjt
// rtyret
// function add(x,y){
//     console.log(arguments);
//     return x+y;
// }
// add(10,15);
//output:25

// const  add=(x,y)=>{
//     console.log(arguments);
//     return x+y;
// }
// add(10,15);
//output:arguments is not defined
 
//do not create constructor in arrow function
// function  car(name){
//     this.brand=name;
// }
// const carData = new car("maruti")
// console.log(carData);
//output:car {brand: 'maruti'}

// const  car=(name)=>{
//     this.brand=name;
// }
// const carData = new car("maruti")
// console.log(carData);
//output:car is not a constructor

// let userInfo={
//     name:"isha",
//     fullname(){
//         console.log(this.name+"normal function");
//     }
// }
// userInfo.fullname();

// let userInfo={
//     name:"isha",
//     fullname:()=>{
//         console.log(this.name+"normal function");
//     }
    
// }
// userInfo.fullname();

// function marks(){
//     100;
// }
// console.log(marks());
// //undefined

// const marks=()=>100;
// console.log(marks());
// //100