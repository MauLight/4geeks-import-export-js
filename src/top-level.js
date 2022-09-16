import {myFunction, myVar, myClass} from './parentmod';

console.log(myFunction, myVar);

let Arrow = new myClass;
myClass.x = 'Mau';
console.log(Arrow.x);