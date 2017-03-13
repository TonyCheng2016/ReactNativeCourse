//===========This 指標
(function(){console.log(this)})(); //函數的this = unknown

let person = {
    firstname: 'Yu-Hsun',
    lastname: 'Cheng',
    greet1: function(){
        console.log(this); //方法的this＝person物件
    },

    greet2: ()=> {
        console.log(this); //箭頭函數被person宣告
    },

    greet3: function(){
        (() => console.log(this))(); //方法之中的箭頭函數被greet3方法所宣告
    }
};

person.greet1(); //this = person物件
person.greet2(); //this = person物件的this = unknown
person.greet3(); //this = greet3的this = person物件