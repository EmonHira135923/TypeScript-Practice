# 📘 TypeScript Mastery: Module 01

Welcome to **Module 01** of learning TypeScript! This repository contains the foundational setup, configuration, and a basic example to help you understand how TypeScript works.
টাইপস্ক্রিপ্ট (TypeScript) শেখার প্রথম মডিউলে আপনাকে স্বাগতম! এই রিপোজিটরিতে বেসিক সেটআপ, কনফিগারেশন এবং একটি সহজ উদাহরণের মাধ্যমে টাইপস্ক্রিপ্টের কাজের প্রক্রিয়া দেখানো হয়েছে।

---

## 🎯 What is TypeScript? / টাইপস্ক্রিপ্ট কী?

**English:**
TypeScript is a strongly typed, open-source programming language developed and maintained by Microsoft. It is a strict **syntactical superset of JavaScript**, meaning any valid JavaScript code is also valid TypeScript code.

> 💡 **Key Concept:** Browsers cannot run TypeScript directly. It compiles down to clean, readable JavaScript before execution.

**বাংলা:**
TypeScript হলো একটি স্ট্রংলি টাইপড (Strongly Typed), ওপেন-সোর্স প্রোগ্রামিং ল্যাঙ্গুয়েজ যা মাইক্রোসফট তৈরি ও মেইনটেইন করে। এটি মূলত **জাভাস্ক্রিপ্টের একটি সুপারসেট (Superset)**, যার মানে হলো যেকোনো ভ্যালিড জাভাস্ক্রিপ্ট কোড টাইপস্ক্রিপ্টেও সম্পূর্ণ ভ্যালিড।

> 💡 **মূল বিষয়:** ব্রাউজার সরাসরি টাইপস্ক্রিপ্ট রান করতে পারে না। রান করার আগে এটি কম্পাইল হয়ে ক্লিন জাভাস্ক্রিপ্ট কোডে রূপান্তরিত হয়।

---

## 🚀 Why Use TypeScript Over JavaScript? / কেন জাভাস্ক্রিপ্টের চেয়ে টাইপস্ক্রিপ্ট ব্যবহার করবেন?

| Feature / বৈশিষ্ট্য | JavaScript 💛                                            | TypeScript 💙                                                               |
| :------------------ | :------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Type System**     | Dynamically Typed (Checked at runtime)                   | Statically Typed (Checked at compile-time)                                  |
| **Error Detection** | Errors are found during execution (রানটাইমে ভুল ধরা পড়ে) | Errors are caught instantly during development (কোড লেখার সময়ই ভুল ধরা পড়ে) |
| **Autocompletion**  | Limited / Basic                                          | Rich IntelliSense and auto-complete support (কোড সাজেশন)                    |
| **Maintainability** | Harder to scale in large codebases                       | Highly predictable and structured for large teams                           |

---

## 🛠️ Installation & Setup Guide / ইনস্টলেশন এবং সেটআপ গাইড

### 1. Initialize the Project / প্রজেক্ট ইনিশিয়ালাইজ করা

Create a `package.json` file by running:

```bash
npm init -y

```

### 2. Install TypeScript Locally / লোকাললি টাইপস্ক্রিপ্ট ইনস্টল করা

Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev

```

### 3. Global Installation (Optional) / গ্লোবাল ইনস্টলেশন (ঐচ্ছিক)

If you want to use the TypeScript compiler (`tsc`) anywhere on your machine:

```bash
npm install -g typescript

```

---

## ⚙️ TypeScript Configuration (`tsconfig.json`) / টাইপস্ক্রিপ্ট কনফিগারেশন

To generate the configuration file, run / কনফিগারেশন ফাইল তৈরি করতে রান করুন:

```bash
tsc --init

```

Open the newly created `tsconfig.json` file and update/uncomment the following settings:
`tsconfig.json` ফাইলটি ওপেন করে নিচের সেটিংসগুলো আপডেট অথবা আনকমেন্ট করুন:

- **`rootDir`**: Set this to `"./src"` (Where you will write your TypeScript code / যেখানে আপনি কোড লিখবেন)।
- **`outDir`**: Set this to `"./dist"` (Where the compiled JavaScript files will be generated / কম্পাইল হওয়া জাভাস্ক্রিপ্ট ফাইল যেখানে জমা হবে)।

---

## 📂 Project Folder Architecture / ফোল্ডার স্ট্রাকচার

A standard, clean project structure looks like this / একটি আদর্শ প্রজেক্ট স্ট্রাকচার নিচের মতো হওয়া উচিত:

```text
TypeScript-Project/
├── node_modules/         # Dependencies (অটো-জেনারেটেড ফাইলস)
├── dist/                 # Compiled JavaScript files (প্রোডাকশন আউটপুট)
│   └── index.js
├── src/                  # Source files (আপনার টাইপস্ক্রিপ্ট কোড)
│   └── index.ts
├── .gitignore            # Files/Folders to ignore in Git
├── package-lock.json
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration settings
└── README.md             # Project documentation (এই ফাইলটি)

