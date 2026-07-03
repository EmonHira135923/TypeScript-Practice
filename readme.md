```markdown
# 📘 TypeScript Mastery — Complete Guide

<div align="center">

```
╔══════════════════════════════════════════════════════╗
║        🚀  WELCOME TO TYPESCRIPT MASTERY  🚀        ║
║     From Zero to Hero — A Bilingual Learning Path   ║
║           English • বাংলা • Code • Projects          ║
╚══════════════════════════════════════════════════════╝
```

</div>

---

## 📑 Table of Contents

| Module | Topic | Key Concepts |
|:------:|:------|:-------------|
| [01](#module-01--foundation--setup) | Foundation & Setup | Installation, Configuration, Architecture |
| [02](#module-02--types--annotations) | Types & Annotations | Primitive, Non-Primitive, Special Types, Inference |
| [03](#module-03--functions) | Functions | Parameters, Return Types, Arrow Functions, Project |

---

# MODULE 01 — FOUNDATION & SETUP

---

## 🎯 What is TypeScript? / টাইপস্ক্রিপ্ট কী?

| English | বাংলা |
|:--------|:------|
| TypeScript is a strongly typed, open-source programming language developed and maintained by Microsoft. It is a strict **syntactical superset of JavaScript**, meaning any valid JavaScript code is also valid TypeScript code. | TypeScript হলো একটি স্ট্রংলি টাইপড, ওপেন-সোর্স প্রোগ্রামিং ল্যাঙ্গুয়েজ যা মাইক্রোসফট তৈরি ও মেইনটেইন করে। এটি মূলত **জাভাস্ক্রিপ্টের একটি সুপারসেট**, যার মানে হলো যেকোনো ভ্যালিড জাভাস্ক্রিপ্ট কোড টাইপস্ক্রিপ্টেও সম্পূর্ণ ভ্যালিড। |

```
💡 KEY CONCEPT / মূল বিষয়:
Browsers cannot run TypeScript directly.
It compiles down to clean, readable JavaScript before execution.
ব্রাউজার সরাসরি টাইপস্ক্রিপ্ট রান করতে পারে না।
রান করার আগে এটি কম্পাইল হয়ে ক্লিন জাভাস্ক্রিপ্ট কোডে রূপান্তরিত হয়।
```

---

## 🚀 Why Use TypeScript Over JavaScript? / কেন জাভাস্ক্রিপ্টের চেয়ে টাইপস্ক্রিপ্ট ব্যবহার করবেন?

| Feature / বৈশিষ্ট্য | JavaScript | TypeScript |
|:---------------------|:-----------|:-----------|
| **Type System / টাইপ সিস্টেম** | Dynamically Typed (Checked at runtime) | Statically Typed (Checked at compile-time) |
| **Error Detection / ত্রুটি সনাক্তকরণ** | Errors found during execution (রানটাইমে ভুল ধরা পড়ে) | Errors caught during development (কোড লেখার সময়ই ভুল ধরা পড়ে) |
| **Autocompletion / অটো-কমপ্লিশন** | Limited / Basic | Rich IntelliSense and auto-complete support (সমৃদ্ধ কোড সাজেশন) |
| **Maintainability / রক্ষণাবেক্ষণযোগ্যতা** | Harder to scale in large codebases | Highly predictable and structured for large teams |

---

## 🛠️ Installation & Setup Guide / ইনস্টলেশন এবং সেটআপ গাইড

### Step 1: Initialize the Project / প্রজেক্ট ইনিশিয়ালাইজ করা

```bash
npm init -y
```

> Creates `package.json` — your project's identity card / আপনার প্রজেক্টের পরিচয়পত্র তৈরি করে।

---

### Step 2: Install TypeScript Locally / লোকালি টাইপস্ক্রিপ্ট ইনস্টল করা

```bash
npm install typescript --save-dev
```

> Adds TypeScript compiler to your project / আপনার প্রজেক্টে টাইপস্ক্রিপ্ট কম্পাইলার যোগ করে।

---

### Step 3: Global Installation (Optional) / গ্লোবাল ইনস্টলেশন (ঐচ্ছিক)

```bash
npm install -g typescript
```

> If you want to use `tsc` command anywhere on your machine / মেশিনের যেকোনো জায়গা থেকে `tsc` কমান্ড ব্যবহার করতে চাইলে।

---

## ⚙️ TypeScript Configuration / টাইপস্ক্রিপ্ট কনফিগারেশন

Generate the configuration file / কনফিগারেশন ফাইল তৈরি করুন:

```bash
tsc --init
```

Open `tsconfig.json` and update these settings / `tsconfig.json` ওপেন করে নিচের সেটিংস আপডেট করুন:

| Setting | Value | Purpose / উদ্দেশ্য |
|:--------|:------|:--------------------|
| `rootDir` | `"./src"` | Where you write TypeScript code / যেখানে আপনি টাইপস্ক্রিপ্ট কোড লিখবেন |
| `outDir` | `"./dist"` | Where compiled JavaScript goes / কম্পাইল হওয়া জাভাস্ক্রিপ্ট যেখানে জমা হবে |

---

## 📂 Project Folder Architecture / ফোল্ডার স্ট্রাকচার

```
TypeScript-Project/
├── node_modules/         # Dependencies / ডিপেন্ডেন্সি (অটো-জেনারেটেড)
├── dist/                 # Compiled JavaScript output / কম্পাইলড আউটপুট
│   └── index.js
├── src/                  # Source TypeScript files / সোর্স ফাইল
│   └── index.ts
├── .gitignore            # Git ignore rules
├── package.json          # Project metadata / প্রজেক্ট মেটাডেটা
└── tsconfig.json         # TypeScript configuration / টাইপস্ক্রিপ্ট কনফিগারেশন
```

```
⚠️ MANDATORY / বাধ্যতামূলক:
Always add node_modules/ and dist/ to .gitignore
node_modules/ এবং dist/ অবশ্যই .gitignore-এ যুক্ত করবেন।
```

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

### How to Run / কিভাবে রান করবেন:

**Method 1: Manual Compilation / ম্যানুয়াল কম্পাইলেশন**

```bash
# Compile / কম্পাইল
tsc

