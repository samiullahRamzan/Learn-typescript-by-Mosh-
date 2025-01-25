"use strict";
let sales = 123456789;
let course = "Typescript";
let is_Published = true;
let level;
level = 1;
level = "3";
let number = [];
number.forEach((n) => n.toFixed);
let user = [1, "Mosh"];
user.push(1);
console.log("user", user);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (income < 50000 || taxYear)
        return income * 1.2;
    return income * 1.2;
}
let employee = {
    id: 1,
    name: "sami",
    retire: (date) => {
        console.log(date);
    },
};
let weight;
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let weight1;
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hola!");
}
function getCustomer(id) {
    return id === 0 ? null : { birthDate: new Date() };
}
let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log(customer.birthDate);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDate);
//# sourceMappingURL=index.js.map