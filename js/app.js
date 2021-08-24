// let myNumber = 30;
//     console.log(typeof myNumber);
//     console.log(myNumber);
for(let myNumber = 1; myNumber <= 100; myNumber++){
    if(typeof myNumber !== 'number'){
        console.log('This is not a number');
    } else if (myNumber%15 === 0){
        console.log('GenBuzz');
        
    } else if (myNumber%5 === 0){
        console.log('Buzz')
    }else if (myNumber%3 === 0){
        console.log('Gen');
    } else { 
        console.log(myNumber);
    }
}
let itemList = 'Shoes';
switch(itemList){
    case 'Shoes': console.log('Shoes are $50');
    break;
    case 'Jeans': console.log('Jeans are $25');
    break;
    case 'Hat': console.log('Hats are $12');
    break;
    case 'Socks': console.log('Socks are $12');
    break;
    default: console.log('Invalid Item');
    break;
}
console.log(Math.floor(Math.random() *50) + 50);

