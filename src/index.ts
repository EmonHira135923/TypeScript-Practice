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

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  course: string[];
  courseMark: number[];
  courseInfo: [string, number, boolean];
};

const emon: Person = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
  course: ["CSE", "EEE", "BBA"],
  courseMark: [90, 80, 70],
  courseInfo: ["CSE", 90, true],
};

// console.log("Person Info ", emon);

function displayPersonInfo(person: Person): void {
  console.log("User Here: ", person);
}

displayPersonInfo(emon);
