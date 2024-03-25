// for of

const arr = [1, 2, 3, 4, 5, 6];

for (const value of arr) {
  //   console.log(`looping on ${value}`);
}

const greetings = "Hello world";

for (const greet of greetings) {
  //   console.log(`each char is ${greet}`);
}

//      MAPs

const map = new Map();
map.set("IN", "India");
map.set("PL", "Palestine");
map.set("Au", "Australia");
map.set("Fr", "France");
map.set("Au", "Australia");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, "==>", value);
}

const myObject = {
  game1: "GTA",
  game2: "Prince of Persia",
};

// for (const [key, value] of myObject) {
//   //   console.log(key, "==>", value);
// }
