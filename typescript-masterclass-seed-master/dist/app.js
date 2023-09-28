
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
var song = /** @class */ (function () {
    function song(name, duration) {
    }
    return song;
}());
var big = /** @class */ (function () {
    function big() {
    }
    big.prototype.short = function () { };
    return big;
}());
var short = new big();
console.log(short instanceof big);
console.log(big.prototype === Object.getPrototypeOf(short));
