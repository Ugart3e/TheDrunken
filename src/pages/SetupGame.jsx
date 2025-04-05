import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerForm from "../components/PlayerForm";

export default function SetupGame() {
  const [jugadores, setJugadores] = useState([]);
  const navigate = useNavigate();

  const handleAddPlayer = (jugador) => {
    setJugadores((prev) => [...prev, jugador]);
  };

  const handleStartGame = () => {
    if (jugadores.length < 1) return alert("Agrega al menos un jugador 🍻");

    // Guardar jugadores y progreso inicial
    localStorage.setItem(
      "juego",
      JSON.stringify({
        jugadores,
        jugadorActual: 0,
        retosPasados: [],
      })
    );

    navigate("/game"); // Ruta que todavía vamos a crear
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Create Game 🎉</h2>

      <PlayerForm onAddPlayer={handleAddPlayer} />

      {jugadores.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Players:</h3>
          <ul className="space-y-2">
            {jugadores.map((j, i) => (
              <li key={i} className="bg-white p-3 rounded-lg shadow text-gray-800">
                {j.nombre} — <span className="italic">{j.dificultadMax}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleStartGame}
            className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            ¡Start Game! 🚀
          </button>
        </div>
      )}
    </div>
  );
}
