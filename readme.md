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

এখানে আপনার **Module 03**-এর জন্য একটি গোছানো এবং প্রফেশনাল **README.md** ফাইল তৈরি করে দেওয়া হলো। আগের মডিউলগুলোর মতো এটিতেও ইংরেজি ও বাংলা উভয় ভাষায় সহজ ডেফিনিশন এবং আপনার দেওয়া কোডগুলো সুন্দরভাবে বিন্যাস করা হয়েছে।

---

# 📘 TypeScript Mastery: Module 03

Welcome to **Module 03** of learning TypeScript! This module focuses entirely on **Functions in TypeScript**, exploring parameter rules, strict return types, arrow functions, and practical calculator implementation.

---

## 📌 3.1 Function Types (ফাংশন টাইপস)

### 📖 Definition / সংজ্ঞা:

- **English:** Function typing allows us to explicitly define the data types of the parameters a function accepts and the type of value it returns.
- **বাংলা:** ফাংশন টাইপিংয়ের মাধ্যমে একটি ফাংশন প্যারামিটার হিসেবে কী ধরণের ডেটা গ্রহণ করবে এবং কাজ শেষে কী ধরণের ডেটা রিটার্ন করবে তা নির্দিষ্ট করে দেওয়া হয়।

### 💻 Code Example:

```typescript
function happy(smile: string): string {
  return `Yes I am ${smile}`;
}

console.log(happy("happy"));
```

---

## 📌 3.2 Optional and Default Parameters (অপশনাল এবং ডিফল্ট প্যারামিটার)

### 📖 Definition / সংজ্ঞা:

- **Optional Parameters (`?`):**
- _English:_ Allows a parameter to be skipped when calling the function. It becomes `undefined` if not provided.
- _বাংলা:_ কোনো প্যারামিটারকে ঐচ্ছিক করার জন্য `?` ব্যবহার করা হয়। ভ্যালু না দিলে এটি `undefined` হিসেবে গণ্য হয়।

- **Default Parameters (`=`):**
- _English:_ Assigns a fallback value to a parameter if no value or `undefined` is passed during the function call.
- _বাংলা:_ ফাংশন কল করার সময় কোনো প্যারামিটারের ভ্যালু না দেওয়া হলে আগে থেকে সেট করে রাখা একটি ডিফল্ট ভ্যালু কাজ করে।

### 💻 Code Example:

```typescript
// --- Optional Parameters ---
function travel(
  startPlace: string,
  endPlace: string,
  travelTime?: string, // Optional parameter
): string {
  return `I am travelling from ${startPlace} to ${endPlace} and it will take ${travelTime ? travelTime : "some time"}`;
}

let travelInfo = travel("Dhaka", "Chittagong");
let travelInfo1 = travel("Dhaka", "Chittagong", "5 Hours");

console.log("TravelInformation: ", travelInfo);
console.log("TravelInformation: ", travelInfo1);

// --- Default Parameters ---
function User(name: string = "Guest"): string {
  // Default value is "Guest"
  return `User Name is ${name}`;
}

let userInfo = User(); // Uses default value
let userInfo1 = User("Emon Hossain Hira");

console.log("UserInfo: ", userInfo);
console.log("UserInfo: ", userInfo1);
```

---

## 📌 3.3 Return Type & `never` Type (রিটার্ন টাইপ এবং নেভার টাইপ)

### 📖 Definition / সংজ্ঞা:

- **Return Type:** Explicitly declares what type of data a function will return (e.g., `number`, `string`). / ফাংশনটি কী ধরণের ডেটা ফেরত পাঠাবে তা নির্ধারণ করে।
- **`never` Type:** Represents a value that _never_ occurs. It is used for functions that continuously loop or always throw an exception/error, meaning they never finish successfully. / এমন ফাংশনে ব্যবহৃত হয় যা কখনো স্বাভাবিকভাবে শেষ হয় না (যেমন: সবসময় এরর থ্রো করে বা ইনফিনিট লুপে চলে)।

