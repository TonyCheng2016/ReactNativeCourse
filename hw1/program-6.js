//============closure case 1
var addclosure = (()=>{
    var counter = 0;
    return ()=>{
        counter += 1;
        console.log(counter);
    }
})();
addclosure();
addclosure();
addclosure();

//============closure case 2
var add =(x)=>{
    return (y)=>{
        console.log(x+y);
    };
} 

var add10 =add(10);
add10(6);  //print 16(return 10 + 6)