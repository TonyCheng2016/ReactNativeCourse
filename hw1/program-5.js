
//==========scope chain case 1
function b1(){
    var myVar; 
    console.log(myVar); //print undefined(Local myVar is undefined)
}

function a1 (){
    var myVar = 1;
    b1();
    console.log(myVar); //print 1
}

var myVar = 2;
console.log(myVar); //print 2
a1();


//==========scope chain case 2
function b1(){
    //var myVar; 
    console.log(myVar); //print 2 (found Global myVar)
}

function a1 (){
    var myVar = 1;
    b1();
    console.log(myVar); //print 1(Local myVar)
}

var myVar = 2;
console.log(myVar); //print 2
a1();


//==========scope chain case 3
function a1 (){
    var myVar = 1;
    function b1(){
    //var myVar; 
    console.log(myVar); //print 1 (found Local myVar)
    }
    b1();
    console.log(myVar); //print 1(Local myVar)
}

var myVar = 2;
console.log(myVar); //print 2
a1();

//===============變數提升(variable hoisting)
var firstname = "Donald";
var addSurname = ()=>{
    var surname = "Trump";
    var fullname = firstname+" "+ surname;
    console.log(fullname);
}
addSurname(); //ptint Donald Trump


var firstname = "Donald";
var addSurname = ()=>{
    var surname = "Trump";
    var fullname = firstname+" "+ surname;
    var firstname = "Dennis";
    console.log(fullname);
}
addSurname(); //ptint undefined Trump