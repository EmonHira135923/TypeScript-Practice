// function person(name:string,age:number) :{name:string,age:number} {
//     return {name,age};
// };

// const result = person("Emon",40);

// console.log("Person is: ",result);

// Primitive Types

// // String
// const name:string = "Emon Hossain Hira";

// // Number
// const age:number = 23;

// // Boolean
// const isStudent:boolean = true;

// console.log("person name is : ",name);
// console.log("person age is : ",age);
// console.log("person is student  : ",isStudent);

// // Non-Primitive Types

// // Arrays and Tuples

// // Arrays

// const numberArray: number[] = [1,2,3,4,5];

// const nameArray: string[] = ["Emon","Hossain","Hira"];

// console.log("array is number : ",numberArray);
// console.log("array is string : ",nameArray);

// const numberArray1: Array<number> = [1,2,3,4,5,6];

// const nameArray1: Array<string> = ["Emon","Hossain","Hira","BUBT"];

// console.log("array is number : ",numberArray1);
// console.log("array is string : ",nameArray1);

// // Tuples

// const person: [string,number,boolean] = ["Emon",23,true];

// console.log("person full details: ",person);

// // any,unknown,void,null,undefined

// // any

// let person: any = "Emon Hossain Hira";

// console.log("person name is : ", person);

// person = 23;

// console.log("person age is : ", person);

// person = true;

// console.log("person is student : ", person);

// // unknown

// let person1: unknown = 12;

// if (typeof person1 === "string") console.log("person name is : ", person1);
// else console.log("person is another data here", person1);

// // void

// function personishere(): void {
//   console.log("Person is Here");
// }

// personishere();

// // null

// let nothing:null =null;

// let person2: undefined = undefined;

// console.log("nothing",nothing,"person2",person2);

// // type inference

// let name = "Emon";

// console.log("person data: ",name);

// type alias

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   course: string[];
//   courseMark: number[];
//   courseInfo: [string, number, boolean];
// };

// const emon: Person = {
//   name: "Emon Hossain Hira",
//   age: 23,
//   isStudent: true,
//   course: ["CSE", "EEE", "BBA"],
//   courseMark: [90, 80, 70],
//   courseInfo: ["CSE", 90, true],
// };

// // console.log("Person Info ", emon);

// function displayPersonInfo(person: Person): void {
//   console.log("User Here: ", person);
// }

// displayPersonInfo(emon);

// function happy(smile: string): string {
//   return `Yes I am ${smile}`;
// }

// console.log(happy("happy"));

// // Optional Parameters

// function travel(
//   startPlace: string,
//   endPlace: string,
//   travelTime?: string,
// ): string {
//   return `I am travelling from ${startPlace} to ${endPlace} and it will take ${travelTime ? travelTime : "some time"}`;
// }

// let travelInfo = travel("Dhaka", "Chittagong");
// let travelInfo1 = travel("Dhaka", "Chittagong", "5 Hours");

// console.log("TravelInformation", travelInfo);
// console.log("TravelInformation", travelInfo1);

// // Default Parameters
// function User(name: string = "Guest"): string {
//   return `User Name is ${name}`;
// }

// let userInfo = User();
// let userInfo1 = User("Emon Hossain Hira");

// console.log("UserInfo: ", userInfo);
// console.log("UserInfo: ", userInfo1);

// Return Type

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }



// let summation = add(10, 20);

// console.log("summation is: ", summation);

// const person = (name:string,age:number,isStudent:boolean) :string => {
//  return `Person is ${name} and His age is now, ${age}. I am now as a ${isStudent}`
// }


// let result = person("Emon Hossain Hira",23,true);

// console.log(result);

// // Project - 02

// const summation = (num1:number,num2:number) :number => {
//   return num1 + num2;
// }
// const substraction = (num1:number,num2:number) :number => {
//   return num1 - num2;
// }
// const multiplication = (num1:number,num2:number) :number => {
//   return num1 * num2;
// }
// const division = (num1:number,num2:number) :number => {
//   return num1 / num2;
// }

// let sum = summation(10,20);
// let sub = substraction(20,10);
// let mul = multiplication(10,20);
// let div = division(20,10);

// console.log("Summation",sum);
// console.log("Substraction",sub);
// console.log("Multiplication",mul);
// console.log("Division",div);
