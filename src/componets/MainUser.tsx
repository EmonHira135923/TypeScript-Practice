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
