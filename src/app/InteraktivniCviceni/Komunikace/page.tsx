"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const exercisesData = [
  { name: "Pravidla komunikace", type: "Quiz", grade: "1. ročník" },
  { name: "Emailová etiketa", type: "Drag & Drop", grade: "2. ročník" },
  { name: "Formální dopisy", type: "Simulace", grade: "3. ročník" },
  { name: "Elektronická komunikace", type: "Tabulka", grade: "4. ročník" },
  { name: "Složení dopisů", type: "Výpočet", grade: "2. ročník" },
  { name: "Komunikační strategie", type: "Quiz", grade: "3. ročník" },
  { name: "Verbální komunikace", type: "Simulace", grade: "1. ročník" },
  { name: "Neverbální komunikace", type: "Tabulka", grade: "4. ročník" },
  { name: "Analýza dopisů", type: "Drag & Drop", grade: "3. ročník" },
  { name: "Úprava e-mailů", type: "Výpočet", grade: "2. ročník" },
  { name: "Oficiální dokumenty", type: "Quiz", grade: "4. ročník" },
  { name: "Prezentace", type: "Simulace", grade: "1. ročník" },
];

export default function KomunikacePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGrade, setFilterGrade] = useState("");
  const [filterType, setFilterType] = useState("");

  // Filtrace cvičení podle vyhledávacího řetězce, ročníku a typu
  const filteredExercises = exercisesData.filter((exercise) => {
    // Vyhledávání podle jména (case-insensitive)
    const matchName = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
    // Pokud je zvolen nějaký ročník, musí se shodovat
    const matchGrade = filterGrade ? exercise.grade === filterGrade : true;
    // Pokud je zvolen nějaký typ cvičení, musí se shodovat
    const matchType = filterType ? exercise.type === filterType : true;

    return matchName && matchGrade && matchType;
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hlavní obsah */}
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

        {/* Nadpis, popis a filtry */}
        <div className="max-w-4xl w-full text-center mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-4">Cvičení z Komunikace</h1>
          <p className="text-lg text-gray-300 mb-6">
            Procvičte své dovednosti v psané i ústní komunikaci. Níže můžete vyhledávat a filtrovat cvičení.
          </p>

          {/* Vyhledávání a filtry */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Vyhledat cvičení..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <select
              value={filterGrade}
              onChange={(e) => setFilterGrade(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Všechny ročníky</option>
              <option value="1. ročník">1. ročník</option>
              <option value="2. ročník">2. ročník</option>
              <option value="3. ročník">3. ročník</option>
              <option value="4. ročník">4. ročník</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Všechny typy</option>
              <option value="Quiz">Quiz</option>
              <option value="Drag & Drop">Drag & Drop</option>
              <option value="Tabulka">Tabulka</option>
              <option value="Výpočet">Výpočet</option>
              <option value="Simulace">Simulace</option>
              <option value="Pexeso">Pexeso</option>
            </select>
          </div>
        </div>

        {/* Grid layout s kartami */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {filteredExercises.map((exercise, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br  from-green-500 to-blue-600 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold text-white mb-2">{exercise.name}</h2>
              <p className="text-gray-200 mb-1">Typ: {exercise.type}</p>
              <p className="text-gray-200">Ročník: {exercise.grade}</p>
              <button
                onClick={() => {
                  // Sem můžete přidat router.push nebo zobrazení detailu v modálu
                  alert(`Spouštím cvičení: ${exercise.name}`);
                }}
                className="mt-4 px-4 py-2 bg-white text-green-700 font-semibold rounded hover:bg-green-900 hover:text-white transition-all"
              >
                Spustit cvičení
              </button>
            </div>
          ))}

          {/* Pokud filtry nenajdou žádné cvičení */}
          {filteredExercises.length === 0 && (
            <div className="col-span-full text-center text-gray-300 mt-6">
              <p>Žádné cvičení neodpovídá zadaným kritériím.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