### 💻 Code Example:

```typescript
// Standard Return Type
function add(num1: number, num2: number): number {
  return num1 + num2;
}

let summationValue = add(10, 20);
console.log("summation is: ", summationValue);

// never Type Example
function error(): never {
  throw new Error("Message is Wrong"); // Function terminates unexpectedly
}

// error(); // Uncomment to test (will crash execution intentionally)
```

---

## 📌 3.4 Arrow Functions (অ্যারো ফাংশন)

### 📖 Definition / সংজ্ঞা:

- **English:** Arrow functions provide a concise syntax for writing function expressions. In TypeScript, type annotations are applied directly to the parameters and return value.
- **বাংলা:** অ্যারো ফাংশন হলো ফাংশন লেখার একটি আধুনিক ও সংক্ষিপ্ত রূপ। টাইপস্ক্রিপ্টে এর প্যারামিটার এবং রিটার্ন টাইপ সরাসরি ব্র্যাকেটের ভেতরেই ডিফাইন করা হয়।

### 💻 Code Example:

```typescript
const person = (name: string, age: number, isStudent: boolean): string => {
  return `Person is ${name} and His age is now, ${age}. I am now as a ${isStudent}`;
};

let result = person("Emon Hossain Hira", 23, true);
console.log(result);
```

---

## 🚀 Project 2: Build Calculator With Typed Function

একটি সহজ এবং টাইপ-সেফ ক্যালকুলেটর প্রজেক্ট যেখানে অ্যারো ফাংশন ব্যবহার করে গাণিতিক হিসাব করা হয়েছে।

### 💻 Full Implementation:

```typescript
// Project - 02: Typed Calculator

const summation = (num1: number, num2: number): number => {
  return num1 + num2;
};

const substraction = (num1: number, num2: number): number => {
  return num1 - num2;
};

const multiplication = (num1: number, num2: number): number => {
  return num1 * num2;
};

const division = (num1: number, num2: number): number => {
  return num1 / num2;
};

// Execution / রান করা
let sum = summation(10, 20);
let sub = substraction(20, 10);
let mul = multiplication(10, 20);
let div = division(20, 10);

console.log("Summation: ", sum);
console.log("Substraction: ", sub);
console.log("Multiplication: ", mul);
console.log("Division: ", div);
```

---

# 📘 TypeScript Mastery: Module 04

Welcome to **Module 04** of learning TypeScript! This module covers **Object Structure Typing, Type Aliases for Complex Objects, Optional Properties**, and a hands-on project to create a structured **Blog Post System**.

---

## 📌 4.1 Object Structure Typing (অবজেক্ট স্ট্রাকচার টাইপিং)

### 📖 Definition / সংজ্ঞা:

- **English:** Inline object structure typing allows you to define the exact shape (property names and their types) of an object directly during its declaration.
- **বাংলা:** ইনলাইন অবজেক্ট স্ট্রাকচার টাইপিংয়ের মাধ্যমে একটি অবজেক্টের শেপ (প্রোপার্টির নাম এবং তাদের টাইপ) সরাসরি অবজেক্ট ডিক্লেয়ার করার সময় সুনির্দিষ্ট করে দেওয়া যায়।

### 💻 Code Example:

```typescript
// Inline Object Structure Typing
const hello: { name: string; age: number } = {
  name: "Emon Hossain Hira",
  age: 23,
};

console.log(hello);
```

---

## 📌 4.2 Type Alias for Complex Objects (কমপ্লেক্স অবজেক্টের জন্য টাইপ অ্যালিয়াস)

### 📖 Definition / সংজ্ঞা:

