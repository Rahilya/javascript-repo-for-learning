const mySym = Symbol("key1");

const JsUser = {
  name: "Rahil",
  age: 25,
  [mySym]: "mykey1",
  location: "Pune",
  email: "rahil@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

//functions in object
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
