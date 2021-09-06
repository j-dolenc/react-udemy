//primitives: number, string,boolean
//morecomplex types:arrays,object
//function types,parameters

//PRIMITIVES
let age:number=12;
let userName:string='asda';
let isNothing:boolean=true;
let hobbies:string[] =['aaa','asd'];
type Person=({name:string,age:number}|{isCool:boolean})[];


let person:Person;
person=[{name:'max',age:12,isCool:true}];

//FUNCTIONS & TYPES
function add (a:number,b:number) {
    return a+b;
}
function add1 (a:number,b:number):number{
    return a+b;
}
function println(value:any):void{
    console.log(value);
}
 
//GENERICS

function insertAtBeginning<T>(array:T[],value:T){
    const newArray = [value,...array];
    return newArray;
}
const demo =[1,2,3];
const novi=insertAtBeginning(demo,6);