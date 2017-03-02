//function statement
function greet() {
    console.log("Hello");
}
greet(); //print Hello

//function expression
var greetMe = function(){
    console.log("Hello, TonyCheng");
}
greetMe(); //print Hello, TonyCheng

//function first-class 
logGreeting(greetMe); //print Hello, TonyCheng
function logGreeting(fn){
    fn();
}
logGreeting(greet); //print Hello