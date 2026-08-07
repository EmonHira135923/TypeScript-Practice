import "./App.css";
import UserProfile from "./componets/UserProfile";
import Counting from "./componets/Counting";
import MainUser from "./componets/MainUser";
import Events from "./componets/Events";
import FormSubmission from "./componets/FormSubmission";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Header Section */}
      <header className="max-w-7xl mx-auto text-center mb-10">
        <span className="bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-indigo-500/20">
          React + TypeScript Workspace
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Student Dashboard
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Explore interactive components, state management, event handlers, and form handling in one place.
        </p>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Hero Section: Main Profile */}
        <section className="w-full">
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
        </section>

        {/* Grid Layout for Other Components */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
          
          <div className="space-y-6">
            <MainUser />
            <Counting />
          </div>

          <div className="space-y-6">
            <FormSubmission />
            <Events />
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-xs mt-16 border-t border-slate-800 pt-6">
        Built with React, TypeScript & Tailwind CSS
      </footer>

    </div>
  );
}

export default App;