# Run / রান
node dist/index.js
```

**Method 2: Direct Run with ts-node / ts-node দিয়ে সরাসরি রান**

```bash
# Install / ইনস্টল
npm install -g ts-node

# Run / রান
ts-node src/index.ts
```

---

# MODULE 02 — TYPES & ANNOTATIONS

---

## 📌 Primitive Types: `string`, `number`, `boolean`

### Definition / সংজ্ঞা

| English | বাংলা |
|:--------|:------|
| Primitive types are the most basic data types built into JavaScript and TypeScript. They represent a single, immutable value. | প্রিমিটিভ টাইপস হলো জাভাস্ক্রিপ্ট এবং টাইপস্ক্রিপ্টের একদম বেসিক ডেটা টাইপ, যা কেবল একটি সিঙ্গেল ভ্যালু রিপ্রেজেন্ট করে। |

### Code Example / কোড উদাহরণ

```typescript
// String: Represents textual data / টেক্সট বা লেখা প্রকাশ করে
const name: string = "Emon Hossain Hira";

// Number: Represents numeric values / সংখ্যা প্রকাশ করে
const age: number = 23;

// Boolean: Represents true or false / সত্য বা মিথ্যা প্রকাশ করে
const isStudent: boolean = true;

console.log("person name is : ", name);
console.log("person age is : ", age);
console.log("person is student : ", isStudent);
```

---

## 📌 Non-Primitive Types: Arrays and Tuples

### Definition / সংজ্ঞা

| Type | English | বাংলা |
|:-----|:--------|:------|
| **Array** | An array is a collection of similar types of data. | একই ধরণের একাধিক ডেটার কালেকশন বা লিস্টকে অ্যারে বলে। |
| **Tuple** | A tuple is a fixed-size array where each element has a predefined type and order. | টাপল হলো একটি নির্দিষ্ট সাইজের অ্যারে, যার প্রতিটি উপাদানের ডেটা টাইপ এবং পজিশন আগে থেকেই ফিক্সড থাকে। |

### Code Example / কোড উদাহরণ

```typescript
// --- Arrays / অ্যারে ---
const numberArray: number[] = [1, 2, 3, 4, 5];
const nameArray: string[] = ["Emon", "Hossain", "Hira"];

// Generic Array syntax / জেনেরিক অ্যারে সিনট্যাক্স
const numberArray1: Array<number> = [1, 2, 3, 4, 5, 6];
const nameArray1: Array<string> = ["Emon", "Hossain", "Hira", "BUBT"];

// --- Tuples / টাপল ---
// Structure: [string, number, boolean] → Order must be maintained
// স্ট্রাকচার: [স্ট্রিং, নাম্বার, বুলিয়ান] → ক্রম অবশ্যই বজায় রাখতে হবে
const person: [string, number, boolean] = ["Emon", 23, true];

