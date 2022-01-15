// GenBuzz
let myNummber = 9;

const checknum = myNummber => {
    if (typeof (myNummber) !== 'number') {
        console.log('This is not a number')
    }
    else if (myNummber % 3 === myNummber % 5) {
        console.log('GenBuzz');
    }
    else if (myNummber % 3 === 0) {
        console.log('Gen');
    }
    else if (myNummber % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(`The value of the number is : ${myNummber}`);
    }
}

checknum(myNummber);


//  Ecommerce item list 
//let list = 'Shoes';

const checkItem = list => {

    switch (list) {

        case 'Shoes':

            console.log('Shoes are $50');
            break;

        case 'Jeans':

            console.log('Jeans are $25');
            break;

        case 'Hat':

            console.log('hat are $12');
            break;

        case 'Socks':

            console.log('Socks are $2');
            break;

        default:

            console.log('invalid Item');

    }

};

checkItem('Socks')


// print random integer  number between 50 and 100

const randomNumber =()=>{
    return Math.floor(Math.random()*50)+50;
}

console.log(randomNumber());