// This keyword and then use of the bind call and apply keywords
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const people=(...data)=>{
//     return data.toString();
// }
// const statement =() =>{
//     return `${statement()} I know this people`
// }
// const hoard = statement.bind(people('gayle','virat','dhoni'))
// console.log(hoard())
// const ele = document.querySelector('.clickme')
// function clickme(this: HTMLAnchorElement ,e:Event){
//     e.preventDefault();
//     console.log(this.href)
// }
// ele.addEventListener('click',clickme, false)
// function write(){
//     console.log()
// }
// another chapter we are going to learn about the typeof and from these topic we will look for the other aspects of the code in typscript 
// lets go then 
var submission = {
    name: 'Dattaraj',
    date: new Date().toString(),
    file: 'sub.md'
};
var science = {
    name: "user1",
    date: '23',
    file: 'readme.txt'
};
var marks = 'name';
// lets write something related to the typescript recent concept which we laerned in the chapt :7 
// Chapter 7 
// after coming from the typeof and keyof types and learning and using this things we us got to know about the fetching technique and using it inside the func 
// lets see how we are going to use this inside the func 
// by creating a generics types here we go implementing the generics inside the type methods 
// lets start with new example 
var creds = {
    username: 'sdnfksd',
    email: 'ksdkdnfs@wsdf.com',
    psk: 'sdsdfsf'
};
function KeyAccess(Obj, key) {
    return Obj[key];
}
var CRM = {
    user: 'pratik',
    loggedIn: new Date('21-07-2023'),
    workHours: 8,
    loggedOut: new Date('26-07-2023')
};
console.log(KeyAccess(CRM, 'user'));
// type readOnly = readOnlyData
var data = {
    User: 'jell',
    loggedIn: new Date(),
    workHours: 6,
    loggedOut: new Date('30-07-2023')
};
function freezeData(Obj) {
    return Object.freeze(Obj);
}
// interface myPartial {
//     name ?: 'dat',
//     age ?: 21,
//     address ?: 'kk tower'
// } 
function updatepersonData(person, changes) {
    return __assign(__assign({}, person), changes);
}
function printer(person) {
    return "".concat(person.name, " is ").concat(person.age);
}
var rob = {
    name: 'robert',
    age: 58
};
console.log(printer({ name: 'foo', address: 'bulerodo' }));
var deer = {
    name: 'david',
    age: 21,
    address: 'park avenue'
};
// here.. one more concept we are looking for...
// what it is ??? type gaurd it means determining the type inside the loop or
//  block which could be funtional or conditional block 
// lets see
// right here we are going to create the class with two different methods 
var big = /** @class */ (function () {
    function big() {
    }
    big.prototype.short = function () { };
    return big;
}());
var short = new big();
console.log(short instanceof big);
console.log(big.prototype === Object.getPrototypeOf(short));
var song = /** @class */ (function () {
    function song(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    return song;
}());
// creating function using is keyword just to see if we are writing it in proper direction or not 
var isSong = function (item) {
    return item instanceof song;
};
var playList = /** @class */ (function () {
    function playList(name, collection) {
        this.name = name;
        this.collection = collection;
    }
    return playList;
}());
var getElement = function (item) {
    if (isSong(item)) {
        return item.title;
    }
    return item.name;
};
// then here we got the 'in' syntax which checks the value does exist inside the predefined type or class or object
var themeSetup = {
    name: 'Spectra',
    themeColors: ['Dark', 'Light', 'Golden'],
    font: 'Roboto Mono',
    version: '2.02.1'
};
var image = {
    title: 'All my old memories',
    // quantity : 7,
    description: 'These are my all photos since I was 10 year old. these are not just a images but also my journey of the growing up from puberty to the young adulthood and how those ups and down came up in my way please like and share your journey as well'
};
var facebook = __assign(__assign({ type: 'tag' }, image), { name: 'mom' });
var friends = {
    type: 'tags',
    quntity: 4,
    names: ['yash', 'gaurav', 'jay', 'piyush']
};
var facebookPlus = __assign(__assign({}, image), friends);
function UploadImg(Img) {
    if (Img.type === 'tag') {
        console.log(Img.description);
    }
    else {
        console.log.apply(console, __spreadArray([Img.quntity], Img.names, false));
    }
}
// Course Typescript Masterclass by todd motto  and lesson no: 21 
// summery of this lesson : generics classes and using it for interfaces and types
var list = /** @class */ (function () {
    function list() {
    }
    list.prototype.addItem = function (item) {
        this.list.push(item);
    };
    list.prototype.getitem = function () {
        return this.list;
    };
    list.prototype.removeItem = function (item) {
        this.list = this.list.filter(function (ele) { return ele !== item; });
    };
    return list;
}());
var rules = new list();
var pizza = /** @class */ (function () {
    function pizza(name, price) {
        this.name = name;
        this.price = price;
    }
    return pizza;
}());
var beverage = /** @class */ (function () {
    function beverage(name, price) {
        this.name = name;
        this.price = price;
    }
    return beverage;
}());
var pizzas = new list();
pizzas.addItem(new pizza('peppy paneer', 200));
pizzas.addItem(new pizza('chicken tikka', 300));
pizzas.removeItem(new pizza('chicken tikka', 300));
pizzas.getitem();
function reverse(stringOrArray) {
    if (typeof stringOrArray === 'string') {
        return stringOrArray.split('').reverse().join('');
    }
    return stringOrArray.slice().reverse();
}
reverse('pepperoni');
reverse(['bacon', 'pepperoni', 'chilli', 'mushrooms']);
// lesson no: 23
// lets talk about enums , enums gives us reverse mapping and const enums gives us the compile time optimization
// here are some extentend version of enums in which one is like enum overloading in this you can extent but you will have to give the value to the enum 
// (numeric or string) and the other one is like the reverse mapping in which you can get the value of the enum by its value and vice versa
var commands;
(function (commands) {
    commands[commands["go"] = 0] = "go";
    commands[commands["back"] = 1] = "back";
    commands[commands["ack"] = 2] = "ack";
    commands[commands["nack"] = 3] = "nack";
    commands[commands["reverse"] = 4] = "reverse";
})(commands || (commands = {}));
(function (commands) {
    commands[commands["forward"] = 5] = "forward";
})(commands || (commands = {}));
// lesson no: 24
// lets talk about the const enums and how it works and what is the difference between the normal enums and const enums
// const enums are the compile time optimization and it will not be available in the runtime
// but 
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "small";
    Sizes["Medium"] = "medium";
    Sizes["Large"] = "large";
})(Sizes || (Sizes = {}));
var selected = Sizes.Small;
function updateSize(size) {
    selected = size;
}
updateSize(Sizes.Large);
console.log(selected);
