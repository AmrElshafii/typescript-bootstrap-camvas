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
// // Write Your Code Here
// type n = number
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here
// assign 2
// // Write Your Code Here
// type mix = number | boolean
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here
// assign 3
// // Write Your Code Here
// type Info = {
//     theName : string,
//     theAge : number,
// }
// type Full = Info & {
//     country : string,
// }
// // Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));
// function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// assign 4
// function yesOrNo(val: number | boolean | string) : boolean {
//     if (typeof val === 'string' || typeof val === 'boolean') throw new Error('error')
//     return val > 10;
// }
// // Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False
// assign 5
// type custom = string
// function isHeOld(age: number | string) : custom | number {
//     if(typeof age === 'string') throw new Error('Error')
//     return age > 40 ? 'Yes' : 'No';
// }
// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"
// assign 6
// let post : readonly [number, string, boolean]
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// // Create Destructuring Here
// let [id, title, state] = post
// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true
// assign 7
// Create Enums + Function Here
// function calcInsane(num) {
//     return Game.Easy - num
// }
// enum Game {
//     Easy = 100,
//     Medium = Easy - 20,
//     Hard = Medium - (Easy / 2),
//     Insane = calcInsane(80)
// }
// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20
// assign 8
// const user: {
//     username: string,
//     age: number | string,
//     website?: string,
//     skills: {
//         frontEnd: string[],
//         backEnd: (string | number)[]
//     }
// } = {
//     username: "Elzero",
//     age: 40,
//     website: "Elzero.org",
//     skills: {
//         frontEnd: ["HTML", "CSS", "JS"],
//         backEnd: ["PHP", "Python"]
//     }
// }
// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);
// weak 3 
// assign 1
// // Edit The Interface To Fix The Problems
// interface Member {
//     id: number | string;
//     username: string;
//     country?: string;
//     state: boolean;
//     getName() : string;
// }
// // Do Not Edit The Code Below
// let user: Member = { // Property 'country' is missing in type
//     id: 100,
//     username: "Elzero",
//     state: true,
//     getName() { // 'getName' does not exist in type 'Member'
//         return this.username;
//     }
// }
// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property
//  assign 2
// Create Interface Here
// interface Client {
//     id: number,
//     username: string,
//     active: boolean,
//     discount: number,
//     getPrice(price: number),
// }
// // Do Not Edit The Code Below
// let client: Client = {
//     id: 100,
//     username: "Elzero",
//     active: true,
//     discount: 10,
//     getPrice(price: number) {
//         return price - this.discount;
//     }
// }
// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
// assign 3
// Do Not Edit The Code Below
// interface Man {
//     title: string;
//     weight: number;
//     age: number;
// }
// interface Bird {
//     canFly: boolean;
// }
// interface Superman extends Man, Bird {
//     bodyType : string,
//     origin : string
// }
// let creature: Superman = {
//     title: "Superman",
//     weight: 100,
//     age: 500,
//     canFly: true,
//     bodyType: "Iron",
//     origin: "Krypton"
// }
// assign 4
// Create Class Here
// class Player {
//     name: string;
//     type: string;
//     level: number | string;
//     vipState : boolean;
//     constructor(name: string, type: string, level: number | string, vipState : boolean = false) {
//         this.name = name;
//         this.type = type;
//         this.level = level;
//         this.vipState = vipState;
//     }
//     details() : string {
//         return `${this.vipState ? 'VIP' : ''} ${this.name}, ${this.type} Is Mage Level Is ${this.level}`
//     }
// }
// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);
// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
// assign 5
// class Shorten {
//     id: number;
//     username: string;
//     protected title: string;
//     constructor (id: number, username: string, title: string) {
//         this.id = id;
//         this.username = username;
//         this.title = title;
//     }
// }
// let tester = new Shorten(100, "Elzero", "Developer");
// console.log(tester.id);
// console.log(tester.username);
// assign 6
// class Show {
//     title: string
//     constructor (private _title: string) {
//         this.title = this._title
//     }
// }
// let tester = new Show("Elzero");
// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// assign 7
// interface Play {
//     id: number;
//     title: string;
//     level: number | string;
//     logIn(): void;
//     logOut(msg: string): void;
// }
// // Create Your Class Here
// class Player implements Play {
//     id : number;
//     title : string;
//     level : number;
//     constructor(id: number, title: string, level: number) {
//         this.id = id;
//         this.title = title;
//         this.level = level;
//     }
//     logIn() : void {
//         console.log('Logged In')
//     }
//     logOut(str : string) : void{
//         console.log(`Logged Out, ${str}`)
//     }
// }
// let player1 = new Player(100, "Elzero", 95);
// console.log(player1.id); // 100
// console.log(player1.title); // "Elzero"
// console.log(player1.level); // 95
// player1.logIn(); // Logged In
// player1.logOut("Good Bye"); // Logged Out, Good Bye
// weak 4
// assign 1
//# sourceMappingURL=index.js.map