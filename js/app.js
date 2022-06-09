let myNumber = 15;

// typeof if else

if (typeof myNumber == "number") {
    console.log("number");
} else {
    console.log("This is not a number.");
}

// fizzbuzz

if (myNumber % 15 == 0) console.log('genbuzz');
else if (myNumber % 5 == 0) console.log('buzz');
else if (myNumber % 3 == 0) console.log('gen');
else console.log(myNumber);

//switchcase

const item = prompt("What item would you like?").toLowerCase();

switch (item) {
    case ("shoes"):
        console.log("Shoes are $50");
        break;
    case ("jeans"):
        console.log("Jeans are $25");
        break;
    case ("hat"):
        console.log("Hats are $12");
        break;
    case ("socks"):
        console.log("Socks are $2");
        break;
    default:
        console.log("Invalid Item");
}

// Random Number

randomNumber = (Math.floor(Math.random() * 100));

if (randomNumber >= 50) console.log(randomNumber);
