const myObject = {
  js: "javascipt",
  cpp: "C++",
  rb: "rubby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp"];

for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("PL", "Palestine");
map.set("Au", "Australia");
map.set("Fr", "France");
map.set("Au", "Australia");

// for (const key in map) {
//   console.log(key);  //maps notiteratable
// }
