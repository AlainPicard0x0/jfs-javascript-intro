// GenBuzz
// value of My Number
const myNumber = 30   

// if not a number
if (typeof myNumber !== 'number') {
    console.log("This is not a Number")
// if multiple of 3
} else if (myNumber % 3 == 0) {
    console.log("Gen")
// if multiple of 5
} else if (myNumber % 5 == 0) {
    console.log("Buzz")
// if multiple of bout 3 & 5 
} else if (myNumber % 3 == 0 && myNumber % 5 == 0 ) {
    console.log("GenBuzz")
// doesnt fit any condition   
} else {
    console.log(myNumber) 
}  

// E commerse

let inventory ='Hat'

switch (inventory) {
    case 'Shoes':
    // Price of Shoes
      console.log('Shoes are $50');
      break;
    case 'Jeans':
    // Price of Jeans
      console.log('Jeans are $25');
      break;
    case 'Hat':
    // Price of Hat
      console.log('Hats are $12');
      break;
    case 'Socks':
    // Price of Socks
        console.log('Socks are $2');
        break;
    default:
    // If entry Is not Shoes, Jeans, Hat or Socks
        console.log('Invalid Item');
  }
 
  //Random integer

  console.log(Math.floor(Math.random()*50));