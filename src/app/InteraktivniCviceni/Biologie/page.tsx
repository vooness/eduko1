"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

// Placeholder data pro cvičení
const exercises = [
  { name: "Základy biologie", type: "Quiz", grade: "1. ročník", path: "/InteraktivniCviceni/Biologie/ZakladyBiologie" },
  { name: "Buňky a jejich funkce", type: "Drag & Drop", grade: "2. ročník" },
  { name: "Fotosyntéza", type: "Tabulka", grade: "3. ročník" },
  { name: "Lidské tělo", type: "Pexeso", grade: "4. ročník" },
  { name: "Ekosystémy", type: "Simulace", grade: "2. ročník" },
  { name: "Genetika", type: "Výpočet", grade: "3. ročník" },
  { name: "Zvířecí říše", type: "Pexeso", grade: "1. ročník" },
  { name: "Rostliny a jejich části", type: "Quiz", grade: "4. ročník" },
  { name: "Člověk a jeho orgány", type: "Drag & Drop", grade: "2. ročník" },
  { name: "Mikroorganismy", type: "Výpočet", grade: "3. ročník" },
  { name: "Ekologie", type: "Tabulka", grade: "4. ročník" },
  { name: "Biochemie", type: "Simulace", grade: "3. ročník" },
];

export default function BiologiePage() {
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
          <h1 className="text-5xl font-extrabold text-white mb-4">Cvičení z Biologie</h1>
          <p className="text-lg text-gray-300">
            Prozkoumejte různá témata z biologie a zdokonalte své znalosti o živých organismech.
          </p>
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
              <button
                className="mt-4 px-4 py-2 bg-white text-green-600 font-semibold rounded hover:bg-green-700 hover:text-white transition-all"
                onClick={() => {
                  if (exercise.path) {
                    router.push(exercise.path); // Přesměrování na specifickou stránku
                  } else {
                    alert("Cvičení zatím není dostupné.");
                  }
                }}
              >
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
