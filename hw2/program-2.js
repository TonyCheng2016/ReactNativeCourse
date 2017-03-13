//===========callback function
function greet(callback){
    console.log('Hello!');
    var data = {
        name: 'DTD NTUE'
    };
    callback(data);
}

greet(data => {
    console.log('The callback was invoked!');
    console.log(data);
});

greet(data =>{
    console.log('A different callback was invoked!');
    console.log(data.name);
});

//===========My callback function
function goodjob(addMoney){
    console.log('Nice work!');
    var salary ={
        name:'Tony',
        money:'30000'
    };
    addMoney(salary);
}
goodjob(getMoney=>{
    console.log('This is your salary');
    console.log(`${getMoney.name} gets your NT$${getMoney.money}`);
});