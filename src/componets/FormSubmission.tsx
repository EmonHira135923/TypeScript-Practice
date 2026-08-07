import React, { useState } from "react";

const FormSubmission: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Hi, ${email}! Login Successfully Done`);
    // ফর্ম রিসেট
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 font-sans text-left">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Login Form
      </h1>

      {/* ১. এখানে onSubmit ব্যবহার করা হয়েছে */}
      <form onSubmit={handleForm} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail} /* ২. সরাসরি ফানশন পাস করা হয়েছে */
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
            name="password"
            id="password"
            value={password}
            onChange={handlePass} /* ২. সরাসরি ফানশন পাস করা হয়েছে */
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