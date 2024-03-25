const coding = ["js", "ruby", "c++"];
// coding.forEach((value) => console.log(value));

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    language: "javascript",
    languageFileName: "js",
  },
  {
    language: "python",
    languageFileName: "py",
  },
  {
    language: "java",
    languageFileName: "jv",
  },
];

myCoding.forEach((value, index) => {
  console.log(value.language);
});
