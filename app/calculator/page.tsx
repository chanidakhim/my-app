// app/calculator/page.tsx
"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [value, setValue] = useState("");

  const handleClick = (val: string) => {
    setValue(value + val);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // ใช้ eval อย่างระวัง แต่ OK สำหรับเครื่องคิดเลขส่วนบุคคล
      // แปลงเป็น string เพื่อป้องกัน error
      const result = eval(value);
      setValue(String(result));
    } catch (e) {
      setValue("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl border w-full max-w-sm">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          เครื่องคิดเลข
        </h1>

        {/* Display */}
        <input
          type="text"
          value={value}
          readOnly
          className="w-full text-right text-3xl p-4 rounded-lg border bg-gray-50 mb-4 shadow-inner"
        />

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-4">

          {/* Row 1 */}
          <button onClick={handleClear} className="p-4 bg-red-500 text-white rounded-xl text-xl shadow hover:bg-red-600">C</button>
          <button onClick={handleDelete} className="p-4 bg-orange-500 text-white rounded-xl text-xl shadow hover:bg-orange-600">DEL</button>
          <button onClick={() => handleClick("%")} className="p-4 bg-gray-200 rounded-xl text-xl shadow hover:bg-gray-300">%</button>
          <button onClick={() => handleClick("/")} className="p-4 bg-blue-500 text-white rounded-xl text-xl shadow hover:bg-blue-600">÷</button>

          {/* Row 2 */}
          <button onClick={() => handleClick("7")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">7</button>
          <button onClick={() => handleClick("8")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">8</button>
          <button onClick={() => handleClick("9")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">9</button>
          <button onClick={() => handleClick("*")} className="p-4 bg-blue-500 text-white rounded-xl text-xl shadow hover:bg-blue-600">×</button>

          {/* Row 3 */}
          <button onClick={() => handleClick("4")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">4</button>
          <button onClick={() => handleClick("5")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">5</button>
          <button onClick={() => handleClick("6")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">6</button>
          <button onClick={() => handleClick("-")} className="p-4 bg-blue-500 text-white rounded-xl text-xl shadow hover:bg-blue-600">−</button>

          {/* Row 4 */}
          <button onClick={() => handleClick("1")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">1</button>
          <button onClick={() => handleClick("2")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">2</button>
          <button onClick={() => handleClick("3")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">3</button>
          <button onClick={() => handleClick("+")} className="p-4 bg-blue-500 text-white rounded-xl text-xl shadow hover:bg-blue-600">+</button>

          {/* Row 5 */}
          <button onClick={() => handleClick("0")} className="col-span-2 p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">0</button>
          <button onClick={() => handleClick(".")} className="p-4 bg-white border rounded-xl text-xl shadow hover:bg-gray-100">.</button>
          <button onClick={handleCalculate} className="p-4 bg-green-500 text-white rounded-xl text-xl shadow hover:bg-green-600">=</button>

        </div>
      </div>
    </div>
  );
}
