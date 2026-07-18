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

// type User = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// const Emon: User = {
//   name: "Emon Hossain Hira",
//   age: 23,
//   isStudent: true,
// };

// console.log(Emon);

// interface Data  {
//     dataName:string;
//     dataNumber:number;
//     isvalid:boolean;
// }

// interface DataChild extends Data {
//     dataActive: boolean
// }

// const ChildAData:DataChild = {
//     dataName: "Info-ICT",
//     dataNumber: 25,
//     isvalid: true,
//     dataActive:true
// }

// console.log(ChildAData);

// # User Profile System
//  ## user ---> username,age,phone,email author ---> bio,post status ----> type ---> check

// interface AllUser {
//     username:string;
//     age:number;
//     phone:string;
//     email:string
// }

// interface author extends AllUser {
//     bio:string;
//     post: string[];
// }

// type Status = "active" | "inactive" | "banned";

// const firstUser:author = {
//     username: "Emon Hossain Hira",
//     age: 23,
//     phone: "01817516654",
//     email: "emonhossainhira231@gmail.com",
//     bio:"Time and Wait For None",
//     post: ["blog1","post1","blog2"]
// }

// const firstUserStaus:Status = "active";

// const showUserData = (user:author,status:Status) :void => {
//     console.log("user of first",user,status);
// }

// showUserData(firstUser,firstUserStaus);

//  Union and Intersection Types
//  Literal Types
//  Type Narrowing
//  Type Guide

// Union Types

// type User = {
//     email: string;
//     name: string;
//     rollNo: string | number;
// }

// const user1:User = {
//     email:"emonhossainhira231@gmail.com",
//     name:"emonhossainhira",
//     rollNo:"189123"
// }

// const user2:User = {
//     email:"hira123@gmail.com",
//     name:"hira",
//     rollNo:115665
// }

// console.log("user1: ",user1,"user2: ",user2);

// Intersection Types

// type User2 = {
//     email: string;
//     name: string;
// }

// type User4 = {
//     rollNo: string | number;
// }

// type User3 = User2 & User4;

// const user3:User3 = {
//     email:"emonhossainhira231@gmail.com",
//     name:"emonhossainhira",
//     rollNo:"1897123"
// }

// const user4:User3 = {
//     email:"hira123@gmail.com",
//     name:"hira",
//     rollNo:1156659
// }

// console.log("user3: ",user3,"user4: ",user4);

// // Literal Types

// type status = "YES" | "NO";

// const user3Status:status = "YES";
// const user4Status:status = "NO";

// const showData = (user:User3,status:status) :void =>{
//     console.log(`User Name is ${user.name} and His Email is ${user.email} and His roll no is ${user.rollNo}.And, He is a Student and it's ${status}`)
// }

// showData(user3,user3Status);
// showData(user4,user4Status);

// Type Narrowing
// type Product = {
//     data : string | number;
// }

// const product1:Product = {
//     data:"  Hello Product  "
// }

// const product2:Product = {
//     data:500
// }

// const showData = (Data:Product) :void => {
//     if(typeof Data.data === "number"){
//         console.log(Data.data*2);
//     }
//     else{
//         console.log(Data.data.trim());
//     }
// }

// showData(product1);
// showData(product2);

// Type of Guard

// type of

// type Product = {
//   data: string | number;
// };

// const product1: Product = {
//   data: "  Hello Product  ",
// };

// const product2: Product = {
//   data: 500,
// };

// const showData = (Data: Product): void => {
//   if (typeof Data.data === "number") {
//     console.log(Data.data * 2);
//   } else {
//     console.log(Data.data.trim());
//   }
// };

// showData(product1);
// showData(product2);

// in opreator

// type Car = {
//     Bus: string;
// }

// type Car1 = {
//     Cycle: string;
// }

// const car:Car = {
//     Bus: "Jamuna Bus",
// }

// const cycle:Car1 = {
//     Cycle:"Duronto"
// }