- **English:** A Type Alias (`type`) allows you to create a reusable custom name for a specific object structure, making your code cleaner and avoiding repetition.
- **বাংলা:** টাইপ অ্যালিয়াস (`type`)-এর মাধ্যমে একটি নির্দিষ্ট অবজেক্টের স্ট্রাকচারকে একটি কাস্টম নাম দিয়ে বারবার ব্যবহার করা যায়। এতে কোড পরিচ্ছন্ন হয় এবং বারবার একই জিনিস লিখতে হয় না।

### 💻 Code Example:

```typescript
// Reusable Type Alias
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  phone?: number; // Optional property
};

const user1: Person = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
};

const user2: Person = {
  name: "Akbor Hossain",
  age: 22,
  isStudent: false,
  phone: 1234567890,
};

const showUserInfo = (user: Person): void => {
  console.log(
    `User Name is ${user.name} and His/Her age is ${user.age} and He/She is a ${user.isStudent ? "Student" : "Not a Student"} and His/Her Phone Number is ${user.phone ? user.phone : "Not Provided"}`,
  );
};

showUserInfo(user1);
showUserInfo(user2);
```

---

## 📌 4.3 Optional Properties (ঐচ্ছিক প্রোপার্টি)

### 📖 Definition / সংজ্ঞা:

- **English:** By adding a question mark (`?`) after a property name in a type definition, you make that property optional. The object can be created with or without it.
- **বাংলা:** টাইপ ডিফাইন করার সময় প্রোপার্টির নামের পাশে একটি প্রশ্নবোধক চিহ্ন (`?`) দিলে সেটি ঐচ্ছিক বা অপশনাল হয়ে যায়। অর্থাৎ অবজেক্ট তৈরি করার সময় ওই প্রোপার্টি না দিলেও কোনো এরর আসে না।

### 💻 Code Example:

```typescript
type Student = {
  name: string;
  age: number;
  isStudent: boolean;
  phone?: number; // Optional Property (? means it can be undefined)
};

const user3: Student = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true, // phone property is skipped here, which is perfectly valid
};

console.log(user3);
```

---

## 🚀 Project 3: Blog Post System with Custom Types

একটি কাস্টম টাইপ ব্যবহার করে ব্লগ পোস্ট ম্যানেজমেন্ট সিস্টেম তৈরি, যেখানে টাইটেল, কনটেন্ট, লেখক এবং পাবলিশ স্ট্যাটাস হ্যান্ডেল করা হয়েছে।

### 💻 Full Implementation:

```typescript
// Type definition for a Blog Post
type BlogPost = {
  title: string;
  content: string;
  author: string;
  published: boolean;
  publishedDate?: string; // Optional Property
};

// Test Data
const blogPost1: BlogPost = {
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
  author: "Emon Hossain Hira",
  published: true,
  publishedDate: "2023-04-01",
};

const blogPost2: BlogPost = {
  title: "My Second Blog Post",
  content: "This is the content of my second blog post.",
  author: "Akbor Hossain",
  published: true,
};

const blogPost3: BlogPost = {
  title: "My Third Blog Post",
  content: "This is the content of my third blog post.",
  author: "Emon Hossain Hira",
  published: false,
  publishedDate: "2023-04-03",
};

// Function to display blog details based on conditional logic
const showBlogPost = (post: BlogPost): void => {
  if (post.publishedDate !== undefined && post.published === true) {
    console.log(
      `Blog Post Title: ${post.title} \nContent: ${post.content} \nAuthor: ${post.author} \nPublished: ${post.published} \nPublished Date: ${post.publishedDate}\n`,
    );
  } else if (post.published === false) {
    console.log(
      `❌ "${post.title}" is not published yet. Please publish it first.\n`,
    );
  } else {
    console.log(
      `⚠️ PublishedDate is Required for a Published Blog Post ("${post.title}").\n`,
    );
  }
};

// Running the function
showBlogPost(blogPost1);
showBlogPost(blogPost2);
showBlogPost(blogPost3);
```

---

# 📘 TypeScript Mastery: Module 05

