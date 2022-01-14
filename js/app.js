const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter your number: ", function (answer) {
    let myNumber = parseFloat(answer);
    if (typeof myNumber !== "number") {
        console.log("This is not a number");
    } else if (myNumber % 15 === 0) {
        console.log("GenBuzz");
    } else if (myNumber % 5 === 0) {
        console.log("Buzz");
    } else if (myNumber % 3 === 0) {
        console.log("Gen");
    } else {
        console.log(`Your number is: ${myNumber}`);
    }
    rl.question("Enter your item: ", function (answer2) {
        let myItem = answer2.toLowerCase();
        switch (myItem) {
            case "shoes":
                console.log("Shoes are $50");
                break;
            case "jeans":
                console.log("Jeans are $25");
                break;
            case "hat":
                console.log("Hat are $12");
                break;
            case "socks":
                console.log("Socks are $2");
                break;
            default:
                console.log("Invalid item");
                break;
        }
        console.log("Random number between 0 and 50: " + (Math.floor(Math.random() * (100 - 50) + 50)))
        rl.close();
    });
    

});
