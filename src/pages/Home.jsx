import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-400 to-purple-600 text-white px-4">
      <h1 className="text-5xl font-bold mb-12 text-center drop-shadow-lg">TheDrunken 🍻</h1>
      <button
        onClick={() => navigate("/setup")}
        className="bg-white text-purple-700 text-lg font-semibold py-3 px-10 rounded-2xl shadow-lg hover:bg-purple-100 transition duration-200"
      >
        🎮 ¡Play!
      </button>
    </div>
  );
}