// array
 const myArr=[1,2,3,4,5];
 const arr2= new Array(1,2,3,4,5,6);
 //console.log(arr2);
 //console.log(myArr);
 // array methods
  myArr.push(6);
  //console.log(myArr);
  myArr.pop();
 // console.log(myArr);
 myArr.unshift(9);
 console.log(typeof(myArr));
 myArr.shift();
 console.log(myArr.includes(10));
 console.log(myArr.indexOf(5));
 console.log(typeof(arr2.join()));
//  slice , splice

// console.log("A",myArr);
// const myslice= myArr.slice(1,3);
// console.log(myslice);
// console.log("B",myArr);
// const mysplice1= myArr.splice(1,3);
// console.log(mysplice1);
// console.log("C",myArr);
 //other array method

//  const marvel_heros =["thor","Ironman","spiderman"];
//  const Dc_Heros =["batman","flash","superman"];
// //  marvel_heros.push(Dc_Heros);
// //  console.log(marvel_heros);
//  const all_heros=marvel_heros.concat(Dc_Heros);
//  console.log(all_heros);
//  const all_new_heros =[...marvel_heros,...Dc_Heros]// sperd operator
//  console.log(all_new_heros);

// const another_array=[1,2,3,[4,5],6,7,[8,[9,0]]];
// console.log(another_array);
// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);
// console.log(Array.isArray("pranjal"));
// console.log(Array.from("pranjal"));
// console.log(Array.from{name:"hii"}); // interesting
  let s1=100;
  let s2=200;
  let s3=300;
  console.log(Array.of(s1,s2,s3));
