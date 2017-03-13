//===========陣列指令
//push
let arrayA = ['5','6'];
console.log(arrayA); //print ['5','6']

arrayA.push('7');
console.log(arrayA); //print ['5','6','7']

//slice
let arrayB = ['zero','one','two','three','four','fifth'];
let sliced = arrayB.slice(2,5);

console.log(arrayB); //print ['zero','one','two','three','four','fifth']
console.log(sliced); //print ['two','three','four']

//===========迴圈指令-1
var colors = ['red','yellow','pink','green'];

//loop method
for (var i = 0; i < colors.length;i++){
    console.log(colors[i]); //print ['red','yellow','pink','green']
}
//forEach method 
colors.forEach((color)=>console.log(color)); //print ['red','yellow','pink','green']

//use forEach to add HTML elements
// $(document).ready(function() {
//     colors.forEach((color)=>$('body').append(`<div>${color}</div>`));
// });

//===========迴圈指令-2
var numbers = [4,5,6];
var doublenumbersA;
var doublenumbersB;

// loop method
doublenumbersA = [];
for(var i = 0; i<numbers.length; i++){
    doublenumbersA.push(numbers[i]*3);
}
console.log(doublenumbersA); //print [12,15,18]

//map method
doublenumbersB = [];
doublenumbersB = numbers.map((number)=>number*2);
console.log(doublenumbersB); //print [8,10,12]

//map-2 method
var cars = [{model:'Buick',price:'cheap'},{model:'BMW',price:'expensive'}];

var prices = cars.map((car)=>car.price);
console.log(prices); //print ['cheap','expensive']

//use map to add HTML elements
// $().ready(function () {
//     const carModel = cars.map(car=>`<div>${car.model}</div>`);
//     $('body').append(carModel);
// });

//===========增/刪/修改指令
//spread operator
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [array1,array2];
console.log(array3); //print [[1,2,3],[4,5,6]]
let array4 = [...array1,...array2];
console.log(array4); //print [1,2,3,4,5,6]

//spread operator-2
let state = {a:1,b:2,c:3};
console.log(state); //print { a: 1, b: 2, c: 3 }
//state = {...state, d:4};
console.log(state);
//state = {...state, a:10};
console.log(state);

//spread operator-3
function adder (base, ...numbers){
    numbers.forEach(function (number) {
        console.log(base + number);
    });
}
adder(2,3,1,9);