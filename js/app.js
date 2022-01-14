let myNumber;
let Item = "";

if (isNaN(myNumber))
{
    console.log("This is not a number");
}
else if ( myNumber % 3 == 0 )
{
    console.log("Gen");
}
else if ( myNumber % 5 == 0 ) 
{
    console.log("Buzz");
}
else if ( ( myNumber % 3 == 0 ) && ( myNumber % 5 == 0 ) )
{
    conesole.log("GenBuzz");
}
else
{
    console.log(myNumber);
}

switch ( Item )
{
    case "Shoes":
        console.log("Shoes are $50");
        break;
    case "Jeans":
        console.log("Jeans are $25");
        break;
    case "Hat":
        console.log("Hats are $12");
        break;
    case "Socks":
        console.log("Socks are $2");
        break; 
    default:
        console.log("Invalid Item from store");
        break;
}
console.log ( "Your Random Number: " + Math.floor( ( Math.random() * 51 ) + 50 ) );

function returnToUser() {
    let userInput = document.getElementByID("UserInput").value;
    alert(userInput);
}