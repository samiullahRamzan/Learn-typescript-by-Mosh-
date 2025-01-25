//  tsc detect variable type on the bases of value asigned...
let sales = 123_456_789;
let course = "Typescript";
let is_Published = true;

// if not value is assigned then show any
let level;

level = 1;
level = "3";

// arrays
let number: number[] = [];

number.forEach((n) => n.toFixed);

// tuples, are very userful when you have two values ,, other than there is very rush of different types

let user: [number, string] = [1, "Mosh"];

user.push(1); // there is an issue in typescript that can be resolved in future, compiler will not complain here

console.log("user", user);

//  enums, when we defined a const with enum then compiler generate more optimize code then enum
// const small=1;
// const medium=2;
// const large=3;

const enum Size {
  small = 1,
  medium,
  large,
}
let mySize: Size = Size.medium;
console.log(mySize);

function calculateTax(income: number, taxYear?: Number): number {
  //   let x;
  if (income < 50_000 || taxYear) return income * 1.2;
  return income * 1.2;
}

// objects..
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "sami",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// use type aliase
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "sami",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types, function parameter might have many types
let weight: number | string;
function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// Intersection types
let weight1: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";

// nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("hola!");
}

//greet(null); // this is a valid javascript code .. if we run then  name.toUpperCase() error we cannot run this function on null or undefined object and we handle it using name?.toUpperCase()
//greet(null); // error in typescript, but we can solve it using like this name: string | null | undefined

// optional chaining
type Customer = {
  birthDate: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthDate: new Date() };
}

let customer = getCustomer(0);
if (customer != null && customer != undefined) console.log(customer.birthDate);

// if (customer != null && customer != undefined), we can use optional property access operator
console.log(customer?.birthDate);

// optional element access operator, useful for arrays
// customers?.[0]

// optional call operator
// let log: any = (message: string) => console.log(message);
// let log:any=null
// log?.('a)
