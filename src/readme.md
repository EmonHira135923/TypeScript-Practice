<div align="center">

# 📘 TypeScript Mastery

### A Bilingual (English / বাংলা) Guide to TypeScript — From Basics to OOP & Generics

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Modules-10%2F10-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**একটি সম্পূর্ণ ইংরেজি-বাংলা টাইপস্ক্রিপ্ট লার্নিং রিসোর্স — বেসিক থেকে OOP ও জেনেরিক্স পর্যন্ত**

</div>

---

## 🧭 Table of Contents

| # | Module | Topic |
|---|--------|-------|
| 01 | [Getting Started](#-module-01--getting-started) | Setup, Config, Folder Structure |
| 02 | [Types & Inference](#-module-02--types--inference) | Primitives, Arrays, Tuples, Special Types |
| 03 | [Functions](#-module-03--functions) | Params, Return Types, Arrow Functions |
| 04 | [Object Typing](#-module-04--object-typing) | Object Shapes, Type Aliases, Optional Props |
| 05 | [Interfaces](#-module-05--interfaces) | Interface vs Type, Extending Interfaces |
| 06 | [Unions & Narrowing](#-module-06--unions--narrowing) | Union/Intersection, Narrowing, Type Guards |
| 07 | [OOP in TypeScript](#-module-07--oop-in-typescript) | Classes, Access Modifiers, Inheritance |
| 08 | [Generics](#-module-08--generics) | Generic Functions, Interfaces, Constraints |
| 09 | [Enums](#-module-09--enums) | Numeric, String & Const Enums |
| 10 | [Modules & Namespaces](#-module-10--modules--namespaces) | Export/Import, Resolution, Collisions |

> 💡 **Tip:** Every module has a short **project** at the end that puts the concepts into practice. Click the code blocks to expand — they're collapsed by default to keep this page skimmable.

---

## 🎯 What is TypeScript?

| | English | বাংলা |
|---|---------|-------|
| **Definition** | A strongly typed, open-source language by Microsoft — a strict *syntactical superset* of JavaScript. Any valid JS is valid TS. | মাইক্রোসফট নির্মিত স্ট্রংলি টাইপড, ওপেন-সোর্স ভাষা — জাভাস্ক্রিপ্টের একটি সুপারসেট। যেকোনো ভ্যালিড JS কোড TS-এও ভ্যালিড। |
| **Execution** | Browsers can't run TypeScript directly — it compiles down to plain JavaScript first. | ব্রাউজার সরাসরি TypeScript রান করতে পারে না, আগে তা JavaScript-এ কম্পাইল হয়। |

### JavaScript vs TypeScript

| Feature | JavaScript 💛 | TypeScript 💙 |
|---|---|---|
| **Type System** | Dynamically typed (checked at runtime) | Statically typed (checked at compile-time) |
| **Error Detection** | Found during execution | Caught instantly while coding |
| **Autocompletion** | Limited / basic | Rich IntelliSense support |
| **Maintainability** | Harder to scale in large codebases | Predictable & structured for large teams |

---

## 📦 Module 01 — Getting Started

### 🛠️ Installation

| Step | Command | Purpose |
|---|---|---|
| 1. Initialize project | `npm init -y` | Creates `package.json` |
| 2. Install TypeScript (local) | `npm install typescript --save-dev` | Adds TS as a dev dependency |
| 3. Install TypeScript (global, optional) | `npm install -g typescript` | Enables `tsc` anywhere on your machine |
| 4. Generate config | `tsc --init` | Creates `tsconfig.json` |

### ⚙️ Key `tsconfig.json` Settings

| Setting | Value | Meaning |
|---|---|---|
| `rootDir` | `"./src"` | Where you write your `.ts` source files |
| `outDir` | `"./dist"` | Where compiled `.js` files are generated |

### 📂 Recommended Folder Structure

```text
TypeScript-Project/
├── node_modules/     # Dependencies (auto-generated)
├── dist/              # Compiled JavaScript (production output)
│   └── index.js
├── src/               # Your TypeScript source code
│   └── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

> ⚠️ **Mandatory:** Always add `node_modules/` and `dist/` to `.gitignore`.

### ▶️ Running Your Code

| Method | Steps |
|---|---|
| **A — Terminal** | 1️⃣ `tsc` (compile) → 2️⃣ `node dist/index.js` (run) |
| **B — Code Runner** | Install the **Code Runner** VS Code extension + `npm install -g ts-node`, then press `Ctrl + Alt + N` |

<details>
<summary>💻 <b>Example — <code>src/index.ts</code></b></summary>

```typescript
function person(name: string, age: number): { name: string; age: number } {
  return { name, age };
}

const result = person("Emon", 40);
console.log("Person is: ", result);
```

</details>

---

## 📦 Module 02 — Types & Inference

### Concept Overview

| Concept | English | বাংলা |
|---|---|---|
| **Primitive Types** | Basic built-in types representing a single, immutable value (`string`, `number`, `boolean`) | একদম বেসিক ডেটা টাইপ, একটি সিঙ্গেল ভ্যালু রিপ্রেজেন্ট করে |
| **Array** | A collection of similar-type data | একই ধরনের একাধিক ডেটার কালেকশন |
| **Tuple** | A fixed-size array where each element's type & order are predefined | নির্দিষ্ট সাইজের অ্যারে, টাইপ ও পজিশন আগে থেকে ফিক্সড |
| **Type Inference** | TypeScript auto-detects a variable's type from its initial value | ভ্যারিয়েবলের শুরুর ভ্যালু দেখে TS নিজে থেকেই টাইপ বুঝে নেয় |

### Special Types

| Type | Purpose |
|---|---|
| `any` | Turns off type checking completely — avoid using this! |
| `unknown` | A safer `any` — requires a type check before use |
| `void` | Return type for functions that return nothing |
| `null` / `undefined` | Represent an absent or uninitialized value |

<details>
<summary>💻 <b>Primitives, Arrays & Tuples</b></summary>

```typescript
// Primitives
const name: string = "Emon Hossain Hira";
const age: number = 23;
const isStudent: boolean = true;

// Arrays
const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray1: Array<number> = [1, 2, 3, 4, 5, 6]; // generic syntax

// Tuples — order must be maintained
const person: [string, number, boolean] = ["Emon", 23, true];
```

</details>

<details>
<summary>💻 <b>Special Types: any / unknown / void / null / undefined</b></summary>

```typescript
let person: any = "Emon Hossain Hira";
person = 23;    // allowed
person = true;  // allowed

let person1: unknown = 12;
if (typeof person1 === "string") {
  console.log(person1); // only runs if it's actually a string
}

function personishere(): void {
  console.log("Person is Here");
}

let nothing: null = null;
let person2: undefined = undefined;
```

</details>

<details>
<summary>🚀 <b>Project — Student Profile (Type Alias)</b></summary>

```typescript
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  course: string[];
  courseMark: number[];
  courseInfo: [string, number, boolean]; // tuple
};

const emon: Person = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
  course: ["CSE", "EEE", "BBA"],
  courseMark: [90, 80, 70],
  courseInfo: ["CSE", 90, true],
};

function displayPersonInfo(person: Person): void {
  console.log("User Here: ", person);
}

displayPersonInfo(emon);
```

</details>

---

## 📦 Module 03 — Functions

| Concept | English | বাংলা |
|---|---|---|
| **Function Typing** | Explicitly defines parameter and return types | ফাংশনের প্যারামিটার ও রিটার্ন টাইপ নির্দিষ্ট করে দেওয়া হয় |
| **Optional Params (`?`)** | Can be skipped when calling; becomes `undefined` | না দিলে `undefined` হয়ে যায় |
| **Default Params (`=`)** | Fallback value used if none is passed | ভ্যালু না দিলে ডিফল্ট ভ্যালু কাজ করে |
| **`never`** | For functions that never finish normally (always throw / infinite loop) | কখনো স্বাভাবিকভাবে শেষ হয় না এমন ফাংশনে ব্যবহৃত হয় |
| **Arrow Functions** | Concise function expression syntax with inline typing | সংক্ষিপ্ত, আধুনিক ফাংশন লেখার স্টাইল |

<details>
<summary>💻 <b>Optional & Default Parameters</b></summary>

```typescript
function travel(startPlace: string, endPlace: string, travelTime?: string): string {
  return `I am travelling from ${startPlace} to ${endPlace} and it will take ${travelTime ? travelTime : "some time"}`;
}

travel("Dhaka", "Chittagong");
travel("Dhaka", "Chittagong", "5 Hours");

function User(name: string = "Guest"): string {
  return `User Name is ${name}`;
}

User();                      // "User Name is Guest"
User("Emon Hossain Hira");
```

</details>

<details>
<summary>💻 <b>Return Type, <code>never</code> & Arrow Functions</b></summary>

```typescript
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function error(): never {
  throw new Error("Message is Wrong");
}

const person = (name: string, age: number, isStudent: boolean): string => {
  return `Person is ${name} and His age is now, ${age}. I am now as a ${isStudent}`;
};
```

</details>

<details>
<summary>🚀 <b>Project — Typed Calculator</b></summary>

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

</details>

---

## 📦 Module 04 — Object Typing

| Concept | English | বাংলা |
|---|---|---|
| **Inline Object Typing** | Define an object's exact shape at declaration | অবজেক্ট ডিক্লেয়ার করার সময় শেপ নির্দিষ্ট করা |
| **Type Alias for Objects** | Reusable custom name for an object structure | কাস্টম নাম দিয়ে অবজেক্ট স্ট্রাকচার পুনঃব্যবহার |
| **Optional Property (`?`)** | Property may be omitted without error | না দিলেও এরর হয় না |

<details>
<summary>💻 <b>Inline Typing, Type Alias & Optional Properties</b></summary>

```typescript
// Inline
const hello: { name: string; age: number } = { name: "Emon Hossain Hira", age: 23 };

// Reusable Type Alias
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  phone?: number; // optional
};

const user1: Person = { name: "Emon Hossain Hira", age: 23, isStudent: true };
const user2: Person = { name: "Akbor Hossain", age: 22, isStudent: false, phone: 1234567890 };
```

</details>

<details>
<summary>🚀 <b>Project — Blog Post System</b></summary>

```typescript
type BlogPost = {
  title: string;
  content: string;
  author: string;
  published: boolean;
  publishedDate?: string;
};

const blogPost1: BlogPost = {
  title: "My First Blog Post",
  content: "This is the content of my first blog post.",
  author: "Emon Hossain Hira",
  published: true,
  publishedDate: "2023-04-01",
};

const showBlogPost = (post: BlogPost): void => {
  if (post.publishedDate !== undefined && post.published === true) {
    console.log(`✅ "${post.title}" published on ${post.publishedDate}`);
  } else if (post.published === false) {
    console.log(`❌ "${post.title}" is not published yet.`);
  } else {
    console.log(`⚠️ PublishedDate is required for "${post.title}".`);
  }
};

showBlogPost(blogPost1);
```

</details>

---

## 📦 Module 05 — Interfaces

### `type` vs `interface`

| | `type` (Type Alias) | `interface` |
|---|---|---|
| **Use for** | Primitives, unions, tuples, object shapes | Object structures & classes (OOP-focused) |
| **Combining** | Intersections (`&`) | `extends` keyword |
| **Best for** | Simple objects, union/status types, complex combos | API blueprints, extendable libraries |

<details>
<summary>💻 <b>Type Alias vs Interface + Extending Interfaces</b></summary>

```typescript
// Type Alias
type User = { name: string; age: number; isStudent: boolean };

// Interface
interface Data {
  dataName: string;
  dataNumber: number;
  isvalid: boolean;
}

// Extending an interface
interface DataChild extends Data {
  dataActive: boolean;
}

const childData: DataChild = {
  dataName: "Info-ICT",
  dataNumber: 25,
  isvalid: true,
  dataActive: true,
};
```

</details>

<details>
<summary>🚀 <b>Project — User Profile & Author System</b></summary>

```typescript
interface AllUser {
  username: string;
  age: number;
  phone: string;
  email: string;
}

interface Author extends AllUser {
  bio: string;
  post: string[];
}

type Status = "active" | "inactive" | "banned";

const firstUser: Author = {
  username: "Emon Hossain Hira",
  age: 23,
  phone: "01817516654",
  email: "emonhossainhira231@gmail.com",
  bio: "Time and Tide Wait For None",
  post: ["blog1", "post1", "blog2"],
};

const showUserData = (user: Author, status: Status): void => {
  console.log(`User: ${user.username} | Status: ${status.toUpperCase()} | Posts: ${user.post.length}`);
};

showUserData(firstUser, "active");
```

</details>

---

## 📦 Module 06 — Unions & Narrowing

| Concept | Description |
|---|---|
| **Union (`\|`)** | A variable may hold one of several types, e.g. `string \| number` |
| **Intersection (`&`)** | Combines multiple types — must satisfy all of them |
| **Literal Types** | Restricts a variable to specific values, e.g. `"YES" \| "NO"` |
| **Narrowing** | Refining a broad type into a specific one using conditions |

### Narrowing Techniques

| Technique | Used For |
|---|---|
| `typeof` | Checking primitive types (`string`, `number`, etc.) |
| `in` operator | Checking if a property exists on an object |
| `instanceof` | Checking if an object belongs to a specific class |
| **Custom Type Guard** | Complex logic that the above can't handle directly |

<details>
<summary>💻 <b>Union / Intersection / Literal Types</b></summary>

```typescript
type User2 = { email: string; name: string };
type User4 = { rollNo: string | number };
type User3 = User2 & User4; // Intersection

type Status = "YES" | "NO"; // Literal

const user3: User3 = { email: "emon@gmail.com", name: "emon", rollNo: "189" };
```

</details>

<details>
<summary>💻 <b>Narrowing: <code>typeof</code>, <code>in</code>, <code>instanceof</code></b></summary>

```typescript
// typeof
type Product = { data: string | number };
const showData = (p: Product): void => {
  if (typeof p.data === "number") {
    console.log(p.data * 2);
  } else {
    console.log(p.data.trim());
  }
};

// in
type Car = { Bus: string };
type Cycle = { Cycle: string };
const showVehicle = (v: Car | Cycle): void => {
  if ("Bus" in v) console.log("It's a Bus");
  else console.log("It's a Cycle");
};

// instanceof
class House { hello() { console.log("Welcome to House"); } }
class NoHouse { hello() { console.log("No House here"); } }
const showHouse = (s: House | NoHouse) => s.hello();
```

</details>

<details>
<summary>💻 <b>Custom Type Guards</b></summary>

```typescript
type User = { name: string; role: "user" };
type Admin = { name: string; role: "admin"; permissions: string[] };

const isAdmin = (profile: User | Admin): profile is Admin => {
  return profile.role === "admin" && "permissions" in profile;
};

const handleLogin = (profile: User | Admin) => {
  if (isAdmin(profile)) {
    console.log(`Welcome Admin! Permissions: ${profile.permissions.length}`);
  } else {
    console.log(`Welcome User ${profile.name}!`);
  }
};
```

</details>

---

## 📦 Module 07 — OOP in TypeScript

### Access Modifiers

| Modifier | Accessible From |
|---|---|
| `public` (default) | Anywhere |
| `private` | Only inside the declaring class |
| `protected` | The declaring class **and** its subclasses |

| Concept | Description |
|---|---|
| **Class** | Blueprint for creating objects — bundles data + behavior |
| **Constructor** | Runs automatically on object creation to initialize properties |
| **Inheritance (`extends`)** | Child class inherits from a parent class; `super()` passes data up |
| **`implements`** | Forces a class to strictly follow an interface's structure |

<details>
<summary>💻 <b>Class, Constructor & Access Modifiers</b></summary>

```typescript
class BankAccount {
  public accountName: string;
  private accountBalance: number;
  protected accountType: string;

  constructor(accountName: string, accountBalance: number) {
    this.accountName = accountName;
    this.accountBalance = accountBalance;
    this.accountType = "savings";
  }

  showBalance() {
    console.log(`Balance: ${this.accountBalance}`); // OK — inside the class
  }
}

const myAccount = new BankAccount("Emon Hossain Hira", 70000);
myAccount.showBalance();
// myAccount.accountBalance; // ❌ Error: private
```

</details>

<details>
<summary>💻 <b>Inheritance with <code>super()</code> & <code>implements</code></b></summary>

```typescript
class Dress {
  constructor(
    public name: string,
    public size: string,
    private price: number,
    protected colour: string,
  ) {}
}

class Uniform extends Dress {
  constructor(public dressname: string, private clgCode: number, name: string, size: string, price: number, colour: string) {
    super(name, size, price, colour);
  }
}

// implements
interface Driveable {
  start: () => void;
  stop: () => void;
}

class DriveCar implements Driveable {
  start() { console.log("Drive Car started..."); }
  stop() { console.log("Drive Car stopped."); }
}
```

</details>

<details>
<summary>🚀 <b>Project — School Management System</b></summary>

```typescript
interface User {
  username: string;
  email: string;
  phone: string;
  age: number;
}

class UserClass implements User {
  constructor(public username: string, public email: string, public phone: string, public age: number) {}
  showUserInfo() {
    console.log(`Name: ${this.username} | Email: ${this.email}`);
  }
}

class StudentClass extends UserClass {
  public courses: CourseClass[] = [];
  constructor(username: string, email: string, phone: string, age: number,
    public className: string, public classRoll: number, public gpa: number) {
    super(username, email, phone, age);
  }
  enrollCourse(course: CourseClass) {
    this.courses.push(course);
    course.addStudent(this);
  }
  calculateGPA(marks: number[]) {
    const total = marks.reduce((sum, m) => sum + m, 0);
    this.gpa = Number((total / marks.length).toFixed(2));
  }
}

class TeacherClass extends UserClass {
  public courses: CourseClass[] = [];
  constructor(username: string, email: string, phone: string, age: number,
    public employeeId: number, public subject: string) {
    super(username, email, phone, age);
  }
  assignCourse(course: CourseClass) { this.courses.push(course); }
}

class CourseClass {
  public students: StudentClass[] = [];
  constructor(public courseCode: number, public courseName: string, public teacher: TeacherClass) {
    teacher.assignCourse(this);
  }
  addStudent(student: StudentClass) {
    if (!this.students.includes(student)) this.students.push(student);
  }
}

class SchoolClass {
  students: StudentClass[] = [];
  teachers: TeacherClass[] = [];
  courses: CourseClass[] = [];
  constructor(public schoolName: string, public schoolCode: number) {}
  addStudent(s: StudentClass) { this.students.push(s); }
  addTeacher(t: TeacherClass) { this.teachers.push(t); }
  addCourse(c: CourseClass) { this.courses.push(c); }
}

// Execution
const teacher1 = new TeacherClass("Mr. Rahim", "rahim@gmail.com", "01711111111", 40, 101, "Computer Science");
const student1 = new StudentClass("Emon Hossain Hira", "emon@gmail.com", "01817516654", 23, "BSc in CSE", 41, 0);
const course1 = new CourseClass(2201, "Object Oriented Programming", teacher1);

student1.enrollCourse(course1);
student1.calculateGPA([3.75, 3.5, 4.0, 3.8]);

const school = new SchoolClass("BUBT", 1001);
school.addTeacher(teacher1);
school.addStudent(student1);
school.addCourse(course1);
```

> 📎 Full version with `StudentInfo`, `TeacherInfo`, `CourseInfo`, `SchoolInfo` interfaces and detailed console output is available in the original module notes.

</details>

---

## 📦 Module 08 — Generics

| Concept | English | বাংলা |
|---|---|---|
| **Generics (`<T>`)** | Reusable components that work with multiple types instead of one fixed type | নির্দিষ্ট টাইপে বাঁধা না থেকে যেকোনো ডেটা টাইপের সাথে কাজ করতে পারে এমন কম্পোনেন্ট |
| **Generic Constraints** | Restrict `<T>` to types that include certain properties, via `extends` | `extends` দিয়ে জেনেরিক টাইপে শর্ত জুড়ে দেওয়া |

<details>
<summary>💻 <b>Generic Functions & Interfaces</b></summary>

```typescript
const logData = <T>(data: T): void => console.log("Data is Here:", data);
logData<string>("Emon Hossain Hira");
logData<number>(23);

interface APIRESPONSE<T> {
  success: boolean;
  data: T;
}

const userResponse: APIRESPONSE<{ name: string }> = {
  success: true,
  data: { name: "Emon Hossain Hira" },
};
```

</details>

<details>
<summary>💻 <b>Generic Constraints</b></summary>

```typescript
interface ProfileId { id: number }

const valueOfUser = <T extends ProfileId>(item: T): number => item.id;

const userInfo = { id: 123, name: "Emon Hosain Hira", age: 23 };
console.log(valueOfUser(userInfo)); // 123
```

</details>

<details>
<summary>🚀 <b>Project — Generic API Response Handler</b></summary>

```typescript
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

const handleApiResponse = <T>(res: ApiResponse<T>): T => {
  if (res.status === 200) {
    console.log(`✅ ${res.message}`);
    return res.data;
  }
  throw new Error(`❌ Status: ${res.status}`);
};

const userData = handleApiResponse<{ name: string; age: number; email: string }>({
  status: 200,
  message: "User Data Fetched Successfully",
  data: { name: "Emon Hossain Hira", age: 23, email: "emonhossainhira231@gmail.com" },
});
```

</details>

---

## 📦 Module 09 — Enums

| Enum Type | Behavior |
|---|---|
| **Numeric Enum** | Values auto-increment starting from `0` |
| **String Enum** | Each name maps to an explicit string value |
| **`const enum`** | Removed entirely at compile time — values are inlined for performance |

### Common Use Cases

| Category | Examples |
|---|---|
| Direction | `UP`, `DOWN`, `LEFT`, `RIGHT` |
| Roles & Permissions | `GUEST`, `USER`, `ADMIN`, `SUPER_ADMIN` |
| HTTP / API Status | `OK`, `NOT_FOUND`, `UNAUTHORIZED` |
| Toggle States | `DARK`, `LIGHT` |

<details>
<summary>💻 <b>Numeric, String & Const Enums</b></summary>

```typescript
// Numeric
enum Website { user = 0, admin = 1, instructor = 2, superAdmin = 3 }
console.log(Website.admin); // 1

// String
enum Status { success = "Success", pending = "Pending", reject = "Reject" }
console.log(Status.success); // "Success"

// Const enum — inlined at compile time
const enum UserProfile { status = 100, message = 200, data = 300 }
console.log(UserProfile.data); // 300
```

</details>

<details>
<summary>🚀 <b>Project — Blog Post Status Tracker</b></summary>

```typescript
const enum BlogPostStatus {
  published = "PUBLISHED",
  draft = "DRAFT",
  archived = "ARCHIVED",
  delete = "DELETE",
}

type BlogPost = {
  title: string;
  description: string;
  views: number;
  author: string;
  status: BlogPostStatus;
};

const post1: BlogPost = {
  title: "Hello TS",
  description: "Welcome Buddy! See You Tomorrow",
  views: 1200,
  author: "Emon Hossain Hira",
  status: BlogPostStatus.published,
};

if (post1.status === BlogPostStatus.published) console.log("✅ Published");
else if (post1.status === BlogPostStatus.draft) console.log("📝 In Draft");
else if (post1.status === BlogPostStatus.delete) console.log("🗑️ Deleted");
else console.log("📦 Archived");
```

</details>

---

## 📦 Module 10 — Modules & Namespaces

| Concept | English | বাংলা |
|---|---|---|
| **Export / Import** | ES6 module syntax — each file has its own scope; use `export` / `import` to share code | প্রতিটি ফাইলের নিজস্ব স্কোপ থাকে, শেয়ার করতে `export` ও `import` লাগে |
| **Module Resolution** | How the compiler locates a module. Configurable via `baseUrl` and `paths` in `tsconfig.json` | কম্পাইলার কীভাবে মডিউলের অবস্থান খুঁজে বের করে, `tsconfig.json`-এ কনফিগারযোগ্য |
| **Naming Collisions** | Solved via `as` aliasing or wildcard (`* as`) imports | `as` অথবা `* as` দিয়ে নামের দ্বন্দ্ব এড়ানো যায় |

<details>
<summary>💻 <b>Named & Default Exports</b></summary>

```typescript
// utils/math.ts
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export default class Calculator {
  multiply(a: number, b: number): number { return a * b; }
}

// main.ts
import Calculator, { add, subtract } from "./utils/math";
console.log(add(10, 5), subtract(10, 5));
const calc = new Calculator();
console.log(calc.multiply(4, 5));
```

</details>

<details>
<summary>⚙️ <b>Module Resolution with Path Aliases</b></summary>

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"],
      "@types/*": ["types/*"]
    }
  }
}
```

```typescript
// src/services/user.ts
import { add } from "@utils/math";
console.log(add(20, 30));
```

</details>

<details>
<summary>💻 <b>Avoiding Naming Collisions</b></summary>

```typescript
// Solution 1 — Import Aliasing
import { User as AdminUser } from "./services/admin";
import { User as CustomerUser } from "./services/customer";

// Solution 2 — Wildcard Imports
import * as AdminService from "./services/admin";
import * as CustomerService from "./services/customer";

const admin2: AdminService.User = { id: 2, adminName: "Super Admin" };
const customer2: CustomerService.User = { id: 102, customerName: "VIP Customer" };
```

</details>

---

## 📊 Quick Reference — Module Summary

| Module | Core Skill Learned |
|---|---|
| 01 | Project setup, `tsconfig.json`, compiling & running TS |
| 02 | Primitive/non-primitive types, special types, inference |
| 03 | Typed functions, optional/default params, arrow functions |
| 04 | Object shapes, type aliases, optional properties |
| 05 | Interfaces, extending interfaces, type vs interface |
| 06 | Unions, intersections, literals, narrowing, type guards |
| 07 | Classes, access modifiers, inheritance, `implements` |
| 08 | Generic functions, generic interfaces, constraints |
| 09 | Numeric, string, and const enums |
| 10 | Export/import, module resolution, naming collisions |

---

<div align="center">

### ⚡ Happy Coding with TypeScript! / শুভ টাইপস্ক্রিপ্ট কোডিং! ⚡

</div>