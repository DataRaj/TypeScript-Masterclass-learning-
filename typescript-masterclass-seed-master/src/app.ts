


// This keyword and then use of the bind call and apply keywords

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

const submission = {
    name : 'Dattaraj',
    date : new Date().toString(),
    file : 'sub.md'
}

type Submission = typeof submission

const science : Submission = {
    name : "user1",
    date : '23',
    file : 'readme.txt'
}

type submit = keyof Submission
const marks : submit = 'name' 

// lets write something related to the typescript recent concept which we laerned in the chapt :7 
// Chapter 7 
// after coming from the typeof and keyof types and learning and using this things we us got to know about the fetching technique and using it inside the func 
// lets see how we are going to use this inside the func 
// by creating a generics types here we go implementing the generics inside the type methods 
// lets start with new example 

const creds ={
    username:'sdnfksd',
    email:'ksdkdnfs@wsdf.com',
    psk:'sdsdfsf'
} 

type acc = typeof creds;
type userData = keyof acc;
type dataIndex = acc[userData]

function KeyAccess<O,K extends keyof O>(Obj : O , key : K){
    return  Obj[key];
}

const CRM = {
    user : 'pratik',
    loggedIn : new Date('21-07-2023'),
    workHours : 8,
    loggedOut : new Date('26-07-2023')
}



console.log(KeyAccess(CRM,'user'))

// lets go more further in this scope lets see all other aspects of the above code and method 
// which we will be looking forward 
// since we haven't gone through enough  things of these project and haven't digg that much so lets dig bit advancing the topic with interface

interface readOnlyData {
    readonly User : string ;
    readonly loggedIn:Date;
    readonly workHours : number ;
    readonly loggedOut : Date;
}

// type readOnly = readOnlyData

const data : readOnlyData={
    User : 'jell',
    loggedIn : new Date(),
    workHours : 6,
    loggedOut : new Date('30-07-2023')
}

type readOnly_2<T> = {
    readonly [K in keyof T] : T[K];
}

function freezeData<T>(Obj : T) : readOnly_2<T> {
    return Object.freeze(Obj);
}
 
// partial person --> its a dynamic making changes over the given / updating the data of the given object 
interface person {
    name : string
    age : number;
    address : string
    licenses : string[]
}

type myPartial<T> = {
    [P in keyof T] : T[P]
}

// interface myPartial {
//     name ?: 'dat',
//     age ?: 21,
//     address ?: 'kk tower'
// } 
 function updatepersonData(person: person,changes : myPartial<person>){
    return { ...person , ...changes}
 }
// type


// adding optional parameter here how this works?? lets see 
// though this means just adding the extra '?' symbol next to the:T optional parameter you
//  can identified so this is how it works you can really add more moment but im just keeping 
// here all the data and then after that just trying out the for testing 

type optionaldata<T> = {
    [P in keyof T] +? : T[P]; // it will dynamically create a optional path for the object even if the predefined type has no optional key
}

function printer(person : optionaldata<person>):string{
    return `${person.name} is ${person.age}`
}

const rob : optionaldata<person> ={
    name : 'robert',
    age : 58
}

console.log(printer({name: 'foo',address:'bulerodo'}))


// another thing is we are going to make a advance optional parameter thing
type allowOnly<T, K extends keyof T> = {
    [P in K] : T[P] 
}

const deer : allowOnly<person ,'name' | 'address'| 'age'> = { // by adding another parameter to the parent type, error has occured here.. how can we fix these?? lets see now we will have to create a new type  using generics so that it will allow only those info which we are needed 

    name : 'david',
    age : 21,
    address : 'park avenue'
}

// here.. one more concept we are looking for...
// what it is ??? type gaurd it means determining the type inside the loop or
//  block which could be funtional or conditional block 

// lets see

// right here we are going to create the class with two different methods 

class big{
    short(){}
}

const short  = new big();

console.log(short instanceof big)
console.log(big.prototype  === Object.getPrototypeOf(short))

class song{
    constructor(public title:string,public duration:string|number){
    }

}
// creating function using is keyword just to see if we are writing it in proper direction or not 
const isSong = (item :any) : item is song => {
    return item instanceof song;
}

class playList{
    constructor(public name : string, public collection: string[]){

    }
}

