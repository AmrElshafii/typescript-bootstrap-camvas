"use strict";
// weak 1
// assign 2
// function calculate(numOne: number, numTwo: number)  {
//     if(typeof numOne != 'number' || typeof numTwo != 'number') return 
//     return numOne + numTwo;
// }
// console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2
// assign 3
// function printInfo(valueOne: number | string, valueTwo: number | string) {
//     if((typeof valueOne != 'number' && typeof valueOne != 'string') || (typeof valueTwo != 'number' && typeof valueTwo != 'string')) return 
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }
// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// assign 4
// let arr: (number | boolean[] | (string | (string | number)[])[])[];
// arr = [1, [true, false], ['a', ['amr', 2]]]
// console.log(arr)
// assign 5
// function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
// }
// console.log(reportErrors("Elzero", 40));
// assign 6
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c?) {
//   return `${a}${b}${c}`;
// }
// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(nothing, nothing, theName)); // Elzero
// assign 7
// function showMsg(user?: any, age?: any, country?: any) {
//     return `${user}${age}${country}`;
// }
// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));
// asign 8
// Write The Function Here
// function printInConsole(...args) {
//     let str : string = "";
//     for(let elem of args) {
//         str = `${str}` + `The Value Is ${elem} And Type Is ${typeof elem} \n`
//     }
//     str = str + 'done'
//     return str
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));
// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
// weak 2
// assign 1
//# sourceMappingURL=index.js.map