//  tsc detect variable type on the bases of value asigned...
let sales=123_456_789;
let course='Typescript';
let is_Published=true;

// if not value is assigned then show any
let level;

level=1;
level='3'

// arrays
let number:number[]=[]

number.forEach(n=> n.toFixed)

// tuples, are very userful when you have two values ,, other than there is very rush of different types

let user:[number,string]=[1,'Mosh'];

user.push(1);    // there is an issue in typescript that can be resolved in future, compiler will not complain here

console.log('user',user);


//  enums, when we defined a const with enum then compiler generate more optimize code then enum
// const small=1;
// const medium=2;
// const large=3;

const enum Size {small=1,medium,large}
let mySize:Size=Size.medium
console.log(mySize)

function calculateTax(income:number,taxYear?:Number):number{
   let x;
   if (income<50_000)
    return income*1.2;
   return income*1.2;
}