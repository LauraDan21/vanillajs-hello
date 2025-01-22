// Lista de excusas
const who = [
  'The dog', 
  'My grandma', 
  'The mailman', 
  'My bird'
];

const action = [
  'ate', 
  'peed', 
  'crushed', 
  'broke'
];

const what = [
  'my homework', 
  'my phone', 
  'the car'
];

const when = [
  'before the class', 
  'when I was sleeping', 
  'while I was exercising', 
  'during my lunch', 
  'while I was praying'
];

// Función para generar una excusa aleatoria

function generateExcuse() {
  const randomwho = who[Math.floor(Math.random() * who.length)];
  const randomaction = action[Math.floor(Math.random() * action.length)];
  const randomwhat = what[Math.floor(Math.random() * what.length)];
  const randomwhen = when[Math.floor(Math.random() * when.length)];

// Concatenar las partes de la excusa
  const excuse = `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;

  document.getElementById("excuse").textContent = excuse;
}

// generar la excusa al cargar la página
window.onload = generateExcuse;