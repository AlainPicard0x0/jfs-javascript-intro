// ------------GenBuzz-----------
let myNumber = 19;
if(typeof myNumber != 'number') {
    console.log('The value is not a number');
} else if(myNumber % 15 === 0) {
    console.log('GenBuzz');
}
 else if(myNumber % 3 === 0) {
console.log('Gen');
}
else if(myNumber % 5 === 0) {
    console.log('Buzz');
}
else {
    console.log(myNumber);
}


// ----------------E-Commerce---------------
let item = 'Shoes';
switch(item) {
    case 'Jeans':
        console.log(`The price of ${item} is $25`);
        break;
    case 'Shoes':
        console.log(`The price of ${item} is $50`); 
        break;
    case 'Hats':
        console.log(`The price of ${item} is $12`);
        break;
    case 'Socks':
        console.log(`The price of ${item} is $2`);
        break;
    default :
        console.log('Invalid item');
}



// //--------------------Random Integer to the console---------
// //------random integer (whole number) between 50 and 100----
console.log(Math.floor(Math.random() * (100 - 50) + 50));

