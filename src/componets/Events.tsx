import React, { useState } from "react";

const Events: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 font-sans text-left space-y-6">
      {/* Header */}
      <div className="border-b border-gray-100 pb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">React Events Playground</h1>
        <p className="text-xs text-gray-400 mt-1">
          Handling Click & Input Events with TypeScript
        </p>
      </div>

      {/* Counter Section */}
      <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Click Event
          </p>
          <h2 className="text-2xl font-extrabold text-indigo-700 mt-0.5">
            Count: {count}
          </h2>
        </div>
        <button
          onClick={handleClick}
          className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold text-sm rounded-lg shadow-md transition-all duration-150 cursor-pointer"
        >
          Click Me
        </button>
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">
          Input Event
        </label>
        <input
          type="text"
          value={text}
          placeholder="Enter your text here..."
          onChange={handleInput}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
        />

        {/* Dynamic Display */}
        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 min-h-[48px] flex items-center">
          <p className="text-sm text-gray-600 break-all">
            <span className="font-semibold text-gray-800">Your Content: </span>
            {text ? (
              <span className="text-indigo-600 font-medium">{text}</span>
            ) : (
              <span className="text-gray-400 italic">Start typing above...</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;