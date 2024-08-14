// array de juegos
class juego {
  constructor(titulo, genero, calificacion, precio) {
    this.titulo = titulo;
    this.genero = genero;
    this.calificacion = calificacion;
    this.precio = precio;
  }
}

const juego1 = new juego("The Last of Us", "Acción-Aventura", 9.5, 50);
const juego2 = new juego("Minecraft", "Sandbox", 9.0, 30);
const juego3 = new juego("Grand Theft Auto V", "Acción-Aventura", 9.5, 60);
const juego4 = new juego("Tetris", "Puzzle", 8.5, 10);
const juego5 = new juego(
  "The Legend of Zelda: Breath of the Wild",
  "Acción-Aventura",
  9.5,
  60
);
const juego6 = new juego(
  "PlayerUnknown's Battlegrounds",
  "Battle Royale",
  8.5,
  30
);
const juego7 = new juego("Super Mario Odyssey", "Plataformas", 9.0, 50);
const juego8 = new juego("The Elder Scrolls V: Skyrim", "RPG", 9.0, 40);
const juego9 = new juego("Fortnite", "Battle Royale", 8.0, 20);
const juego10 = new juego("Resident Evil 7: Biohazard", "Terror", 9.0, 50);

const juegos = [
  juego1,
  juego2,
  juego3,
  juego4,
  juego5,
  juego6,
  juego7,
  juego8,
  juego9,
  juego10,
];
// mostrar los juegos
function filtrarJuegos(juegos, buscar) {
  return juegos.filter(
    (juego) =>
      juego.titulo.toLowerCase().includes(buscar.toLowerCase()) ||
      juego.genero.toLowerCase().includes(buscar.toLowerCase())
  );
}

const buscar = prompt("Ingrese el título o género del juego que busca:");
const resultados = filtrarJuegos(juegos, buscar);

if (resultados.length > 0) {
  alert("Juegos encontrados:");
  resultados.forEach((juego) => {
    alert(
      `Título: ${juego.titulo} - Género: ${juego.genero} - Precio: $${juego.precio}`
    );
  });
} else {
  alert("No se encontraron juegos con ese título o género.");
}
// de dolar a pesos
const Iva = 0.21;
const pais = 0.08;
const ganacias = 0.3;
let pesos0 = 0;
let pesos1 = 0;
let pesos2 = 0;

function convertirDolaresAPesos(precioUSD, valorDolar, Iva, pais, ganacias) {
  let precioARS = precioUSD * valorDolar;

  precioARS += precioARS * Iva;
  precioARS += precioARS * pais;
  precioARS += precioARS * ganacias;
  return precioARS;
}

let opcion = prompt("¿cuantos precios desea convertir?(1 ò 2)");
if (opcion == 1) {
  let precioJuego0 = parseFloat(prompt("Ingrese el precio en dolares"));
  let valorDolar = parseFloat(prompt("ingrese el valor de USD en ARS"));
  pesos0 = convertirDolaresAPesos(
    precioJuego0,
    valorDolar,
    Iva,
    pais,
    ganacias
  );
  alert(`"el precio del  juego en ARS es: $"${pesos0.toFixed(2)}`);
} else if (opcion == 2) {
  let precioJuego1 = parseFloat(prompt("ingrese el precio del juego en usd"));
  let precioJuego2 = parseFloat(
    prompt("ingrese el precio del  segundo juego en usd")
  );
  let valorDolar = parseFloat(prompt("ingrese el valor de USD en ARS"));
  pesos1 = convertirDolaresAPesos(
    precioJuego1,
    valorDolar,
    Iva,
    pais,
    ganacias
  );
  pesos2 = convertirDolaresAPesos(
    precioJuego2,
    valorDolar,
    Iva,
    pais,
    ganacias
  );
  alert(`"el precio del primer juego en ARS es: $"${pesos1.toFixed(2)}`);
  alert(`"el precio del segundo juego en ARS es:$"${pesos2.toFixed(2)}`);
} else {
  alert("no desea convierte de dolar a pesos ");
}
// buscar el menor precio
// Steam
class juegoSteam {
  constructor(titulo, genero, calificacion, precio) {
    this.titulo = titulo;
    this.genero = genero;
    this.calificacion = calificacion;
    this.precio = precio;
  }
}

const JuegoSteam1 = new juegoSteam("Fortnite", "Battle Royale", 8.5, 0);
const JuegoSteam2 = new juegoSteam("Minecraft", "Sandbox", 9.0, 30);
const JuegoSteam3 = new juegoSteam(
  "PlayerUnknown's Battlegrounds",
  "Battle Royale",
  8.5,
  30
);
const JuegoSteam4 = new juegoSteam("Rocket League", "Deportes", 8.5, 20);
const JuegoSteam5 = new juegoSteam(
  "Tom Clancy's Rainbow Six Siege",
  "Disparos en Primera Persona",
  9.0,
  40
);
const JuegoSteam6 = new juegoSteam(
  "Overwatch",
  "Disparos en Primera Persona",
  9.0,
  40
);
const JuegoSteam7 = new juegoSteam("Apex Legends", "Battle Royale", 8.5, 0);
const JuegoSteam8 = new juegoSteam(
  "Call of Duty: Modern Warfare",
  "Disparos en Primera Persona",
  9.0,
  60
);
const JuegoSteam9 = new juegoSteam(
  "Assassin's Creed Odyssey",
  "Acción-Aventura",
  9.0,
  60
);
const JuegoSteam10 = new juegoSteam(
  "The Elder Scrolls V: Skyrim",
  "RPG",
  9.5,
  30
);

const ListJuegoSteam = [
  JuegoSteam1,
  JuegoSteam2,
  JuegoSteam3,
  JuegoSteam4,
  JuegoSteam5,
  JuegoSteam6,
  JuegoSteam7,
  JuegoSteam8,
  JuegoSteam9,
  JuegoSteam10,
];

