/* 
GenBuzz 
   * Create variable `myNumber`
        * Check that the value of the `myNumber` is of type `number`
   * If `myNumber` is not a number, print 'This is not a number' to the console.
   * If value of `myNumber` is a multiple of 3 print 'Gen' to the console
   * If value of `myNumber` is a multiple of 5 print 'Buzz' to the console
   * If the value of `myNumber` is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
   * If the value of `myNumber` is any other number print the value of `myNumber` to the console.
   * Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9 
   * 
   */
  
let myNumber = 23;

if (typeof myNumber !== 23){
    console.log("This is not a number")
}
else if(myNumber%3) {
    console.log("Gen")

}else if(myNumber%3 && myNumber%5){
    console.log("GenBuss")

}else{console.log(myNumber)

}

