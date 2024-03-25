for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is printed");
  }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop vale: ${j}`);
  }
}

let myArray = ["flash", "batman", "superman", "ironman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 is detected`);
    continue;
  }
  console.log(`value of i is ${i}`);
}
