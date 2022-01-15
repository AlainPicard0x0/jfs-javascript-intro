/*
GenBuzz

Create variable myNumber
Check that the value of the myNumber is of type number
If myNumber is not a number, print 'This is not a number' to the console.
If value of myNumber is a multiple of 3 print 'Gen' to the console
If value of myNumber is a multiple of 5 print 'Buzz' to the console
If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
If the value of myNumber is any other number print the value of myNumber to the console.
*/

let myNumber = 'abd';
console.log(typeof myNumber);

if ((typeof myNumber) === 'number')
{
   if(myNumber%3 === 0 && myNumber%5 ===0)
    {
    console.log('GenBuzz');
    }

    else if(myNumber%3 === 0)
    {
        console.log('Gen');
    }
    else if(myNumber%5 ===0)
    {
        console.log('Buzz');
    }
    else 
    {
        console.log(myNumber);
    }
}
else 
{
    console.log('This is not a number');
}


/*
E-Commerce Item list

Use a swtich statement to print the price of the each item in the store to the console.
Ex. If the value of the variable is 'shoes' then, the statement Shoes are $50 should be printed to the console.
Reference: Codecademy lesson 10
Items:

Shoes- $50
Jeans- $25
Hat- $12
Socks- $2
If the variable input is not an item in the store, then print 'Invalid Item' to the console.

*/


let item = 'socks';

switch(item){
    case 'shoes':
        console.log('Shoes are $50.');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'hat':
        console.log('Hat is $12');
        break;
    case 'socks':
        console.log('Socks are $2');
        break;
    default:
        console.log('Invalid Item');
        break;
}

//Print a random integer (whole number) between 50 and 100 to the console

let x = Math.random()*(100-50)+50;
console.log(x);

console.log(Math.floor(x));