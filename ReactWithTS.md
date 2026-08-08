# 📘 TypeScript Mastery: Module 12 (TypeScript with React)

Welcome to **Module 12** of learning TypeScript! This module focuses on using **TypeScript with React**, covering setup with Vite & Tailwind CSS, typing component props, managing typed state (`useState`, `useEffect`), handling form events, and working with custom hooks and API integrations.

---

## 📌 12.1 Project Setup (Vite + Tailwind CSS v4)

To set up a modern React project with TypeScript, Vite, and Tailwind CSS, follow these terminal setup steps:

```bash
# 1. Create a React + TypeScript project with Vite
npm create vite@latest my-react-ts-app -- --template react-ts

# 2. Navigate to project directory
cd my-react-ts-app

# 3. Install Tailwind CSS v4 Vite plugin
npm install tailwindcss @tailwindcss/vite

# 4. Run the development server
npm run dev

```

### Configuration Updates:

**`vite.config.ts`**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

```

**`src/App.css`**

```css
@import "tailwindcss";

```

---

## 📌 12.2 Typing Component Props

### 📖 Definition / সংজ্ঞা:

* **English:** Defining component props using TypeScript `interfaces` or `types` ensures that parent components pass the correct data types, catching errors at compile-time.
* **বাংলা:** `interface` বা `type` ব্যবহার করে রিঅ্যাক্ট কম্পোনেন্টের প্রপস (Props) ডিফাইন করা হয়, যাতে প্যারেন্ট কম্পোনেন্ট থেকে ভুল ডেটা টাইপ পাঠানো রোধ করা যায়।

### 💻 Code Example: `UserProfile.tsx`

```tsx
import React from "react";

interface AddressProps {
  road: string;
  city: string;
  country: string;
  house: string;
  room: string;
}

type UserProfileProps = {
  userName: string;
  age: number;
  rollNo: number;
  dept: string;
  subject: string[];
  skills: string[];
  hobbies: string[];
  address: AddressProps;
};