console.log("person full details: ", person);
```

---

## 📌 Special Types: `any`, `unknown`, `void`, `null`, `undefined`

### Definition / সংজ্ঞা

| Type | English | বাংলা |
|:-----|:--------|:------|
| `any` | Turns off type checking completely. Can hold any value. (Avoid using!) | টাইপ চেকিং বন্ধ করে দেয়। যেকোনো ভ্যালু রাখতে পারে। (এড়িয়ে চলুন!) |
| `unknown` | Safer alternative to `any`. Must check type before using. | `any`-এর চেয়ে নিরাপদ। ব্যবহারের আগে টাইপ চেক করে নিশ্চিত হতে হয়। |
| `void` | Return type for functions that do not return any value. | কোনো ফাংশন ভ্যালু রিটার্ন না করলে তার রিটার্ন টাইপ। |
| `null` / `undefined` | Represent absence of value or uninitialized variables. | কোনো ভ্যালু খালি বা অনুপস্থিত বোঝাতে ব্যবহৃত হয়। |

### Code Example / কোড উদাহরণ

```typescript
// 1. any: No type safety / কোনো টাইপ সেফটি নেই
let person: any = "Emon Hossain Hira";
person = 23;   // Allowed / অনুমোদিত
person = true; // Allowed / অনুমোদিত

// 2. unknown: Safe type checking / নিরাপদ টাইপ চেকিং
let person1: unknown = 12;
if (typeof person1 === "string") {
  console.log("person name is : ", person1);
} else {
  console.log("person is another data here", person1);
}

// 3. void: Function returns nothing / ফাংশন কিছু রিটার্ন করে না
function personishere(): void {
  console.log("Person is Here");
}

// 4. null & undefined
let nothing: null = null;
let person2: undefined = undefined;
```

---

## 📌 Type Inference / টাইপ ইনফারেন্স

### Definition / সংজ্ঞা

| English | বাংলা |
|:--------|:------|
| Type Inference means TypeScript automatically guesses and assigns a type to a variable based on its initial value, even if you don't explicitly write the type. | টাইপ ইনফারেন্স মানে হলো, আপনি যদি নিজে থেকে কোনো ভ্যারিয়েবলের টাইপ বলে নাও দেন, টাইপস্ক্রিপ্ট তার শুরুর ভ্যালু দেখে অটোমেটিকভাবে টাইপ বুঝে নেয়। |

### Code Example / কোড উদাহরণ

```typescript
let autoName = "Emon"; // TypeScript knows this is 'string' / টাইপস্ক্রিপ্ট জানে এটি স্ট্রিং
// autoName = 25; // ❌ Error: Type 'number' is not assignable to type 'string'.
console.log("person data: ", autoName);
```

---

## 🚀 Module 02 Project: Student Profile System / স্টুডেন্ট প্রোফাইল সিস্টেম

```typescript
// Type Alias definition / টাইপ এলিয়াস ডেফিনিশন
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  course: string[];
  courseMark: number[];
  courseInfo: [string, number, boolean]; // Tuple
};

// Creating an object / অবজেক্ট তৈরি
const emon: Person = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
  course: ["CSE", "EEE", "BBA"],
  courseMark: [90, 80, 70],
  courseInfo: ["CSE", 90, true],
};

// Function with typed parameter / টাইপড প্যারামিটার সহ ফাংশন
function displayPersonInfo(person: Person): void {
  console.log("User Here: ", person);
}

displayPersonInfo(emon);
```

---

# MODULE 03 — FUNCTIONS

---

## 📌 Function Types / ফাংশন টাইপস

### Definition / সংজ্ঞা

| English | বাংলা |
|:--------|:------|
| Function typing allows us to explicitly define the data types of the parameters a function accepts and the type of value it returns. | ফাংশন টাইপিংয়ের মাধ্যমে একটি ফাংশন প্যারামিটার হিসেবে কী ধরণের ডেটা গ্রহণ করবে এবং কাজ শেষে কী ধরণের ডেটা রিটার্ন করবে তা নির্দিষ্ট করে দেওয়া হয়। |

### Code Example / কোড উদাহরণ

```typescript
function happy(smile: string): string {
  return `Yes I am ${smile}`;
}

