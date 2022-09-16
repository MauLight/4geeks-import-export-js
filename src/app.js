/* eslint-disable */
import "bootstrap";
import "./style.css";
import m from "./my_file";
import { restFunction } from "./my_file";
import { multiplyFunction, Mathfunction } from "./my_file";

let total = multiplyFunction(3, 6);
let myMath = new Mathfunction();
let mathTotal = myMath.divide(3, 6);
let restTotal = restFunction(4, 8);

console.log(total);
console.log(mathTotal);
console.log(m);
console.log(restTotal);

import { myFunction, myVar, myClass } from "./parentmod";

console.log(myFunction(), myVar);

let Arrow = new myClass("Mau");
console.log(Arrow.x);
