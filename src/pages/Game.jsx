import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const niveles = ["easy", "medium", "hard", "extreme", "general"]; // Añadido 'general'

// Lista de retos ampliada con más pruebas, incluyendo un reto 'general'
const retos = [
    { id: 1, texto: "Take a sip of someones drink", dificultad: "easy" },
    { id: 2, texto: "Do 10 jumping jacks", dificultad: "easy" },
    { id: 3, texto: "Touch someone's foot", dificultad: "easy" },
    { id: 34, texto: "Who do you most often text while ur in the bathroom?", dificultad: "easy" },
    { id: 35, texto: "", dificultad: "easy" },
    { id: 4, texto: "Dance for 10 seconds", dificultad: "easy" },
    { id: 5, texto: "Do your best animal sound", dificultad: "easy" },
    { id: 6, texto: "Make a silly face and hold it for 10 seconds", dificultad: "easy" },
    { id: 32, texto: "Make an eye contact battle until someone laught", dificultad: "easy" },
    { id: 48, texto: "eyes closed until next turn", dificultad: "easy" },
    { id: 50, texto: "try to put your fist on your mouth (or someone's fist)", dificultad: "easy" },
    { id: 51, texto: "give someone your phone and let them text to whoever they want", dificultad: "easy" },
    { id: 88, texto: "Don't look at your phone for half an hour", dificultad: "easy" },
  { id: 89, texto: "Let someone from the group read your messages (without saying them aloud)", dificultad: "easy" },
  { id: 90, texto: "Imitate someone from the group", dificultad: "easy" },
  { id: 91, texto: "Do 20 squats", dificultad: "easy" },
  { id: 92, texto: "Pretend to be a statue for 30 seconds", dificultad: "easy" },
{ id: 93, texto: "take a selfie with your tongue out", dificultad: "easy" },
{ id: 94, texto: "Let someone draw something on your face", dificultad: "easy" },
{ id: 95, texto: "let the one on your right squeeze your face", dificultad: "easy" },
{ id: 96, texto: "squeeze someones face", dificultad: "easy" },
{ id: 97, texto: "Speak in an accent of your choice for the next round", dificultad: "easy" },
{ id: 98, texto: "Do your best dance move for 20 seconds", dificultad: "easy" },
{ id: 99, texto: "Pick someone for everyone to ignore for the next full round", dificultad: "easy" },
{ id: 100, texto: "Take a picture of something random and send it to your best friend", dificultad: "easy" },
{ id: 101, texto: "wear some glasses as fast as you can", dificultad: "easy" },
{ id: 102, texto: "Talk like you are stutterer for the next 2 minutes", dificultad: "easy" },
{ id: 103, texto: "Make an embarrassing sound out loud", dificultad: "easy" },
{ id: 104, texto: "tell your worst joke", dificultad: "easy" },
{ id: 105, texto: "Let someone else give you a nickname for the night", dificultad: "easy" },


    { id: 7, texto: "Do a funny dance in front of everyone", dificultad: "medium" },
    { id: 8, texto: "Post a story with a random filter", dificultad: "medium" },
    { id: 9, texto: "Send a funny emoji to someone random in your contact list", dificultad: "medium" },
    { id: 10, texto: "Imitate a celebrity and everyone try to guess", dificultad: "medium" },
    { id: 11, texto: "Give a 30-second speech about why you're the best looking tonight", dificultad: "medium" },
    { id: 12, texto: "Take a shot of a random drink", dificultad: "medium" },
    { id: 13, texto: "Share a random video with the group", dificultad: "medium" },
    { id: 40, texto: "Have you ever kissed someone form work?", dificultad: "medium" },
    { id: 49, texto: "Like the first story on your ig", dificultad: "medium" },
    { id: 14, texto: "Call someone on your 5 last chats and tell them you are mad because 'you know what they did'", dificultad: "medium" },
    { id: 84, texto: "Flirt with a friend and see how they respond", dificultad: "medium" },
  { id: 85, texto: "Show your first and last video on your phone", dificultad: "medium" },
  { id: 86, texto: "Call an unknown number and ask for a pizza. Keep insisting even if the person says it's not a pizzeria", dificultad: "medium" },
  { id: 87, texto: "Sit on the person 3 seats to your right", dificultad: "medium" },
  { id: 106, texto: "Record a 15-second video singing in the bathroom and show it to the group", dificultad: "medium" },
{ id: 107, texto: "Sing a song you don't know the lyrics to", dificultad: "medium" },
{ id: 108, texto: "Post something funny in your group chat", dificultad: "medium" },
{ id: 109, texto: "Give a 1-minute monologue about the best party host", dificultad: "medium" },
{ id: 110, texto: "Call a friend and pretend you're in love with them", dificultad: "medium" },
{ id: 111, texto: "Give someone in the group a compliment they've never heard before", dificultad: "medium" },
{ id: 112, texto: "Do a 30-second freestyle rap about the group", dificultad: "medium" },
{ id: 113, texto: "Tell the group the most embarrassing thing you've done on a date", dificultad: "medium" },
{ id: 114, texto: "Pretend to be an old person for 1 minute", dificultad: "medium" },
{ id: 115, texto: "Do a funny impersonation of someone in the group", dificultad: "medium" },
{ id: 116, texto: "Give someone a compliment in the weirdest way possible", dificultad: "medium" },
{ id: 117, texto: "Show an embarrassing photo from your camera roll", dificultad: "medium" },
  
    { id: 15, texto: "Go up to a stranger and tell them 'where do i know you from?'", dificultad: "hard" },
    { id: 16, texto: "Send a voice note to your ex saying, 'I miss you!'", dificultad: "hard" },
    { id: 17, texto: "Post a cringe video on your social media", dificultad: "hard" },
    { id: 18, texto: "Do 10 push-ups in front of the group", dificultad: "hard" },
    { id: 33, texto: "Fuck, Marry, Kill with the one on your right, left and in front of you", dificultad: "hard" },
    { id: 19, texto: "Make a 1-minute speech pretending to be a politician", dificultad: "hard" },
    { id: 20, texto: "Do a cartwheel in front of everyone", dificultad: "hard" },
    { id: 21, texto: "Take a shot of tequila and sing a song at the same time", dificultad: "hard" },
    { id: 39, texto: "Pick 2 people from the group to do a threesome and tell why", dificultad: "hard" },
    { id: 44, texto: "What you like to be called in bed?", dificultad: "hard" },
    { id: 42, texto: "Seductively give your best pickup line to someone on this table (opposite gender)", dificultad: "hard" },
    { id: 46, texto: "Yell the first word that comes to your mind", dificultad: "hard" },
    { id: 76, texto: "How many hidden photos/videos do you have?", dificultad: "hard" },
  { id: 77, texto: "Do as many push-ups as you can in 1 minute", dificultad: "hard" },
  { id: 78, texto: "Make a call to a friend and pretend to be someone else", dificultad: "hard" },
  { id: 79, texto: "Call someone and tell them you're pregnant", dificultad: "hard" },
  { id: 80, texto: "What's the biggest lie you've ever told?", dificultad: "hard" },
  { id: 81, texto: "Ask someone for their phone number/Instagram", dificultad: "hard" },
  { id: 82, texto: "Drink a shot of tequila from another person's body part", dificultad: "hard" },
  { id: 83, texto: "Ask a random person to take a photo for your mom", dificultad: "hard" },
  { id: 118, texto: "Call your ex and tell them you think you made a mistake", dificultad: "hard" },
{ id: 119, texto: "Send a text to a random number in your contacts saying 'I'm having a breakdown'", dificultad: "hard" },
{ id: 120, texto: "Do 15 push-ups in a row and then shout a phrase of your choice", dificultad: "hard" },
{ id: 121, texto: "Get a stranger's number and text them an embarrassing message", dificultad: "hard" },
{ id: 122, texto: "Write a love letter to someone in the group and read it out loud", dificultad: "hard" },
{ id: 123, texto: "Record yourself doing your best dance move and send it to the group chat", dificultad: "hard" },

    { id: 22, texto: "Call your ex and say 'I miss you'", dificultad: "extreme" },
    { id: 23, texto: "Go outside and do 10 jumping jacks in public", dificultad: "extreme" },
    { id: 24, texto: "Post a selfie with a weird filter and tag your parents", dificultad: "extreme" },
    { id: 25, texto: "Text your boss 'I need a break, I'm about to lose my mind'", dificultad: "extreme" },
    { id: 26, texto: "Run around the block and shout 'I'm the king of the world'", dificultad: "extreme" },
    { id: 27, texto: "Take a shot and then do your best interpretive dance performance", dificultad: "extreme" },
    { id: 28, texto: "Send a heart emoji to your crush", dificultad: "extreme" },
    { id: 29, texto: "Drink a random cocktail made by someone else", dificultad: "extreme" },
    { id: 30, texto: "Walk up to a random person and tell them you love them", dificultad: "extreme" },
    { id: 47, texto: "let the group make you a hairstyle", dificultad: "extreme" },
    { id: 66, texto: "Who's the sexiest person here?", dificultad: "extreme" },
  { id: 67, texto: "What's your favorite sexual position?", dificultad: "extreme" },
  { id: 68, texto: "Have you ever been caught having sex?", dificultad: "extreme" },
  { id: 69, texto: "Wet your pants as if you peed yourself", dificultad: "extreme" },
  { id: 70, texto: "Call your last partner and tell them you miss them", dificultad: "extreme" },
  { id: 71, texto: "Call your mom and tell her you love her", dificultad: "extreme" },
  { id: 72, texto: "Send a message to one of your exes insulting them", dificultad: "extreme" },
  { id: 73, texto: "Kiss the person on your right", dificultad: "extreme" },
  { id: 74, texto: "Lick the neck of someone in the group", dificultad: "extreme" },
  { id: 75, texto: "Decide as a group who to DM on Instagram", dificultad: "extreme" },
  { id: 124, texto: "Call your mom and tell her you got a tattoo", dificultad: "extreme" },
{ id: 125, texto: "Do a karaoke performance in front of strangers", dificultad: "extreme" },
{ id: 126, texto: "Send a text to your ex", dificultad: "extreme" },
{ id: 127, texto: "Prank call your neighbour number", dificultad: "extreme" },
{ id: 128, texto: "Do a shot of tequila from someone's belly button", dificultad: "extreme" },

  
    { id: 31, texto: "All players must do the Macarena dance", dificultad: "general" }, // Reto general
    { id: 36, texto: "Who would you list as your emergency contact from the group?", dificultad: "general" },
    { id: 37, texto: "Who would you change bodies with? (from the group)", dificultad: "general" },
    { id: 38, texto: "Dominant people thumbs up, Submisives thumbs down", dificultad: "general" },
    { id: 41, texto: "If you could only do one sexual act for the rest of your life, what would it be?", dificultad: "general" },
    { id: 43, texto: "Have you ever slept with someone and then inmediatelly regretted it?", dificultad: "general" },
    { id: 45, texto: "Have you ever faked an orgasm?", dificultad: "general" },
    { id: 52, texto: "Who would you take to a desert island?", dificultad: "general" },
  { id: 53, texto: "What's the most embarrassing thing that has ever happened to you?", dificultad: "general" },
  { id: 54, texto: "What's the strangest dream you remember?", dificultad: "general" },
  { id: 55, texto: "If you could travel in time, which era of history or moment of your life would you visit?", dificultad: "general" },
  { id: 56, texto: "Have you lied while playing this game?", dificultad: "general" },
  { id: 57, texto: "What's your seduction technique?", dificultad: "general" },
  { id: 58, texto: "Would you leave your partner if you were offered 1 million euros?", dificultad: "general" },
  { id: 59, texto: "If you could have dinner with a famous person, who would it be?", dificultad: "general" },
  { id: 60, texto: "Do you talk to yourself out loud?", dificultad: "general" },
  { id: 61, texto: "Have you ever peed yourself from laughing too much?", dificultad: "general" },
  { id: 62, texto: "What's your biggest fear?", dificultad: "general" },
  { id: 63, texto: "Have you ever written to a celebrity on Instagram?", dificultad: "general" },
  { id: 64, texto: "Have you ever cheated on someone?", dificultad: "general" },
  { id: 65, texto: "What's been your worst fall?", dificultad: "general" },
  { id: 131, texto: "What's your most embarrassing nickname?", dificultad: "general" },
{ id: 132, texto: "If you could switch lives with someone in the group for a day, who would it be?", dificultad: "general" },
{ id: 133, texto: "If you had to choose one person from this group to spend a week in a cabin in the woods with, who would it be?", dificultad: "general" },
{ id: 134, texto: "Would you rather always be too hot or always be too cold?", dificultad: "general" },
{ id: 135, texto: "Pick someone from the group and give them a compliment they've never heard before", dificultad: "general" },
{ id: 136, texto: "If you could erase one memory from your life, what would it be?", dificultad: "general" },
{ id: 137, texto: "Who do you trust the most in this group?", dificultad: "general" },
{ id: 138, texto: "If you had to describe the person on your left with one word, what would it be?", dificultad: "general" },
{ id: 139, texto: "If you had the opportunity to live forever, would you?", dificultad: "general" },
{ id: 140, texto: "Choose someone from the group and say something nice about them that no one else would know", dificultad: "general" },
{ id: 141, texto: "Who would you vote as the funniest person here?", dificultad: "general" },
{ id: 142, texto: "Who in the group do you think is most likely to survive in a zombie apocalypse?", dificultad: "general" },
{ id: 143, texto: "If you were an animal, what would you be and why?", dificultad: "general" },
{ id: 144, texto: "If you had to describe your love life in a movie title, what would it be?", dificultad: "general" },
{ id: 145, texto: "Who would you trust with your life in this group?", dificultad: "general" },
{ id: 146, texto: "Would you rather live without social media or without TV?", dificultad: "general" },
{ id: 147, texto: "If you could change one thing about the world, what would it be?", dificultad: "general" },
{ id: 148, texto: "If someone offered you 100k to leave everything behind and start a new life, would you take it?", dificultad: "general" },
{ id: 149, texto: "If you could only eat one type of food for the rest of your life, what would it be?", dificultad: "general" },
{ id: 150, texto: "Pick a person from the group and pretend to be them for 1 minute", dificultad: "general" },
{ id: 151, texto: "What's your guilty pleasure that no one knows about?", dificultad: "general" },
{ id: 152, texto: "Who do you think is the best-dressed person in the group?", dificultad: "general" },
{ id: 153, texto: "What’s the craziest thing you’ve ever done for love?", dificultad: "general" },
{ id: 154, texto: "If you could only have one app on your phone, what would it be?", dificultad: "general" },
{ id: 155, texto: "If you were famous, what would you be famous for?", dificultad: "general" },
{ id: 156, texto: "Who in the group is most likely to get famous?", dificultad: "general" },
{ id: 157, texto: "If you could live anywhere in the world, where would it be?", dificultad: "general" },
{ id: 158, texto: "Would you rather never be able to lie or never be able to tell the truth?", dificultad: "general" },
{ id: 159, texto: "If you were invisible for a day, what would you do?", dificultad: "general" },
{ id: 129, texto: "What's the most adventurous thing you've done in your life?", dificultad: "general" },
{ id: 130, texto: "If you could have any superpower, what would it be and why?", dificultad: "general" },

];