// Microsoft
class juegoMicrosoft {
  constructor(titulo, genero, calificacion, precio) {
    this.titulo = titulo;
    this.genero = genero;
    this.calificacion = calificacion;
    this.precio = precio;
  }
}
const juegoMicrosoft1 = new juegoMicrosoft("Fortnite", "Battle Royale", 8.5, 0);
const juegoMicrosoft2 = new juegoMicrosoft("Minecraft", "Sandbox", 9.0, 30);
const juegoMicrosoft3 = new juegoMicrosoft(
  "PlayerUnknown's Battlegrounds",
  "Battle Royale",
  8.5,
  30
);
const juegoMicrosoft4 = new juegoMicrosoft(
  "Rocket League",
  "Deportes",
  8.5,
  20
);
const juegoMicrosoft5 = new juegoMicrosoft(
  "Tom Clancy's Rainbow Six Siege",
  "Disparos en Primera Persona",
  9.0,
  40
);
const juegoMicrosoft6 = new juegoMicrosoft(
  "Overwatch",
  "Disparos en Primera Persona",
  9.0,
  40
);
const juegoMicrosoft7 = new juegoMicrosoft(
  "Apex Legends",
  "Battle Royale",
  8.5,
  0
);
const juegoMicrosoft8 = new juegoMicrosoft(
  "Call of Duty: Modern Warfare",
  "Disparos en Primera Persona",
  9.0,
  60
);
const juegoMicrosoft9 = new juegoMicrosoft(
  "Assassin's Creed Odyssey",
  "Acción-Aventura",
  9.0,
  60
);
const juegoMicrosoft10 = new juegoMicrosoft(
  "The Elder Scrolls V: Skyrim",
  "RPG",
  9.5,
  30
);

const ListjuegosMicrosoft = [
  juegoMicrosoft1,
  juegoMicrosoft2,
  juegoMicrosoft3,
  juegoMicrosoft4,
  juegoMicrosoft5,
  juegoMicrosoft6,
  juegoMicrosoft7,
  juegoMicrosoft8,
  juegoMicrosoft9,
  juegoMicrosoft10,
];

// EPic Game
class juegoEpicGame {
  constructor(titulo, genero, calificacion, precio) {
    this.titulo = titulo;
    this.genero = genero;
    this.calificacion = calificacion;
    this.precio = precio;
  }
}

const juegosEpicGames1 = new juegoEpicGame("Fortnite", "Battle Royale", 8.5, 0);
const juegosEpicGames2 = new juegoEpicGame("Minecraft", "Sandbox", 9.0, 30);
const juegosEpicGames3 = new juegoEpicGame(
  "PlayerUnknown's Battlegrounds",
  "Battle Royale",
  8.5,
  30
);
const juegosEpicGames4 = new juegoEpicGame(
  "Rocket League",
  "Deportes",
  8.5,
  20
);
const juegosEpicGames5 = new juegoEpicGame(
  "Tom Clancy's Rainbow Six Siege",
  "Disparos en Primera Persona",
  9.0,
  40
);
const juegosEpicGames6 = new juegoEpicGame(
  "Overwatch",
  "Disparos en Primera Persona",
  9.0,
  39
);
const juegosEpicGames7 = new juegoEpicGame(
  "Apex Legends",
  "Battle Royale",
  8.5,
  0
);
const juegosEpicGames8 = new juegoEpicGame(
  "Call of Duty: Modern Warfare",
  "Disparos en Primera Persona",
  9.0,
  60
);
const juegosEpicGames9 = new juegoEpicGame(
  "Assassin's Creed Odyssey",
  "Acción-Aventura",
  9.0,
  60
);
const juegosEpicGames10 = new juegoEpicGame(
  "The Elder Scrolls V: Skyrim",
  "RPG",
  9.5,
  30
);

const ListjuegosEpicGame = [
  juegosEpicGames1,
  juegosEpicGames2,
  juegosEpicGames3,
  juegosEpicGames4,
  juegosEpicGames5,
  juegosEpicGames6,
  juegosEpicGames7,
  juegosEpicGames8,
  juegosEpicGames9,
  juegosEpicGames10,
];

// para buscar los juegos de distintas platafrmas
filtrarJuegosPorgenero
const juegosConPrecioMinimo = (juegosFiltrados) => {
  return juegosFiltrados.map((juego) => {
    const precios = [
      ListjuegosEpicGame.find((juegoEpic) => juegoEpic.titulo === juego.titulo)?.precio,
      ListJuegoSteam.find((juegoSteam) => juegoSteam.titulo === juego.titulo)?.precio,
      ListjuegosMicrosoft.find((juegoMicrosoft) => juegoMicrosoft.titulo === juego.titulo)?.precio,
    ].filter((precio) => precio !== undefined);
    const precioMinimo = Math.min(...precios);
    return { nombre: juego.titulo, precioMinimo };
  });
};

// Función para filtrar juegos por género en diferentes plataformas
function filtrarJuegosPorgenero(genero) {
  const juegosFiltrados = [...ListJuegoSteam, ...ListjuegosMicrosoft, ...ListjuegosEpicGame]
    .filter((juego) => juego.genero.toLowerCase().includes(genero.toLowerCase()));
  return juegosFiltrados;
}

// Llamar a las funciones
const genero = prompt("Ingrese un género");
const juegosFiltrados = filtrarJuegosPorgenero(genero);
const juegosConMinimoPrecio = juegosConPrecioMinimo(juegosFiltrados);
juegosConMinimoPrecio.forEach((juego) => {
  console.log(`El precio más económico para ${juego.nombre} es: $${juego.precioMinimo} ARS`);
});