console.log(happy("happy"));
```

---

## 📌 Optional and Default Parameters / অপশনাল এবং ডিফল্ট প্যারামিটার

### Definition / সংজ্ঞা

| Type | English | বাংলা |
|:-----|:--------|:------|
| **Optional (`?`)** | Allows a parameter to be skipped. Becomes `undefined` if not provided. | প্যারামিটারকে ঐচ্ছিক করে। না দিলে `undefined` হয়। |
| **Default (`=`)** | Assigns a fallback value if no value is passed. | ভ্যালু না দেওয়া হলে আগের সেট করা ডিফল্ট ভ্যালু কাজ করে। |

### Code Example / কোড উদাহরণ

```typescript
// Optional Parameters / অপশনাল প্যারামিটার
function travel(
  startPlace: string,
  endPlace: string,
  travelTime?: string, // Optional / ঐচ্ছিক
): string {
  return `I am travelling from ${startPlace} to ${endPlace} and it will take ${travelTime ? travelTime : "some time"}`;
}

console.log(travel("Dhaka", "Chittagong"));
console.log(travel("Dhaka", "Chittagong", "5 Hours"));

// Default Parameters / ডিফল্ট প্যারামিটার
function User(name: string = "Guest"): string {
  return `User Name is ${name}`;
}

console.log(User());           // Uses default / ডিফল্ট ব্যবহার
console.log(User("Emon Hossain Hira"));
```

---

## 📌 Return Type & `never` Type / রিটার্ন টাইপ এবং নেভার টাইপ

### Definition / সংজ্ঞা

| Type | English | বাংলা |
|:-----|:--------|:------|
| **Return Type** | Explicitly declares what type of data a function will return. | ফাংশন কী ধরণের ডেটা ফেরত পাঠাবে তা নির্ধারণ করে। |
| **`never`** | Represents a value that never occurs. Used for functions that always throw errors or never finish. | এমন ফাংশনে ব্যবহৃত হয় যা কখনো স্বাভাবিকভাবে শেষ হয় না (সবসময় এরর থ্রো করে বা ইনফিনিট লুপে চলে)। |

### Code Example / কোড উদাহরণ

```typescript
// Standard Return Type / সাধারণ রিটার্ন টাইপ
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log("summation is: ", add(10, 20));

// never Type / নেভার টাইপ
function error(): never {
  throw new Error("Message is Wrong");
}
```

---

## 📌 Arrow Functions / অ্যারো ফাংশন

### Definition / সংজ্ঞা

| English | বাংলা |
|:--------|:------|
| Arrow functions provide a concise syntax for writing function expressions. In TypeScript, type annotations are applied directly to the parameters and return value. | অ্যারো ফাংশন হলো ফাংশন লেখার একটি আধুনিক ও সংক্ষিপ্ত রূপ। টাইপস্ক্রিপ্টে এর প্যারামিটার এবং রিটার্ন টাইপ সরাসরি ব্র্যাকেটের ভেতরেই ডিফাইন করা হয়। |

### Code Example / কোড উদাহরণ

```typescript
const person = (name: string, age: number, isStudent: boolean): string => {
  return `Person is ${name} and His age is now, ${age}. I am now as a ${isStudent}`;
};

console.log(person("Emon Hossain Hira", 23, true));
```

---

## 🚀 Module 03 Project: Typed Calculator / টাইপড ক্যালকুলেটর

```typescript
const summation = (num1: number, num2: number): number => num1 + num2;
const substraction = (num1: number, num2: number): number => num1 - num2;
const multiplication = (num1: number, num2: number): number => num1 * num2;
const division = (num1: number, num2: number): number => num1 / num2;

console.log("Summation:", summation(10, 20));
console.log("Substraction:", substraction(20, 10));
console.log("Multiplication:", multiplication(10, 20));
console.log("Division:", division(20, 10));
```

---

## 📊 Module Completion Checklist / মডিউল সমাপ্তি চেকলিস্ট

```
[✓] Module 01: Foundation & Setup         / ফাউন্ডেশন ও সেটআপ
[✓] Module 02: Types & Annotations        / টাইপস ও অ্যানোটেশন
[✓] Module 03: Functions                  / ফাংশনসমূহ

─────────────────────────────────────────
[✓] ALL MODULES COMPLETE / সকল মডিউল সম্পন্ন
```

---

<div align="center">

```
╔══════════════════════════════════════════════════════╗
║     🎉 Congratulations! You've mastered the          ║
║        fundamentals of TypeScript! 🎉                ║
║                                                      ║
║     Keep practicing • Build projects • Stay typed    ║
║     অনুশীলন চালিয়ে যান • প্রজেক্ট বানান • টাইপড থাকুন  ║
╚══════════════════════════════════════════════════════╝
```

### ⚡ Happy Coding! / শুভ কোডিং! ⚡

</div>
```