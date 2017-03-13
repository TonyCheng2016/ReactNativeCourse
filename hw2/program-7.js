//===========Json
var personobj = {
    firstname: 'Tommy',
    fullname: 'Riddle',
    age: 22,
    married: true,
    hasOwnHair: null,
    children: [{
        firstname:'John'
    },{
        firstname:'Harry'
    }]
};

var personjson = JSON.stringify(personobj);
var personobj2 = JSON.parse(personjson);
console.log(personobj);
console.log(personjson);
console.log(personobj2);