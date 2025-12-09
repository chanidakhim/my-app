"use client";

import { useState } from "react";

export default function GradingPage() {
  const [score, setScore] = useState<string>("");
  const [grade, setGrade] = useState<string>("");

  const calculateGrade = () => {
    const s = Number(score);

    if (isNaN(s) || s < 0 || s > 100) {
      setGrade("คะแนนไม่ถูกต้อง");
      return;
    }

    let g = "";

    if (s >= 80) g = "A";
    else if (s >= 75) g = "B+";
    else if (s >= 70) g = "B";
    else if (s >= 65) g = "C+";
    else if (s >= 60) g = "C";
    else if (s >= 55) g = "D+";
    else if (s >= 50) g = "D";
    else g = "F";

    setGrade(g);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl border w-full max-w-lg">
        
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-6">
          ระบบตัดเกรด
        </h1>

        {/* Input Box */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-800 font-medium">
            ป้อนคะแนน (0 - 100)
          </label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full p-3 border rounded-lg text-lg shadow-inner"
            placeholder="เช่น 82"
          />
        </div>

        {/* Button */}
        <button
          onClick={calculateGrade}
          className="w-full bg-green-600 text-white py-3 text-lg rounded-xl shadow hover:bg-green-700 transition duration-300"
        >
          คำนวณเกรด
        </button>

        {/* Result */}
        {grade && (
          <div className="mt-6 p-4 bg-gray-50 border rounded-xl text-center">
            <p className="text-xl font-bold text-gray-700">
              เกรดที่ได้:
            </p>
            <p className="text-4xl font-extrabold text-green-600 mt-2">
              {grade}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
