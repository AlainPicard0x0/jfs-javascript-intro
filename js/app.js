// print random number between 50-100
let random =Math.floor(Math.random()*(100-50 + 1)) + 50;
console.log(random);
// print is number is multiple 3,5 
let mynumber = 53;
if (typeof(mynumber) !== 'number'){
    console.log(`${mynumber}is not valid number`);
}
if (mynumber % 3 === 0 && mynumber % 5 === 0){
    console.log('genbuzz')
}
else if (mynumber % 3 === 0){
    console.log('gen')
}
else if (mynumber % 5 === 0){
    console.log('buzz')
}
else{
    console.log(mynumber)
}
// item price 
let item = 'Shoes'
switch (item) {
    case 'Shoes':
         console.log('Shoes- $50' )
    break;
    case 'Jeans':
        console.log('Jeans- $25')
    break;
    case 'hat':
        console.log('Hat- $12') 
    break;
    case 'Socks':
        console.log('Socks- $2')
    break;
    default:
        console.log('invalid item')
        break;
}

