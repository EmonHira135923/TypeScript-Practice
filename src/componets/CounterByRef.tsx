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
