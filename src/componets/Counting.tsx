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