```

⚠️ **Mandatory Rule / বাধ্যতামূলক নিয়ম:** Always add `node_modules/` and `dist/` to your `.gitignore` file to avoid pushing heavy or auto-generated files to GitHub. (`node_modules/` এবং `dist/` ফোল্ডার দুটি অবশ্যই `.gitignore` ফাইলে যুক্ত করবেন)।

---

## ✍️ Code Example & Execution / কোড উদাহরণ এবং রান করার নিয়ম

### Source File: `src/index.ts`

```typescript
function person(name: string, age: number): { name: string; age: number } {
  return { name, age };
}

const result = person("Emon", 40);
console.log("Person is: ", result);
```

### 🏃 How to Run the Code / কোড রান করার উপায়

#### Method A: Using the Terminal / টার্মিনালের মাধ্যমে

1. Compile the TypeScript code into JavaScript (কোড কম্পাইল করুন):

```bash
tsc

```

2. Run the compiled JavaScript file inside the `dist` folder (কম্পাইল হওয়া ফাইল রান করুন):

```bash
node dist/index.js

```

#### Method B: Using Code Runner Extension / কোড রানার এক্সটেনশন ব্যবহার করে

1. Install the **Code Runner** extension in VS Code.
2. Install `ts-node` to run `.ts` files instantly without manual compilation:
   (বারবার কম্পাইল না করে সরাসরি রান করার জন্য `ts-node` ইনস্টল করতে পারেন):

```bash
npm install -g ts-node

```

3. Open `index.ts` and click the **Play** button (or press `Ctrl + Alt + N`).

---

# 📘 TypeScript Mastery: Module 02

Welcome to **Module 02** of learning TypeScript! This module covers **Type Annotations, Basic Types (Primitive & Non-Primitive), Special Types**, and **Type Inference** with clean code examples.

---

## 📌 1. Primitive Types: `string`, `number`, `boolean`

### 📖 Definition / সংজ্ঞা:

- **English:** Primitive types are the most basic data types built into JavaScript and TypeScript. They represent a single, immutable value.
- **বাংলা:** প্রিমিটিভ টাইপস হলো জাভাস্ক্রিপ্ট এবং টাইপস্ক্রিপ্টের একদম বেসিক ডেটা টাইপ, যা কেবল একটি সিঙ্গেল ভ্যালু রিপ্রেজেন্ট করে।

### 💻 Code Example:

```typescript
// Primitive Types

// String: Represents textual data / টেক্সট বা লেখা প্রকাশ করে
const name: string = "Emon Hossain Hira";

// Number: Represents numeric values (integers, floats) / সংখ্যা প্রকাশ করে
const age: number = 23;

// Boolean: Represents true or false / সত্য বা মিথ্যা প্রকাশ করে
const isStudent: boolean = true;

console.log("person name is : ", name);
console.log("person age is : ", age);
console.log("person is student : ", isStudent);
```

---

## 📌 2. Non-Primitive Types: Arrays and Tuples

### 📖 Definition / সংজ্ঞা:

- **Arrays:**
- _English:_ An array is a collection of similar types of data.
- _বাংলা:_ একই ধরণের একাধিক ডেটার কালেকশন বা লিস্টকে অ্যারে বলে।

- **Tuples:**
- _English:_ A tuple is a fixed-size array where each element has a predefined type and order.
- _বাংলা:_ টাপল হলো একটি নির্দিষ্ট সাইজের অ্যারে, যার প্রতিটি উপাদানের ডেটা টাইপ এবং পজিশন আগে থেকেই ফিক্সড বা নির্ধারিত থাকে।

### 💻 Code Example:

```typescript
// Non-Primitive Types: Arrays and Tuples

// --- Arrays (Syntax 1) ---
const numberArray: number[] = [1, 2, 3, 4, 5];
const nameArray: string[] = ["Emon", "Hossain", "Hira"];

console.log("array is number : ", numberArray);
console.log("array is string : ", nameArray);

// --- Arrays (Syntax 2: Generic Array) ---
const numberArray1: Array<number> = [1, 2, 3, 4, 5, 6];
const nameArray1: Array<string> = ["Emon", "Hossain", "Hira", "BUBT"];

console.log("array is number : ", numberArray1);
console.log("array is string : ", nameArray1);

// --- Tuples ---
// Structure: [string, number, boolean] -> Order must be maintained
const person: [string, number, boolean] = ["Emon", 23, true];

console.log("person full details: ", person);
```

---

## 📌 3. Special Types: `any`, `unknown`, `void`, `null`, `undefined`

### 📖 Definition / সংজ্ঞা:

- **`any`:** Turns off type checking completely. It can hold _any_ value. (Avoid using this!). / টাইপ চেকিং বন্ধ করে দেয়। যেকোনো ভ্যালু রাখতে পারে।
- **`unknown`:** A safer alternative to `any`. You cannot perform operations on it without type checking first (Type Guard). / `any`-এর চেয়ে নিরাপদ। এটি ব্যবহার করার আগে টাইপ চেক করে নিশ্চিত হতে হয়।
- **`void`:** Used as a return type for functions that do not return any value. / কোনো ফাংশন যদি কোনো ভ্যালু রিটার্ন না করে, তবে তার রিটার্ন টাইপ হয় `void`।
- **`null` & `undefined`:** Represent absence of a value or uninitialized variables. / কোনো ভ্যালু খালি বা অনুপস্থিত বোঝাতে ব্যবহৃত হয়।

### 💻 Code Example:

```typescript
// Special Types

