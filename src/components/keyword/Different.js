//verify by hardik sir

//varibles declared with "var" in js are function scope.
//varibles declared with "let and const" in js are block scope.

//1:
// var name="isha";
// name="patel"
// console.log(name);
//output:patel

// let name="isha";
// let name="patel"
// console.log(name);
// output:patel

// const name="isha";
// name="patel"
// console.log(name);
//error:Assignment to constant variable.

//2:
// function js(e){
//     if(e){
//         let fname="isha"
//         const lname="bharodiya"
//         console.log("my name is" +" "+ fname + " "+ lname);//output:my name is isha bharodiya
//     }
//     // console.log("my name is" +" "+ fname + " "+ lname);//error:lname is not defined

// }
// js(true);

// function js(e){
//     if(e){
//         var fname="isha"
//         var lname="bharodiya"
//         console.log("my name is" +" "+ fname + " "+ lname);//output:my name is isha bharodiya
//     }
//     // console.log("my name is" + " "+ fname + " "+ lname);//output:my name is isha bharodiya

// }
// js(true);

//3:
// var city="surat";
// if(true){
//     var city="bharuch"
//     console.log(city);
// }
// console.log(city);
//output:bharuch

// let state="Gujrat";
// if(true){
//     let state="rajsthan"
//     console.log(state);
// }
// console.log(state);
//output:rajsthan,gujrat

// const country="surat";
// if(true){
//     const country="bharuch"
//     console.log(country);
// }
// console.log(country);
//output:rajsthan,gujrat