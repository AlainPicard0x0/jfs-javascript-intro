/* E-Commerce Item list

Use a swtich statement to print the price of the each item in the store to the console.
Ex. If the value of the variable is 'shoes' then, the statement Shoes are $50 should be printed to the console.
Reference: Codecademy lesson 10
Items:

Shoes- $50
Jeans- $25
Hat- $12
Socks- $2
If the variable input is not an item in the store, then print 'Invalid Item' to the console. */

let item = 'shoes';
switch (item) {
    case 'shoes':
        console.log(`${item} are $50`);
        break;
    case 'jeans':
        console.log(`${item} are $25`);
        break;
    case 'hat':
        console.log(`${item} are $12`);
        break;
    case 'socks':
        console.log(`${item} are $2`);
        break;
    default:
        console.log(`invalid item`)
}