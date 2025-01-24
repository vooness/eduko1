"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

const exercises = [
  { name: "Občanské právo", type: "Quiz", grade: "1. ročník" },
  { name: "Právní dokumenty", type: "Drag & Drop", grade: "2. ročník" },
  { name: "Soudní procesy", type: "Simulace", grade: "3. ročník" },
  { name: "Právní výklady", type: "Tabulka", grade: "4. ročník" },
  { name: "Trestní právo", type: "Quiz", grade: "2. ročník" },
  { name: "Právní základy", type: "Výpočet", grade: "1. ročník" },
  { name: "Zákoník práce", type: "Pexeso", grade: "3. ročník" },
  { name: "Soudní řízení", type: "Drag & Drop", grade: "4. ročník" },
  { name: "Rodinné právo", type: "Tabulka", grade: "2. ročník" },
  { name: "Právní odpovědnost", type: "Simulace", grade: "3. ročník" },
  { name: "Základy ústavního práva", type: "Quiz", grade: "1. ročník" },
  { name: "Právní dohody", type: "Výpočet", grade: "4. ročník" },
];

export default function PravoPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow p-6 flex flex-col items-center mt-28 mb-28">
        {/* Tlačítko Zpět */}
        <div className="w-full max-w-7xl mb-6">
          <button
            onClick={() => router.push("/InteraktivniCviceni")}
            className="flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Zpět
          </button>
        </div>

        {/* Nadpis a popis */}
        <div className="max-w-4xl w-full text-center mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-4">Cvičení z Práva</h1>
          <p className="text-lg text-gray-300">Procvičte si klíčové právní znalosti a zdokonalte své dovednosti.</p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl w-full">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold text-white mb-2">{exercise.name}</h2>
              <p className="text-gray-200 mb-1">Typ: {exercise.type}</p>
              <p className="text-gray-200">Ročník: {exercise.grade}</p>
              <button className="mt-4 px-4 py-2 bg-white text-green-600 font-semibold rounded hover:bg-green-700 hover:text-white transition-all">
                Spustit cvičení
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