// 1. any: No type safety
let person: any = "Emon Hossain Hira";
console.log("person name is : ", person);

person = 23; // Allowed
console.log("person age is : ", person);

person = true; // Allowed
console.log("person is student : ", person);

// 2. unknown: Safe type checking
let person1: unknown = 12;

if (typeof person1 === "string") {
  console.log("person name is : ", person1); // Only runs if it's a string
} else {
  console.log("person is another data here", person1);
}

// 3. void: Function returns nothing
function personishere(): void {
  console.log("Person is Here");
}
personishere();

// 4. null & undefined
let nothing: null = null;
let person2: undefined = undefined;

console.log("nothing", nothing, "person2", person2);
```

---

## 📌 4. Type Inference (টাইপ ইনফারেন্স)

### 📖 Definition / সংজ্ঞা:

- **English:** Type Inference means TypeScript automatically guesses and assigns a type to a variable based on its initial value, even if you don't explicitly write the type.
- **বাংলা:** টাইপ ইনফারেন্স মানে হলো, আপনি যদি নিজে থেকে কোনো ভ্যারিয়েবলের টাইপ বলে নাও দেন, টাইপস্ক্রিপ্ট তার শুরুর ভ্যালু দেখে অটোমেটিকভাবে টাইপ বুঝে নেয়।

### 💻 Code Example:

```typescript
// Type Inference

let autoName = "Emon"; // TypeScript automatically knows this is a 'string'
// autoName = 25; // ❌ Error: Type 'number' is not assignable to type 'string'.

console.log("person data: ", autoName);
```

---

## 🚀 Project: Simple Student Profile with Types

Here we use a **Type Alias** (`type`) to create a structured custom object type for a student profile.
এখানে আমরা একটি **Type Alias** ব্যবহার করে স্টুডেন্ট প্রোফাইলের জন্য একটি কাস্টম অবজেক্ট স্ট্রাকচার তৈরি করেছি।

### 💻 Full Implementation:

```typescript
// Type Alias definition
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  course: string[];
  courseMark: number[];
  courseInfo: [string, number, boolean]; // Tuple
};

// Creating an object using the Person type
const emon: Person = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
  course: ["CSE", "EEE", "BBA"],
  courseMark: [90, 80, 70],
  courseInfo: ["CSE", 90, true],
};

// Function that accepts a parameter of type 'Person'
function displayPersonInfo(person: Person): void {
  console.log("User Here: ", person);
}

// Running the function
displayPersonInfo(emon);
```

---

# 📘 TypeScript Mastery: Module 03

# Functions in TypeScript

# 3.1 Function Types

# defination

```
function happy(smile: string): string {
   return `Yes I am ${smile}`;
 }

 console.log(happy("happy"));
```

# 3.2 Optional and default parameters

# defination

```
// Optional Parameters

function travel(
  startPlace: string,
  endPlace: string,
  travelTime?: string,
): string {
  return `I am travelling from ${startPlace} to ${endPlace} and it will take ${travelTime ? travelTime : "some time"}`;
}

let travelInfo = travel("Dhaka", "Chittagong");
let travelInfo1 = travel("Dhaka", "Chittagong", "5 Hours");

console.log("TravelInformation", travelInfo);
console.log("TravelInformation", travelInfo1);

// Default Parameters
function User(name: string = "Guest"): string {
  return `User Name is ${name}`;
}

let userInfo = User();
let userInfo1 = User("Emon Hossain Hira");

console.log("UserInfo: ", userInfo);
console.log("UserInfo: ", userInfo1);
```

# 3.3 Return Type

# defination

`
// Return Type

function add(num1: number, num2: number): number {
return num1 + num2;
}

let summation = add(10, 20);

console.log("summation is: ", summation);

// Never Type

function error() : never {
throw new Error("Message is Wrong");
}

error();
`

# 3.4 Arrow Functions

# defination

`const person = (name:string,age:number,isStudent:boolean) :string => {
 return`Person is ${name} and His age is now, ${age}. I am now as a ${isStudent}`
}

let result = person("Emon Hossain Hira",23,true);

console.log(result);

`

# Project 2: Build Calculator With Typed Function

```
// Project - 02

const summation = (num1:number,num2:number) :number => {
  return num1 + num2;
}
const substraction = (num1:number,num2:number) :number => {
  return num1 - num2;
}
const multiplication = (num1:number,num2:number) :number => {
  return num1 * num2;
}
const division = (num1:number,num2:number) :number => {
  return num1 / num2;
}

let sum = summation(10,20);
let sub = substraction(20,10);
let mul = multiplication(10,20);
let div = division(20,10);

console.log("Summation",sum);
console.log("Substraction",sub);
console.log("Multiplication",mul);
console.log("Division",div);

```

⚡ _Happy Coding with TypeScript! / শুভ টাইপস্ক্রিপ্ট কোডিং!_