const UserProfile: React.FC<UserProfileProps> = ({
  userName,
  age,
  rollNo,
  dept,
  subject,
  skills,
  hobbies,
  address,
}) => {
  const { city, country, road, room, house } = address;

  return (
    <div className="max-w-xl mx-auto my-6 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden text-left font-sans">
      <div className="bg-blue-600 p-6 text-white text-center">
        <h1 className="text-2xl font-bold">{userName}</h1>
        <p className="text-blue-100 text-sm mt-1">{dept}</p>
      </div>

      <div className="p-6 space-y-4 text-gray-700 text-sm">
        <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <p><span className="font-semibold text-gray-900">Age:</span> {age}</p>
          <p><span className="font-semibold text-gray-900">Roll:</span> {rollNo}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
          <p className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            {house}, Room-{room}, {road}, {city}, {country}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1.5">Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-50 text-blue-600 font-medium px-2.5 py-1 rounded-md text-xs border border-blue-100">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Subjects</h3>
          <p className="text-gray-600">{subject.join(", ")}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Hobbies</h3>
          <p className="text-gray-600">{hobbies.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

```

---

## 📌 12.3 Typed Hooks (`useState` & `useEffect`)

### 📖 Definition / সংজ্ঞা:

* **English:** Explicitly annotating `useState<T null |>(null)` ensures full type safety when managing state that can initially be empty or contain an object.
* **বাংলা:** `useState<T null |>(null)` ব্যবহার করে স্টেট ডিফাইন করলে টাইপস্ক্রিপ্ট অবজেক্ট বা `null` ভ্যালু উভয়কেই নিরাপদে হ্যান্ডেল করে।

### 💻 Code Example: `MainUser.tsx`

```tsx
import React, { useEffect, useState } from "react";

interface UserProps {
  username: string;
  email: string;
  phone: string;
}

const MainUser: React.FC = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    setUser({
      username: "Emon Hossain Hira",
      email: "emonhossainhira231@gmail.com",
      phone: "01817516654",
    });
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <h1 className="text-xl font-semibold text-red-500 bg-red-50 px-6 py-3 rounded-lg border border-red-100">
          No User Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-8 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden text-left font-sans">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white text-center">
        <div className="w-20 h-20 bg-white text-indigo-600 rounded-full flex items-center justify-center font-extrabold text-3xl mx-auto mb-3 shadow-md border-4 border-indigo-200">
          {user.username.charAt(0)}
        </div>
        <h2 className="text-2xl font-bold tracking-tight">{user.username}</h2>
        <span className="inline-block mt-2 bg-indigo-400/30 text-indigo-100 text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-indigo-300/30">
          Active User
        </span>
      </div>

      <div className="p-6 space-y-4 text-gray-700">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-xl">📧</span>
          <div className="overflow-hidden">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</p>
            <p className="text-sm font-medium text-gray-800 truncate">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-xl">📞</span>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</p>
            <p className="text-sm font-medium text-gray-800">{user.phone}</p>
          </div>
        </div>

        <button
          className="w-full mt-4 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out cursor-pointer"
          onClick={() =>
            setUser((prevUser) =>
              prevUser?.username === "Emon Hossain Hira"
                ? {
                    username: "Hello Buddy",
                    email: "hellobuddy@gmail.com",
                    phone: "01817516653",
                  }
                : {
                    username: "Emon Hossain Hira",
                    email: "emonhossainhira231@gmail.com",
                    phone: "01817516654",
                  }
            )
          }
        >
          Toggle User Info
        </button>
      </div>
    </div>
  );
};

export default MainUser;

```

---

## 📌 12.4 Working with Events & Forms

### 📖 Definition / সংজ্ঞা:

* **English:** React events need specific types like `React.ChangeEvent<HTMLInputElement>` for input changes and `React.FormEvent<HTMLFormElement>` for form submissions to prevent runtime errors and provide full autocompletion.
* **বাংলা:** ইনপুট চেঞ্জ বা ফর্ম সাবমিটের ক্ষেত্রে টাইপস্ক্রিপ্টে নির্দিষ্ট ইভেন্ট টাইপ (`React.ChangeEvent` এবং `React.FormEvent`) ব্যবহার করা হয়।

### 💻 Code Example: `FormSubmission.tsx`

```tsx
import React, { useState } from "react";

const FormSubmission: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePass = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Hi ${email}! Login Successful.`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 font-sans text-left">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Login Form</h1>

      <form onSubmit={handleForm} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="enter your email"
            required
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePass}
            placeholder="••••••••"
            required
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold rounded-xl shadow-md transition-all duration-150 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSubmission;

```

---

# Module 12.5 : TypeScript With Backend

5. Typing Refs

<!-- New Start  -->

1. UseRef and Ref Using Practice
2. 
```
import React, { useRef } from "react";

const CounterByRef: React.FC = () => {
  const countingValue = useRef<number>(0);
  const inputValue = useRef<HTMLInputElement | null>(null);

  const handleClickCnt = () => {
    countingValue.current = countingValue.current + 1;
    alert(`Clicked You ${countingValue.current} times`);
  };

  const handleClickRef = () => {
    inputValue.current?.focus();
  };

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 font-sans text-left space-y-6">
      {/* Title */}
      <div className="border-b border-gray-100 pb-3 text-center">
        <h1 className="text-xl font-bold text-gray-800">
          useRef Hook Practice
        </h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Persisting values without re-render & DOM manipulation
        </p>
      </div>

      {/* Feature 1: Silent Counter */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-800">Ref Counter</h2>
          <p className="text-xs text-gray-400">
            Stores count without re-rendering
          </p>
        </div>
        <button
          onClick={handleClickCnt}
          className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium text-xs rounded-lg shadow-md transition-all cursor-pointer"
        >
          Increment & Alert
        </button>
      </div>

      {/* Feature 2: DOM Focus */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">
          Focus DOM Input
        </label>
        <div className="flex gap-2">
          <input
            ref={inputValue}
            type="text"
            placeholder="Enter Your Value..."
            className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          <button
            onClick={handleClickRef}
            className="py-2 px-4 bg-slate-800 hover:bg-slate-900 active:scale-95 text-white font-medium text-xs rounded-xl transition-all cursor-pointer"
          >
            Focus Input
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterByRef;
```
6. Context API with Type

<!-- Theme Context and Context Practice and * **Theme Toggler:** Combines React Context API with TypeScript for global state management. making This Project -->

1. 

7. Props Dilling to Children Component

8. Custom Hooks

9. APIs and Fetch Responses


## 🛠️ Mini Projects Included in Module 12

* **Todo App:** Features `useState`, typed events, and custom hooks.
* **User Dashboard:** Fetches and displays typed user data via REST API.
* **Theme Toggler:** Combines React Context API with TypeScript for global state management.

---

⚡ *Happy Coding with React & TypeScript! / শুভ টাইপস্ক্রিপ্ট ও রিঅ্যাক্ট কোডিং!*