Welcome to **Module 05** of learning TypeScript! This module covers the core concepts of **Interfaces vs. Type Aliases**, their **Syntax Comparison**, **Use Cases**, **Extending Interfaces**, and a hands-on project to build an advanced **User Profile System**.

---

## 📌 5.1 Interfaces Vs Type Aliases

### 📖 Definition / সংজ্ঞা:

- **Type Alias (`type`):**
- _English:_ Used to declare custom types for primitives, unions, tuples, and object shapes. It acts as a shortcut name for any valid type configuration.
- _বাংলা:_ এটি প্রিমিটিভ, ইউনিয়ন, টাপল এবং অবজেক্ট শেপের জন্য কাস্টম টাইপ ডিক্লেয়ার করতে ব্যবহৃত হয়। এটি যেকোনো ভ্যালিড টাইপ কনফিগারেশনের একটি শর্টকাট বা ডাকনাম হিসেবে কাজ করে।

- **Interface (`interface`):**
- _English:_ Exclusively used to define the structure/shape of object data and classes. It focuses heavily on Object-Oriented Programming (OOP) architectures.
- _বাংলা:_ এটি শুধুমাত্র অবজেক্টের স্ট্রাকচার বা শেপ এবং ক্লাস ডিফাইন করতে ব্যবহৃত হয়। অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) আর্কিটেকচারে ইন্টারফেস সবচেয়ে বেশি ব্যবহৃত হয়।

---

## 📌 5.2 Syntax Comparison & Use Cases

### 📖 Definition / সংজ্ঞা:

- **Syntax & Extensions:** Interfaces extend other interfaces using the `extends` keyword, while Type Aliases merge shapes using intersections (`&`).
- **Use Cases:** Use `interface` when defining object blueprints, API responses, or writing extendable libraries. Use `type` for simple objects, union types (like status states), or complex custom combinations.

### 💻 Code Example:

```typescript
// --- Type Alias Example ---
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

console.log("Type Alias User:", Emon);

// --- Interface Example ---
interface Data {
  dataName: string;
  dataNumber: number;
  isvalid: boolean;
}

const basicData: Data = {
  dataName: "Base Config",
  dataNumber: 100,
  isvalid: true,
};
```

---

## 📌 5.3 Extending Interfaces (ইন্টারফেস এক্সটেন্ড করা)

### 📖 Definition / সংজ্ঞা:

- **English:** Inheritance in interfaces is achieved via the `extends` keyword. This allows a child interface to inherit all properties from a parent interface while adding its own custom properties.
- **বাংলা:** ইন্টারফেসে ইনহেরিট্যান্স করার জন্য `extends` কিওয়ার্ড ব্যবহার করা হয়। এর মাধ্যমে একটি চাইল্ড ইন্টারফেস তার পেরেন্ট ইন্টারফেসের সকল প্রোপার্টি নিজে থেকেই পেয়ে যায় এবং চাইলে নতুন প্রোপার্টিও যুক্ত করতে পারে।

### 💻 Code Example:

```typescript
// Parent Interface
interface Data {
  dataName: string;
  dataNumber: number;
  isvalid: boolean;
}

// Child Interface extending the Parent Interface
interface DataChild extends Data {
  dataActive: boolean;
}

const ChildAData: DataChild = {
  dataName: "Info-ICT",
  dataNumber: 25,
  isvalid: true,
  dataActive: true, // New property from DataChild
};

console.log("Extended Interface Data:", ChildAData);
```

---

## 🚀 Project 4: Advanced User Profile & Author System

এখানে আমরা ইন্টারফেসের `extends` বৈশিষ্ট্য এবং টাইপ অ্যালিয়াসের `Union Type` ব্যবহার করে একটি প্রফেশনাল ইউজার এবং অথর প্রোফাইল সিস্টেম ডিজাইন করেছি।

### 💻 Full Implementation:

