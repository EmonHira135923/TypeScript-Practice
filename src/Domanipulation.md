# 📘 Module 11 — Working With DOM and TypeScript

> A hands-on module covering **type-safe DOM manipulation** and **event handling** using TypeScript, styled with Tailwind CSS.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Topics Covered](#-topics-covered)
- [Tech Stack](#-tech-stack)
- [Project Setup](#-project-setup)
- [Project Structure](#-project-structure)
- [TypeScript Configuration](#-typescript-configuration)
- [Tailwind CSS Setup](#-tailwind-css-setup)
- [Code Example](#-code-example)
- [How to Run](#-how-to-run)

---

## 🧭 Overview

This module walks through building a **form validation app** using vanilla TypeScript and the DOM API — no frameworks, just strong typing, clean event handling, and Tailwind-powered styling.

---

## 📚 Topics Covered

| # | Topic |
|---|-------|
| 11.1 | Type-Safe DOM Manipulation |
| 11.2 | Event Handling with Correct Types |

---

## 🛠 Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

---

## 🚀 Project Setup

### 1. Initialize the project

```bash
npm init -y
```

### 2. Install TypeScript

```bash
npm install typescript --save-dev
npm install -g typescript
tsc --init
```

### 3. Configure `tsconfig.json`

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

### 4. Update `package.json`

```json
{
  "type": "module"
}
```

---

## 📁 Project Structure

```
📦 module-11-typescript-dom
├── 📂 src
│   └── index.ts
├── 📂 dist
│   └── index.js
├── 📄 index.html
├── 🎨 style.css
├── 📄 tsconfig.json
├── 📄 package.json
├── 🚫 .gitignore
└── 📘 README.md
```

> ✅ `node_modules` and `dist` (optional) should be added to `.gitignore`.

---

## ⚙️ TypeScript Configuration

Compile your TypeScript source files:

```bash
tsc
```

This reads files from `./src` and outputs compiled JavaScript into `./dist`, as configured in `tsconfig.json`.

---

## 🎨 Tailwind CSS Setup

### 1. Install Tailwind

```bash
npm install tailwindcss @tailwindcss/cli
```

### 2. Import Tailwind in your CSS

```css
@import "tailwindcss";
```

### 3. Link Additional Resources

In `index.html`, link:

- ✅ Compiled Tailwind CSS
- ✅ Font Awesome (CDN)
- ✅ Google Fonts

In `style.css`, import your global font:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
```

### 4. Link Compiled JS to HTML

```html
<script type="module" src="./dist/index.js"></script>
```

---

## 💻 Code Example

A fully **type-safe form validation** script using `document.querySelector` generics:

```ts
const form = document.querySelector<HTMLFormElement>("#userForm");
const userinput = document.querySelector<HTMLInputElement>("#name");
const emailinput = document.querySelector<HTMLInputElement>("#email");
const numberinput = document.querySelector<HTMLInputElement>("#phone");
const passwordinput = document.querySelector<HTMLInputElement>("#password");
const submitbutton = document.querySelector<HTMLButtonElement>("#submit");
const message = document.querySelector<HTMLParagraphElement>("#message");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const userValue = userinput?.value.trim();
  const userEmail = emailinput?.value.trim();
  const userNumber = numberinput?.value.trim();
  const userPassword = passwordinput?.value.trim();

  if (!userValue || !userEmail || !userNumber || !userPassword) {
    if (message) {
      message.textContent = "Please Fill All Fields";
    }
    return;
  }

  if (message) {
    message.className = "mt-4 text-center text-green-600 font-medium";
    message.textContent = `User Name: ${userValue}, Email: ${userEmail}, Phone: ${userNumber}, Password: ${userPassword}`;
  }

  form.reset();
});
```

### ✨ Key Concepts Demonstrated

- 🔒 **Generic typing** with `querySelector<T>()` for accurate element types
- 🧩 **Optional chaining (`?.`)** to safely handle possibly-null elements
- 🎯 **Typed event parameters** (`Event`) for `addEventListener`
- ✅ **Form validation** with early return on missing fields
- 🎨 **Dynamic class + content updates** on success

---

## ▶️ How to Run

```bash
# 1. Install dependencies
npm install

# 2. Compile TypeScript
tsc

# 3. Open index.html in your browser
```

> 💡 Tip: Use the **Live Server** VS Code extension for auto-reloading during development.

---

## 📝 License

This project is part of a personal learning journey — feel free to use it for educational purposes.

---

<p align="center">Made with 💻 & ☕ while learning TypeScript</p>