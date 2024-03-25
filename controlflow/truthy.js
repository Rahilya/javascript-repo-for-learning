//  falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Truthy Values

// "0", 'false', " ", [], {}, function(){} --> empty function, array, obj

// Nullish coalescing ooperator (??): null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;

console.log(val1);

//      Terniary operator

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 90 ? console.log("less than 90") : console.log("more than 90");
