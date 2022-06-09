 // User in put to Determine typeof value //
    let myNumber = 4

 //First checks wether or not myNumer is a Number //
    console.log(typeof myNumber);
// Takes the typeof value of myNumber assigns a it a variable//
    let type = (typeof myNumber)
    console.log(type);
//Start of If statment//
if (type !== 'number') 
    //checks if 
    {
        console.log('This is not a number');
    }   
    //cheks if myNumber is a module of both 3 and 5
    else if (myNumber % 3 == 0 && myNumber % 5 == 0)
    {
        console.log('GenBuzz');
    }
    //checks if myNumber is a modulo of 3
    else if (myNumber % 3 === 0) 
    {
        console.log('Gen');
    } 
    //checks if myNumber us a modulo of 5
    else if (myNumber % 5 === 0)
    {
        console.log('Buzz');
    }
    //cheks if myNumber is any other remainded other than 3 and 5
    else 
    {
        console.log(myNumber)
    }

//user input to determine item
let item = "hat"

//start of switch statement for e-comerence list
switch(item) {
    //if item is shoes
    case 'shoes':
        console.log('shoes are $50');
    break;
    //if item is jeans
    case 'jeans':
        console.log('jeans are $25');
    break;
    //if item is hat
    case 'hat':
        console.log('hats are $12');
    break;
    //if item is socks
    case 'socks':
        console.log('socks are $2');

}

//random number between 50 and 100
function getRandomInt(min, max) {
    min = Math.ceil(50);
    max = Math.floor(100);
    return Math.floor(Math.random() * (100 - 50) + 50); 
    //The maximum is exclusive and the minimum is inclusive
  }

  console.log(getRandomInt);