// const showyourCar = (vehicle:Car | Car1) : void => {
//     if("Bus" in vehicle){
//         console.log("Yes,It's Bus");
//     }
//     else{
//         console.log("No,It's Cycle");
//     }
// }

// showyourCar(car);
// showyourCar(cycle);

// instance of

// class House {
//   hello() {
//     console.log("Anyone in this home");
//   }
// }

// class NoHouse {
//   hello() {
//     console.log("When they are come");
//   }
// }

// const emon = new House();
// const noemon = new NoHouse();

// const showDataofClass = (sound: House | NoHouse) => {
//     if(sound instanceof House){
//         sound.hello();
//     }
//     else{
//         sound.hello();
//     }
// };

// showDataofClass(emon);
// showDataofClass(noemon);

// Custom Type Gurads

// type User = {
//     name: string;
//     role: "user";
// };

// type Admin = {
//     name: string;
//     role: "admin";
//     permissions: string[];
// };

// // 1. Define the Custom Type Guards
// const isAdmin = (profile: User | Admin): profile is Admin => {
//     return profile.role === "admin" && "permissions" in profile;
// };

// const isUser = (profile: User | Admin): profile is User => {
//     return profile.role === "user";
// };

// // 2. Use them in your application logic
// const handleLogin = (profile: User | Admin) => {
//     if (isAdmin(profile)) {
//         // TypeScript now completely trusts that 'profile' is an Admin
//         console.log(`Welcome Admin! You have ${profile.permissions.length} permissions.`);
//     } else if (isUser(profile)) {
//         // TypeScript safely narrows 'profile' to a regular User here
//         console.log(`Welcome User ${profile.name}!`);
//     }
// };

// ### OOP
// ## Define Class

// class Person {
//     name:string;
//     age:number;
//     isYoung:boolean;

//     constructor(name:string,age:number,isYoung:boolean){
//         this.name=name;
//         this.age=age;
//         this.isYoung= isYoung;
//     }

//     showUser(){
//         console.log(`Hello! User Name is ${this.name}`);
//     }

// }

// const user = new Person("Emon",23,true);

// user.showUser();

// class Product {
//     name:string;
//     price:number;
//     sizes:string[];

//     constructor(name:string,price:number,sizes:string[]){
//         this.name = name;
//         this.price = price;
//         this.sizes = sizes;
//     }

//     showProductData(){
//         console.log(`Hi, User, This is ${this.name}.It's Price ${this.price}.It's has some sizes ${this.sizes}.`);
//     }

// };


// const firstuserProduct = new Product("Punjabi",5000,["M","L","XL","XXL"]);

// firstuserProduct.showProductData();

// // ## Constructor and Modifier

// class Books{
//     name:string;
//     authorName:string;
//     price:number;

//     constructor(name:string,authorName:string,price:number){
//         this.name=name;
//         this.authorName=authorName;
//         this.price=price;
//     }

//     showBooks(){
//         console.log(`My Book Name is ${this.name}.${this.name} author name is ${this.authorName}.${this.name} and price is ${this.price}.`)
//     }

// }

// const EmonBooks = new Books("Vector-Calculas","Unknown-Person",500); 

// EmonBooks.showBooks();

// // Access Modifier
// class BankAccount {
//     public accountName:string;
//     private accountBalance:number;
//     protected accountType:string;

//     constructor(accountName:string,accountBalance:number){
//         this.accountName = accountName;
//         this.accountBalance = accountBalance;
//         this.accountType = "savings"
//     }

//     showBalance(){
//         console.log(`${this.accountBalance}.`)
//     }

//     showAccountType(){
//         console.log(`${this.accountType}`)
//     }

// }

// const user1 = new BankAccount("Emon Hossain Hira",70000);

// console.log(`Account Name ${user1.accountName}`);
// user1.showBalance();
// user1.showAccountType();




// ## Inheritence


// ## Implements Keyword
// ## Project: Vehicle Management System

