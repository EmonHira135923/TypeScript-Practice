# 📘 TypeScript Mastery: Module 01

Welcome to **Module 01** of learning TypeScript! This repository contains the foundational setup, configuration, and a basic example to help you understand how TypeScript works and why it is preferred over JavaScript.

---

## 🎯 What is TypeScript?
**TypeScript** is a strongly typed, open-source programming language developed and maintained by Microsoft. It is a strict **syntactical superset of JavaScript**, meaning any valid JavaScript code is also valid TypeScript code. 

> 💡 **Key Concept:** Browsers cannot run TypeScript directly. It compiles down to clean, readable JavaScript before execution.

---

## 🚀 Why Use TypeScript Over JavaScript?

| Feature | JavaScript 💛 | TypeScript 💙 |
| :--- | :--- | :--- |
| **Type System** | Dynamically Typed (Types checked at runtime) | Statically Typed (Types checked at compile-time) |
| **Error Detection** | Errors are found during execution | Errors are caught instantly during development |
| **Autocompletion** | Limited / Basic | Rich IntelliSense and auto-complete support |
| **Maintainability** | Harder to scale in large codebases | Highly predictable and structured for large teams |

---

## 🛠️ Installation & Setup Guide

Follow these steps to set up TypeScript in your local development environment using Node.js.

### 1. Initialize the Project
First, create a `package.json` file by initializing your project:
```bash
npm init -y

```

### 2. Install TypeScript Locally

Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev

```

### 3. Global Installation (Optional)

If you want to use the TypeScript compiler (`tsc`) anywhere on your machine:

```bash
npm install -g typescript

```

---

## ⚙️ TypeScript Configuration (`tsconfig.json`)

To generate the configuration file, run:

```bash
tsc --init

```

Open the newly created `tsconfig.json` file and update/uncomment the following settings to organize your source and build folders:

* **`rootDir`**: Set this to `"./src"` (Where you will write your TypeScript code).
* **`outDir`**: Set this to `"./dist"` (Where the compiled JavaScript files will be generated).

---

## 📂 Project Folder Architecture

A standard, clean project structure looks like this:

```text
TypeScript-Project/
├── node_modules/         # Dependencies (Automatically generated)
├── dist/                 # Compiled JavaScript files (Production output)
│   └── index.js
├── src/                  # Source files (Your TypeScript code)
│   └── index.ts
├── .gitignore            # Files/Folders to ignore in Git
├── package-lock.json     # Lockfile for dependencies
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration settings
└── README.md             # Project documentation (This file)

```

⚠️ **Mandatory Rule:** Always add `node_modules/` and `dist/` to your `.gitignore` file to avoid pushing heavy or auto-generated files to GitHub.

---

## ✍️ Writing, Compiling & Running Code

### Source File: `src/index.ts`

```typescript
function person(name: string, age: number): { name: string; age: number } {
    return { name, age };
}

const result = person("Emon", 40);
console.log("Person is: ", result);

```

### 🏃 How to Run the Code

#### Method A: Using the Terminal

1. Compile the TypeScript code into JavaScript:
```bash
tsc

```


2. Run the compiled JavaScript file inside the `dist` folder using Node.js:
```bash
node dist/index.js

```



#### Method B: Using Code Runner Extension

1. Install the **Code Runner** extension in VS Code.
2. Install `ts-node` globally or locally to run `.ts` files instantly without manual compilation:
```bash
npm install -g ts-node

```


3. Open `index.ts` and click the **Play** button (or press `Ctrl + Alt + N`).

---

⚡ *Happy Coding with TypeScript!*
