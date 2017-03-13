//===========存取物件的property
var address = {
    Street: 'Main',
    Number: 100,
    Apartment:
    {
        Floor: 3,
        Number: 301
    }
};
console.log(`I live in ${address['Street']} ${address['Number']} ${address.Apartment.Floor}F`);
var person ={
    firstname: 'Yu-Hsun',
    lastname: 'Cheng',
    greet: function(){
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
};
person.greet();

console.log(person['firstname']);

//===========ES6的物件簡化語法
let name, phone;
let info = {
    name: name,
    phone: phone,
    printInfo: function(){
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);
    }
}

info.name = 'ntue';
info.phone = '2732-1104';
info.printInfo();

let name2, phone2;
let info1 = {
    name2,
    phone2,
    printInfo(){
        console.log(`Name: ${this.name2}, Phone: ${this.phone2}`);
    }
}

info1.name2 = 'ntue';
info1.phone2 = '2732-1104';
info1.printInfo();