<!-- Learn TypeScript -->

#### Module 01

### Introduction To TypeScript

## What is TypeScript

# Defination here

## Why use TypeScript over JavaScript

# Defination Here

## Installing TypeScript (Node.js + config setup)

# Defination Here

1. npm init -y

2. npm install typescript --save-dev

# TypeScript configuration file

1. tsc --init

2. rootdir file
   src folder

3. outdir file
   dist folder

# Try to Globally

1. npm install -g typescript

# Writing and Compiling a simple .ts file

1. tsc for compile index.js file
2. dist folder
3. node index.js
4. result print in terminal

# Or

1. use code runner

# index.ts

```
function person(name:string,age:number) :{name:string,age:number} {
    return {name,age};
};

const result = person("Emon",40);

console.log("Person is: ",result);

```

# index.js

```
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function person(name, age) {
    return { name, age };
}
;
const result = person("Emon", 40);
console.log("Person is: ", result);
//# sourceMappingURL=index.js.map
```

# Mandatory

1. gitignore
2. node_modules in .gitignore file
3. dist

# Folder Architecture

1. TypeScript ----> tsconfig.json ----> node_modules---> readme.md ----> package-lock.json ----> package.json---> .gitignore ---> src ---> index.js
