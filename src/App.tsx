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

      <Counting />

      <MainUser />

      <Events />

      <FormSubmission/>
    </div>
  );
}

export default App;
