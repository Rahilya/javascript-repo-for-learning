//if

/* if (2 == "2") {
  console.log("2 = 2");
}
 */
const temprature = 44;
if (temprature == 40) {
  console.log("less than 50");
} else {
  console.log("less than 40");
}

const balance = 1000;

// if (balance > 500) console.log("test"); //implicit code

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 950) {
  console.log("less than 950");
} else if (balance < 1250) {
  console.log("less than 1250");
} else {
  console.log(`less than 1300`);
}
