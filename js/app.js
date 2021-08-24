let myNumber = 8;
if (typeof myNumber!== 'number') {
    console.log("This is not a number")
} else if (myNumber % 3 === 0) {
    console.log("Gen"); 
} else if (myNumber % 5 === 0) {
    console.log("Buzz")
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log("Genbuzz");
} else {
    console.log(myNumber);
}

const item = 'jeans'

switch(item) {
    case 'shoes':
      console.log("Shoes are $50");
      break;
    case 'jeans':
      console.log("Jeans are $25");
      break;
    case 'hat':
      console.log("Hats are $12");
      break; 
    case 'socks':
      console.log("Socks are $2");
      break;
    default:
      console.log("Invalid item");
  }



  console.log(Math.floor(Math.random()*50));


