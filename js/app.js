 // -- GenBuzz ----------------------------------------
let myNumber = 3;

if (typeof myNumber !== 'number') {
    console.log('This is not a number');
} else if (myNumber % 3 === 0 ) {
    console.log('Gen');
} else if (myNumber % 5 === 0) {
    console.log('Buzz');
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz');
} else {
    console.log(myNumber);
}

 // -- E-Commerce Item list ----------------------------

let clothes = 'shoes';

switch (clothes) {
    case 'shoes':
    console.log('Shoes are $50');
    break;
    case 'jeans':
    console.log('Jeans are $25');
    break;
    case 'hat':
    console.log('Hats are $12');
    break;
    case 'socks':
    console.log('Socks are $2');
    default:
    console.log('Invalid item');
    break;
}


 // -- Random Integer ---------------------------------

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


