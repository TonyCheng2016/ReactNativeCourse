(()=>{
    outage = 20; //Global(no var)
    var height =170; //Local
    if (outage == 20) height =180;
        console.log(`height = ${height}`);   //print 180
})();
console.log(`outAge = ${outage}`);  //print 20
console.log(`height = ${height}`);  //error  height is not defined

//var vs let
var numA = 777 ;
var numB = 1;
if (numA===777) {
    let numA = 6;//The scope is inside the if-block
    var numB = 1000;//The scope is inside the function

    console.log(numA); // print 6
    console.log(numB); //print 1000
}

console.log(numA); // print 777
console.log(numB); //print 1000