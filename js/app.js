//GenBuzz
var myNumber = 0;
if (typeof myNumber !== "number") {
  console.log("This is not a number");
}

if (myNumber%3 === 0) {
  console.log("Gen");
}

if (myNumber%5 === 0) {
  console.log("Buzz");
}

if (myNumber%15) {
  console.log("Gen Buzz");
}

else {
  console.log(myNumber);
}

//E-commerce
let items = [["Shoes", 50], ["Jeans", 25], ["Hats", 12], ["Socks",2]];
let grab = Math.floor(Math.random() * 4);
switch (grab) {
  case 0:
    console.log(`${items[0][0]} are ${items[0][1]} dollars`);
    break;
  case 1:
    console.log(`${items[1][0]} are ${items[1][1]} dollars`)
    break;
  case 2:
    console.log(`${items[2][0]} are ${items[2][1]} dollars`)
    break;
  case 3:
    console.log(`${items[3][0]} are ${items[3][1]} dollars`)
    break;
  default:
    console.log("Invalid item");
}


//Random Integer

let randomNum = Math.floor(Math.random() * 50) + 50;
console.log(randomNum);