const getElement = (item:song|playList) : string =>{
    if(isSong(item)){
        return item.title
    }
    return item.name
}

// then here we got the 'in' syntax which checks the value does exist inside the predefined type or class or object

const themeSetup : Object = {
    name : 'Spectra',
    themeColors : ['Dark', 'Light', 'Golden'],
    font : 'Roboto Mono',
    version : '2.02.1'

}

// interaction interfaces and type : these is just a combining the types or interfaces for the further use cases just like the extent in interfaces and classes

interface upload{

    title : string,
    // quantity : number,
    description : string
}

interface tag{ 
    type : 'tag'
    name : string,
}
interface tags{
    type : 'tags'
    quntity : number,
    names : string[]
}

type facebookUpload = upload & tag ;
type facebookUploadPlus = upload & tags;

type facebook = facebookUpload | facebookUploadPlus;

const image : upload  = {
    title : 'All my old memories',
    // quantity : 7,
    description : 'These are my all photos since I was 10 year old. these are not just a images but also my journey of the growing up from puberty to the young adulthood and how those ups and down came up in my way please like and share your journey as well'
}

const facebook : facebook = {
    type : 'tag',
    ...image,
    name: 'mom'
    
}

const friends : tags  = {
    type : 'tags',
    quntity : 4,
    names : ['yash','gaurav','jay','piyush']
}


const facebookPlus : facebook = {
    ...image,
    ...friends
}

function UploadImg(Img : facebook){
    if(Img.type === 'tag'){
        console.log(Img.description)}
        else{
            console.log(Img.quntity , ...Img.names)
        }
}


// Course Typescript Masterclass by todd motto  and lesson no: 21 
// summery of this lesson : generics classes and using it for interfaces and types

class list<T>{
    private list  :T[];

    addItem(item:T) : void {
        this.list.push(item)
    }
    getitem():T[] {
        return this.list;
    }
    removeItem(item:T) : void {
        this.list = this.list.filter((ele) => ele !== item)
    }
}
const rules  = new list()

class pizza{
    constructor(private name:string,private price:number){

    }
}

class beverage{
    constructor(private name:string,private price:number){

    }
}

const pizzas = new list<pizza>();
pizzas.addItem(new pizza('peppy paneer', 200))
pizzas.addItem(new pizza('chicken tikka', 300));
pizzas.removeItem(new pizza('chicken tikka', 300));
pizzas.getitem();

// lesson no: 22 
// summery of this lesson : function overloading in typescript, using the same function with different parameters and return types
// in javascript we cannot overload the function but in typescript we can do that.
// but overloaded functions in typescript does not work like the other languages like java or c++ or c#
// ts does not compile the overloaded function but it just checks the function and its parameters and return types and then it will give the error if the function is not overloaded properly
// these github copilot is really good tools for big projects and it will help you to write the code faster and more efficiently

function reverse(str:string):string;
function reverse<T>(arr:T[]):T[];
function reverse<T>(stringOrArray:string|T[]):string|T[]{
    if(typeof stringOrArray === 'string'){
        return stringOrArray.split('').reverse().join('')
    }
    return stringOrArray.slice().reverse()
}

reverse('pepperoni')
reverse(['bacon','pepperoni','chilli','mushrooms'])

// lesson no: 23
// lets talk about enums , enums gives us reverse mapping and const enums gives us the compile time optimization
// here are some extentend version of enums in which one is like enum overloading in this you can extent but you will have to give the value to the enum 
// (numeric or string) and the other one is like the reverse mapping in which you can get the value of the enum by its value and vice versa

enum commands{
    go,
    back,
    ack,
    nack,
    reverse
}

enum commands{
    forward = 5,
}

// lesson no: 24
// lets talk about the const enums and how it works and what is the difference between the normal enums and const enums
// const enums are the compile time optimization and it will not be available in the runtime
// but 

enum Sizes{
    Small = 'small',
    Medium= 'medium',
    Large = 'large'
}

let selected : Sizes = Sizes.Small;

function updateSize(size:Sizes):void{
    selected = size
}

updateSize(Sizes.Large)

console.log(selected)

// lesson no: 25
// lets talk about the declaration merging in typescript by using lodash library
// here we are going to use the lodash library for the declaration merging and we are going to use the merge function of the lodash library


