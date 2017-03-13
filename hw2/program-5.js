//===========綁定(bind)
var person = {
    firstname: 'Yu-Hsun',
    lastname: 'Cheng',
    getFullName: function(){
        var fullname = this.firstname + ' '+ this.lastname;
        return fullname;
    }
}

var logName = function(){
    console.log('logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();

//print Hello undefined
let greet = function(fn){
    fn();
};

let person2 = {
    name: 'Yu-Hsun Cheng',
    hello: function(){
        console.log(`Hello ${this.name}`);
    },
    sayHello: function(){
        greet(this.hello);
    }
};

person2.sayHello();

// print Hey Tony
let person3 = {
    name: 'Tony',
    hey: function(){
        console.log(`Hey ${this.name}`);
    },
    sayHey: function(){
        greet(this.hey.bind(this));
    }
};

person3.sayHey();

//箭頭函數 這裡的this被sayHello宣告
let newPerson = {
    name: 'John',
    sayHello: function(){
        greet(()=>console.log(`Hello ${this.name}`));
    }
};

newPerson.sayHello();