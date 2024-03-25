// Immediately Invoked Functon
/* 
function pani() {
  console.log(`DB CONNECTED`);
}

pani(); */

(function pani() {
  //named IIFE  because there is name given to iife function
  console.log(`DB CONNECTED`);
})();

((name) => {
  //unnamed iife
  console.log(`DB CONNECTED TWO ${name}`);
})("Rahil");