export default function Game() {
  const navigate = useNavigate();
  const [estadoJuego, setEstadoJuego] = useState(null);
  const [retoActual, setRetoActual] = useState(null);

  useEffect(() => {
    const dataGuardada = JSON.parse(localStorage.getItem("juego"));
    if (!dataGuardada) {
      navigate("/");
      return;
    }

    // Aseguramos que los puntos de cada jugador estén inicializados correctamente
    dataGuardada.jugadores.forEach(jugador => {
      if (jugador.puntos === undefined) {
        jugador.puntos = 0; // Inicializar puntos si no están definidos
      }
    });

    setEstadoJuego(dataGuardada);
    generarNuevoReto(dataGuardada);
  }, []);

  const obtenerPuntosPorDificultad = (dificultad) => {
    switch (dificultad) {
      case "easy":
        return 10;
      case "medium":
        return 20;
      case "hard":
        return 30;
      case "extreme":
        return 50;
      default:
        return 0;
    }
  };

  const generarNuevoReto = (estado) => {
    const jugador = estado.jugadores[estado.jugadorActual];
    const dificultadMax = jugador.dificultadMax;
  
    // Filtrar los retos disponibles, incluyendo los generales y la dificultad máxima del jugador
    const retosDisponibles = retos.filter((r) => {
      // Siempre incluir los retos de dificultad "general"
      if (r.dificultad === "general") {
        return !estado.retosPasados.includes(r.id);
      }
  
      // Incluir los retos cuya dificultad sea igual o inferior a la dificultad máxima del jugador
      switch (dificultadMax) {
        case "easy":
          return (r.dificultad === "easy" || r.dificultad === "general") && !estado.retosPasados.includes(r.id);
        case "medium":
          return (r.dificultad === "easy" || r.dificultad === "medium" || r.dificultad === "general") && !estado.retosPasados.includes(r.id);
        case "hard":
          return (r.dificultad === "easy" || r.dificultad === "medium" || r.dificultad === "hard" || r.dificultad === "general") && !estado.retosPasados.includes(r.id);
        case "extreme":
          return (r.dificultad === "easy" || r.dificultad === "medium" || r.dificultad === "hard" || r.dificultad === "extreme" || r.dificultad === "general") && !estado.retosPasados.includes(r.id);
        default:
          return false;
      }
    });
  
    // Si no hay retos disponibles, mostramos un mensaje indicando que se han agotado
    if (retosDisponibles.length === 0) {
      setRetoActual({
        texto: "No more challenges available 😅",
        dificultad: "none",
      });
      return;
    }
  
    // Seleccionar un reto aleatorio de los disponibles
    const reto = retosDisponibles[Math.floor(Math.random() * retosDisponibles.length)];
    setRetoActual(reto);
  };
  

  const pasarTurno = (aceptoReto) => {
    let nuevoEstado = { ...estadoJuego };
    const jugador = nuevoEstado.jugadores[nuevoEstado.jugadorActual];
    const puntosReto = obtenerPuntosPorDificultad(retoActual.dificultad);

    // Si el reto es "general", no se suman ni restan puntos
    if (retoActual.dificultad !== "general") {
      if (aceptoReto) {
        jugador.puntos += puntosReto; // Sumar puntos si se acepta el reto
      } else {
        jugador.puntos -= 10; // Restar puntos si se rechaza el reto
      }
    }

    nuevoEstado.retosPasados.push(retoActual.id);
    nuevoEstado.jugadorActual = (nuevoEstado.jugadorActual + 1) % nuevoEstado.jugadores.length;

    // Guardamos el estado actualizado
    setEstadoJuego(nuevoEstado);
    localStorage.setItem("juego", JSON.stringify(nuevoEstado));
    generarNuevoReto(nuevoEstado);
  };

  const obtenerJugadorConMasPuntos = () => {
    return estadoJuego.jugadores.reduce((prev, current) => {
      return prev.puntos > current.puntos ? prev : current;
    });
  };

  if (!estadoJuego || !retoActual) return null;

  const jugador = estadoJuego.jugadores[estadoJuego.jugadorActual];
  const jugadorConMasPuntos = obtenerJugadorConMasPuntos();

  // Definir los colores de fondo según la dificultad
  const coloresDificultad = {
    easy: "bg-green-300",
    medium: "bg-yellow-300",
    hard: "bg-orange-300",
    extreme: "bg-red-500",
    general: "bg-blue-500", // Azul para 'general'
  };

  const fondoReto = coloresDificultad[retoActual.dificultad] || "bg-gray-500"; // Default color

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Player Turn 🎲</h2>
      <p className="text-2xl mb-2">{jugador.nombre}</p>

      <div className={`text-black rounded-xl shadow-lg p-6 w-full max-w-md mt-6 ${fondoReto}`}>
        <h3 className="text-lg font-semibold text-purple-600 mb-2 uppercase">
          Challenge
        </h3>
        <p className="text-xl">{retoActual.texto}</p>
      </div>

      <div className="mt-4">
        <button
          onClick={() => pasarTurno(true)} // Aceptar reto
          className="mr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition"
        >
          Accept ✅
        </button>

        <button
          onClick={() => pasarTurno(false)} // Rechazar reto
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition"
        >
          Reject ❌
        </button>
      </div>

      <div className="mt-6 text-lg text-yellow-400 font-semibold">
        <p>Current Leader: {jugadorConMasPuntos.nombre} 🏆</p>
        <p>{jugadorConMasPuntos.nombre} has {jugadorConMasPuntos.puntos} points</p>
      </div>
    </div>
  );
}
