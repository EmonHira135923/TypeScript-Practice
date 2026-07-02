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

| Feature / বৈশিষ্ট্য | JavaScript 💛 | TypeScript 💙 |
| :--- | :--- | :--- |
| **Type System** | Dynamically Typed (Checked at runtime) | Statically Typed (Checked at compile-time) |
| **Error Detection** | Errors are found during execution (রানটাইমে ভুল ধরা পড়ে) | Errors are caught instantly during development (কোড লেখার সময়ই ভুল ধরা পড়ে) |
| **Autocompletion** | Limited / Basic | Rich IntelliSense and auto-complete support (কোড সাজেশন) |
| **Maintainability** | Harder to scale in large codebases | Highly predictable and structured for large teams |

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

* **`rootDir`**: Set this to `"./src"` (Where you will write your TypeScript code / যেখানে আপনি কোড লিখবেন)।
* **`outDir`**: Set this to `"./dist"` (Where the compiled JavaScript files will be generated / কম্পাইল হওয়া জাভাস্ক্রিপ্ট ফাইল যেখানে জমা হবে)।

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

⚡ *Happy Coding with TypeScript! / শুভ টাইপস্ক্রিপ্ট কোডিং!*