```typescript
// Base Interface for all users
interface AllUser {
  username: string;
  age: number;
  phone: string;
  email: string;
}

// Extending AllUser to create a specialized Author profile
interface Author extends AllUser {
  bio: string;
  post: string[];
}

// Type Alias using Union to restrict specific system states
type Status = "active" | "inactive" | "banned";

// Creating profile data based on the Author interface
const firstUser: Author = {
  username: "Emon Hossain Hira",
  age: 23,
  phone: "01817516654",
  email: "emonhossainhira231@gmail.com",
  bio: "Time and Tide Wait For None",
  post: ["blog1", "post1", "blog2"],
};

// Setting the user status using the strict Status Union Type
const firstUserStatus: Status = "active";

// Function to process and display user information safely
const showUserData = (user: Author, status: Status): void => {
  console.log("\n--- User Profile Data ---");
  console.log(`User: ${user.username}`);
  console.log(`Status: ${status.toUpperCase()}`);
  console.log(`Bio: "${user.bio}"`);
  console.log(`Total Posts: ${user.post.length}`);
  console.log("Full Object Data:", user);
};

// Execution / রান করা
showUserData(firstUser, firstUserStatus);
```

---

# 📘 TypeScript Mastery: Module 06

Welcome to **Module 06** of learning TypeScript! This module covers **Union & Intersection Types**, **Literal Types**, and the most powerful tool for logic handling: **Type Narrowing** and **Custom Type Guards**.

---

## 📌 6.1 Union, Intersection, and Literal Types

### 📖 Definition / সংজ্ঞা:

- **Union Types (`|`):** Allows a variable to hold one of several types (e.g., `string | number`).
- **Intersection Types (`&`):** Combines multiple types into one, requiring the variable to satisfy all combined types.
- **Literal Types:** Restricts a variable to hold only specific values (e.g., `"YES" | "NO"`).

### 💻 Code Example:

```typescript
// Union Types
type User = { email: string; name: string; rollNo: string | number };

// Intersection Types
type User2 = { email: string; name: string };
type User4 = { rollNo: string | number };
type User3 = User2 & User4; // Combines both types

// Literal Types
type Status = "YES" | "NO";

const user3: User3 = { email: "emon@gmail.com", name: "emon", rollNo: "189" };
const user3Status: Status = "YES";

const showData = (user: User3, status: Status): void => {
  console.log(`User: ${user.name}, Roll: ${user.rollNo}, Status: ${status}`);
};
```

---

## 📌 6.2 Type Narrowing (টাইপ ন্যারোয়িং)

### 📖 Definition / সংজ্ঞা:

টাইপ ন্যারোয়িং হলো এমন একটি প্রক্রিয়া যার মাধ্যমে আমরা বিভিন্ন শর্ত ব্যবহার করে একটি সাধারণ টাইপকে (যেমন `string | number`) সুনির্দিষ্ট টাইপে রূপান্তর করি যাতে নির্দিষ্ট মেথড ব্যবহার করা নিরাপদ হয়।

#### 1. Using `typeof`

প্রাথমিক টাইপ (primitive types) চেক করার জন্য এটি ব্যবহৃত হয়।

```typescript
type Product = { data: string | number };

const showData = (Data: Product): void => {
  if (typeof Data.data === "number") {
    console.log(Data.data * 2); // Safe to use math
  } else {
    console.log(Data.data.trim()); // Safe to use string methods
  }
};
```

#### 2. Using `in` Operator

অবজেক্টের ভেতর নির্দিষ্ট কোনো প্রোপার্টি আছে কি না তা যাচাই করতে `in` অপারেটর ব্যবহার করা হয়।

```typescript
type Car = { Bus: string };
type Cycle = { Cycle: string };

const showVehicle = (vehicle: Car | Cycle): void => {
  if ("Bus" in vehicle) {
    console.log("Yes, It's a Bus");
  } else {
    console.log("No, It's a Cycle");
  }
};
```

#### 3. Using `instanceof`

কোনো অবজেক্ট নির্দিষ্ট কোনো ক্লাসের কি না, তা যাচাই করতে `instanceof` ব্যবহার করা হয়।

