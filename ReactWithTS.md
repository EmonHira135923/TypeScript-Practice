# Module 12 : TypeScript With Backend
1. Setting Up React With TypeScript
2. Typing React Component Props
3. UseState and UseEffect using Type
4. Working With Events
5. Typing Refs
6. Context API with Type
7. Props Dilling to Children Component
8. Custom Hooks
9. APIs and Fetch Responses

## Mini Project Ideas for Students
    10. Todo App - With useState,typed Events,custom Hooks
    11. UserDashboard - Fetch and Display typed user data
    12. Theme Toggler - Using Context API + TypeScript.

<!-- Project Start -->
13. npm create vite@latest
14. Clear App.css and index.css
15. install npm install tailwindcss @tailwindcss/vite
16. setup in app.css ---> @import "tailwindcss";
17. vite config.ts file aa import tailwindcss from '@tailwindcss/vite' and tailwindcss() call kore dew aa 
18. Now Project Run 

<!-- Practice Concept Using Ts -->
19. Typing React Component Props and using interface and type practice.
20. ```
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

const UserProfile = ({
  userName,
  age,
  rollNo,
  dept,
  subject,
  skills,
  hobbies,
  address,
}: UserProfileProps) => {
  const { city, country, road, room, house } = address;

  return (
    <div className="max-w-xl mx-auto my-6 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden text-left font-sans">
      {/* Header */}
      <div className="bg-blue-600 p-6 text-white text-center">
        <h1 className="text-2xl font-bold">{userName}</h1>
        <p className="text-blue-100 text-sm mt-1">{dept}</p>
      </div>

      <div className="p-6 space-y-4 text-gray-700 text-sm">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <p><span className="font-semibold text-gray-900">Age:</span> {age}</p>
          <p><span className="font-semibold text-gray-900">Roll:</span> {rollNo}</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
          <p className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            {house}, Room-{room}, {road}, {city}, {country}
          </p>
        </div>

        {/* Skills */}
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

        {/* Subjects */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Subjects</h3>
          <p className="text-gray-600">{subject.join(", ")}</p>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Hobbies</h3>
          <p className="text-gray-600">{hobbies.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import "./App.css";
import UserProfile from "./componets/UserProfile";

function App() {
  const userName = "Emon Hossain Hira";
  const age = 23;
  const rollNo = 20262203041;
  const dept = "Computer Science and Engineering";
  const subject = [
    "Vector Analysis",
    "History of Bangladesh",
    "Structure of Programming Language",
    "English for Communication",
    "Structure of Programming Language Lab",
  ];
  const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];
  const hobbies = ["Reading", "Traveling", "Gaming", "Coding"];
  const address = {
    road: "South Kamlapur, Sadar Kaloni",
    city: "Dhaka",
    country: "Bangladesh",
    house: "House No-A-Building",
    room: "203",
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <h1 className="text-3xl font-extrabold text-center text-slate-800 tracking-tight mb-2">
        Student Dashboard
      </h1>

      <UserProfile
        userName={userName}
        age={age}
        rollNo={rollNo}
        dept={dept}
        subject={subject}
        skills={skills}
        hobbies={hobbies}
        address={address}
      />
    </div>
  );
}

export default App;
```
---
21. UseState and UseEffect using Type
22. ```
import React, { useEffect, useState } from "react";

interface UserProps {
  username: string;
  email: string;
  phone: string;
}

const MainUser: React.FC = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    // ডাটা সেট করা হচ্ছে
    setUser({
      username: "Emon Hossain Hira",
      email: "emonhossainhira231@gmail.com",
      phone: "01817516654",
    });
  }, []); // Cleanup function টি সরিয়ে নেওয়া হয়েছে

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
      {/* Header Profile Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white text-center">
        <div className="w-20 h-20 bg-white text-indigo-600 rounded-full flex items-center justify-center font-extrabold text-3xl mx-auto mb-3 shadow-md border-4 border-indigo-200">
          {user.username.charAt(0)}
        </div>
        <h2 className="text-2xl font-bold tracking-tight">{user.username}</h2>
        <span className="inline-block mt-2 bg-indigo-400/30 text-indigo-100 text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-indigo-300/30">
          Active User
        </span>
      </div>

      {/* Details Section */}
      <div className="p-6 space-y-4 text-gray-700">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-xl">📧</span>
          <div className="overflow-hidden">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Email Address
            </p>
            <p className="text-sm font-medium text-gray-800 truncate">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
          <span className="text-xl">📞</span>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Phone Number
            </p>
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
                  },
            )
          }
        >
          Change User
        </button>
      </div>
    </div>
  );
};

export default MainUser;


import React, { useState } from 'react';

const Counting: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (): void => setCount((prev) => prev + 1);
  const handleDecrement = (): void => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const handleReset = (): void => setCount(0);

  return (
    <div className="max-w-xs mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 text-center font-sans">
      <h2 className="text-sm uppercase tracking-wider font-semibold text-gray-400 mb-2">
        Counter App
      </h2>
      
      {/* Display Count */}
      <div className="text-5xl font-extrabold text-indigo-600 my-4 transition-all">
        {count}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-6">
        <button
          onClick={handleIncrement}
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium rounded-xl shadow-md transition-all duration-150"
        >
          Increase (+1)
        </button>

        <div className="flex gap-2">
          <button
            onClick={handleDecrement}
            className="flex-1 py-2 px-3 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 font-medium rounded-xl transition-all duration-150"
          >
            Decrease (-1)
          </button>

          <button
            onClick={handleReset}
            className="flex-1 py-2 px-3 bg-red-50 hover:bg-red-100 active:scale-95 text-red-600 font-medium rounded-xl border border-red-100 transition-all duration-150"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counting;
```
