// function expression
var greetMe = function(){
    console.log('Hi John!');
}
greetMe();

//arrow function expression
greetTommy = () => console.log("Hey Tommy!");
greetTommy();

//arrow function expression with parameters
greetYou = name => console.log(`Hello , ${name}`);
greetYou("NTUEDTD");

//arrow function expression square
var square1 = function(num){return num*num};
var square2 = num =>{return num*num}
var square3 = num =>num*num;

console.log(square1(5)+square2(6)+square3(7));