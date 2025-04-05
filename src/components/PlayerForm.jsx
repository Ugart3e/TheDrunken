import { useState } from "react";

export default function PlayerForm({ onAddPlayer }) {
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState("easy");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    onAddPlayer({ nombre, dificultadMax: dificultad });
    setNombre("");
    setDificultad("easy");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto flex flex-col gap-4">
      <input
        type="text"
        placeholder="Player Name"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
        <select
        value={dificultad}
        onChange={(e) => setDificultad(e.target.value)}
        className="p-3 rounded-lg border"
        >
        <option value="easy">Easy 🟢</option>
        <option value="medium">Medium 🟡</option>
        <option value="hard">Hard 🔴</option>
        <option value="extreme">Extreme ☠️</option> {/* Esto es clave */}
        </select>
      <button
        type="submit"
        className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
      >
        Add Player
      </button>
    </form>
  );
}