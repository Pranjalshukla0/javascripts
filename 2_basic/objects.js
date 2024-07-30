// singleton
//when we create a  object by  constructor
// object literals
const sym=Symbol("symb")
const obj = {
    name :"pranjal",
    rollno:893,
   // sym:"janjn",
    [sym]:"symb",
    age:20
}
// console.log(obj["name"]);
// console.log(obj.age);
// //console.log( typeof(obj["sym"]));
// console.log(obj[sym]);

// obj.age="21";
// console.log(obj["age"]);
// Object.freeze(obj);
// obj.age=24;
// console.log(obj);
// obj.greeting=function(){
//     console.log("hello everyone");

// }
// obj.greetingtwo=function(){
//     console.log(`hello ${this.name} how are you`);

// }
// //console.log(obj.greeting);
// console.log(obj.greeting());
// console.log(obj.greetingtwo());

/************************************************ */
const singletonobj=new Object();
console.log(singletonobj)
const nonsingleton={};
 nonsingleton.id="01";
 nonsingleton.name="xyz";
console.log(nonsingleton);
// nested object
const regularuser={
    email:"pranjalshukla@gmail.com",
    fullname:{
        userfullname:{
            firstname:"pranjal",
            lastname:"shukla"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);
 const obj1={1:"a",2:"b"};
 const obj2={3:"a",4:"b"};
// const obj3= Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};
 console.log(obj3);

 console.log(Object.keys(obj));
 console.log(Object.values(obj));
 console.log(Object.entries(obj));
 
 console.log(obj.hasOwnProperty('age1'));