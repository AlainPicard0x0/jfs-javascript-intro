
function GenBuzz(myNumber){

    if(typeof myNumber === 'number'){
        if(myNumber % 15 === 0){
            console.log('GenBuzz');
            return;}
            else if(myNumber % 5 === 0){
                console.log('Buzz');}
                else if(myNumber % 3 === 0){
                    console.log('Gen');}
                    else{console.log(myNumber);}
        } else {console.log('This is not a number');}
}

function ecommerce(item){

    if(typeof item ==! 'string'){
        console.log('This is not a String');
        return;
    }

    switch(item.toLowerCase())
    {
        case 'shoes':
            console.log('$50');
        break;
        case 'jeans':
            console.log('$25');
        break;
        case 'hat':
            console.log('$12');
        break;
        case 'socks':
            console.log('$2');
        break;
        default:
            console.log('Invalid Item.');
        break;
    }
}

function randomNumber()
{
    console.log(Math.round(Math.random()*50+50));
}

GenBuzz(5);
ecommerce('ShOes');
randomNumber();