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