```typescript
class House {
  hello() {
    console.log("Welcome to House");
  }
}
class NoHouse {
  hello() {
    console.log("No House here");
  }
}

const showHouse = (sound: House | NoHouse) => {
  if (sound instanceof House) {
    sound.hello();
  } else {
    sound.hello();
  }
};
```

---

## 📌 6.3 Custom Type Guards (কাস্টম টাইপ গার্ডস)

### 📖 Definition / সংজ্ঞা:

- **English:** Custom type guards are functions that return a type predicate (e.g., `profile is Admin`). They are useful when you have complex logic that `typeof` or `instanceof` cannot handle directly.
- **বাংলা:** যখন জটিল লজিকের কারণে সাধারণ টাইপ চেক করা কঠিন হয়, তখন আমরা কাস্টম ফাংশন তৈরি করি যা টাইপ চেক করে নিশ্চিত করে (যেমন: `profile is Admin`)। একেই কাস্টম টাইপ গার্ড বলে।

### 💻 Code Example:

```typescript
type User = { name: string; role: "user" };
type Admin = { name: string; role: "admin"; permissions: string[] };

// Custom Type Guard
const isAdmin = (profile: User | Admin): profile is Admin => {
  return profile.role === "admin" && "permissions" in profile;
};

const handleLogin = (profile: User | Admin) => {
  if (isAdmin(profile)) {
    // TypeScript now knows 'profile' is definitely an Admin
    console.log(`Welcome Admin! Permissions: ${profile.permissions.length}`);
  } else {
    // TypeScript knows it is a User
    console.log(`Welcome User ${profile.name}!`);
  }
};
```

# TypeScript Mastery: Module 07

### OOP

## Define Class
## Constructor and Modifier

## define

`
class Person {
name:string;
age:number;
isYoung:boolean;

    constructor(name:string,age:number,isYoung:boolean){
        this.name=name;
        this.age=age;
        this.isYoung= isYoung;
    }

    showUser(){
        console.log(`Hello! User Name is ${this.name}`);
    }

}

const user = new Person("Emon",23,true);

user.showUser();

class Product {
name:string;
price:number;
sizes:string[];

    constructor(name:string,price:number,sizes:string[]){
        this.name = name;
        this.price = price;
        this.sizes = sizes;
    }

    showProductData(){
        console.log(`Hi, User, This is ${this.name}.It's Price ${this.price}.It's has some sizes ${this.sizes}.`);
    }

};

const firstuserProduct = new Product("Punjabi",5000,["M","L","XL","XXL"]);

firstuserProduct.showProductData();

// ## Constructor and Modifier

class Books{
name:string;
authorName:string;
price:number;

    constructor(name:string,authorName:string,price:number){
        this.name=name;
        this.authorName=authorName;
        this.price=price;
    }

    showBooks(){
        console.log(`My Book Name is ${this.name}.${this.name} author name is ${this.authorName}.${this.name} and price is ${this.price}.`)
    }

}

const EmonBooks = new Books("Vector-Calculas","Unknown-Person",500);

EmonBooks.showBooks();

// Access Modifier
class BankAccount {
public accountName:string;
private accountBalance:number;
protected accountType:string;

    constructor(accountName:string,accountBalance:number){
        this.accountName = accountName;
        this.accountBalance = accountBalance;
        this.accountType = "savings"
    }

    showBalance(){
        console.log(`${this.accountBalance}.`)
    }

    showAccountType(){
        console.log(`${this.accountType}`)
    }

}

const user1 = new BankAccount("Emon Hossain Hira",70000);

console.log(`Account Name ${user1.accountName}`);
user1.showBalance();
user1.showAccountType();
`

## Inheritence

## Implements Keyword

## Project: Vehicle Management System

---

⚡ _Happy Coding with TypeScript! / শুভ টাইপস্ক্রিপ্ট কোডিং!_
