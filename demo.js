/* const obj = {
  name: "deeecode",
  age: 200,
  print: function () {
    function print2() {
      console.log(this);
    }
    print2();
  },
};

obj.print();
 */

// function some() {
//   let userName = "rahil";
//   console.log(this);
// }
// some();
// console.log(this);

//Arrow function

/* const chai = () => {
  let userName = "Rahil";
  console.log(this);
};

chai(); */

// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 4));

// const obj = () => ({ id: 1, userName: "Rahil" });
// console.log(obj());

// const myArray = () => ["one"];
// console.log(myArray);

// const obj = {
//   name: "deeecode",
//   age: 200,
//   print: function () {
//     function print2() {
//       console.log(this);
//     }

//     print2();
//   },
// };

// obj.print();
// // Window

// const obj = {
//   name: "deeecode",
//   age: 200,
//   print: () => {
//     console.log(this);
//   },
// };

// obj.print();
// // Window

// const obj = {
//   name: "deeecode",
//   age: 200,
//   print: function () {
//     const print2 = () => {
//       console.log(this);
//     };

//     print2();
//   },
// };

// obj.print();

function getThis() {
  return this;
}
// console.log(getThis());

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
