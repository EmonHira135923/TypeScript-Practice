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

// Object Type

// Object Data

// const hello: { name: string; age: number } = {
//   name: "Emon Hossain Hira",
//   age: 23,
// };

// console.log(hello);

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   phone?: number;
// };

// const user1: Person = {
//   name: "Emon Hossain Hira",
//   age: 23,
//   isStudent: true,
// };

// const user2: Person = {
//   name: "Akbor Hossain",
//   age: 22,
//   isStudent: false,
//   phone: 1234567890,
// };

// const showUserInfo = (user: Person): void => {
//   console.log(
//     `User Name is ${user.name} and His/Her age is ${user.age} and He/She is a ${user.isStudent ? "Student" : "Not a Student"} and His/Her Phone Number is ${user.phone ? user.phone : "Not Provided"}`,
//   );
// };

// showUserInfo(user1);
// showUserInfo(user2);

//  Project - 03

// Blog Post

// title,content,author,publised status

// type BlogPost = {
//     title: string;
//     content: string;
//     author: string;
//     published: boolean;
//     publishedDate?: string;
// }

// const blogPost1: BlogPost = {
//     title: "My First Blog Post",
//     content: "This is the content of my first blog post.",
//     author: "Emon Hossain Hira",
//     published: true,
//     publishedDate: "2023-04-01"
// }

// const blogPost2: BlogPost = {
//     title: "My Second Blog Post",
//     content: "This is the content of my second blog post.",
//     author: "Akbor Hossain",
//     published: true,
// }

// const blogPost3: BlogPost = {
//     title: "My Third Blog Post",
//     content: "This is the content of my third blog post.",
//     author: "Emon Hossain Hira",
//     published: false,
//     publishedDate: "2023-04-03"
// }

// const showBlogPost = (post:BlogPost) :void => {
//     if(post.publishedDate!==undefined && post.published===true) {
//         console.log(`Blog Post Title: ${post.title} \nContent: ${post.content} \nAuthor: ${post.author} \nPublished: ${post.published} \nPublished Date: ${post.publishedDate}`);
//     }
//     else if(post.published===false){
//         console.log(`Published post is not publihed yet. Please Published it first`);
//     }
//     else{
//         console.log(`PublishedDate is Required for Published Blog Post`);
//     }
// }

// showBlogPost(blogPost1);
// showBlogPost(blogPost2);
// showBlogPost(blogPost3);

// # Interfaces Vs Type Aliases
// # Syntax Comparison
// # Use Cases
// # Extending Interfaces

type User = {
  name: string;
  age: number;
  isStudent: boolean;
};

const Emon: User = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
};

console.log(Emon);

interface Data  {
    dataName:string;
    dataNumber:number;
    isvalid:boolean;
}

interface DataChild extends Data {
    dataActive: boolean
}

const ChildAData:DataChild = {
    dataName: "Info-ICT",
    dataNumber: 25,
    isvalid: true,
    dataActive:true
}

console.log(ChildAData);



// # User Profile System
//  ## user ---> username,age,phone,email author ---> bio,post status ----> type ---> check

interface AllUser {
    username:string;
    age:number;
    phone:string;
    email:string
}

interface author extends AllUser {
    bio:string;
    post: string[];
}

type Status = "active" | "inactive" | "banned";


const firstUser:author = {
    username: "Emon Hossain Hira",
    age: 23,
    phone: "01817516654",
    email: "emonhossainhira231@gmail.com",
    bio:"Time and Wait For None",
    post: ["blog1","post1","blog2"]
}

const firstUserStaus:Status = "active";

const showUserData = (user:author,status:Status) :void => {
    console.log("user of first",user,status);
}

showUserData(firstUser,firstUserStaus);

