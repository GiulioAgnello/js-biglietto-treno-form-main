// prendiamo gli elementi dal documento

const nameEL = document.getElementById("name-input");
const distanceEL = document.getElementById("distance-input");
const buttonEL = document.getElementById("button-input");
const forumregisteredEL = document.getElementById("forum-person");

// ascolto l'invio del forum
forumregisteredEL.addEventListener("submit", (e) => {
  // evito il reloaded
  e.preventDefault();

  // leggiamo i valori

  const name = nameEL.value;
  const distance = distanceEL.value;
  const button = buttonEL.value;

  // console

  console.log("nome ", name);
  console.log("distanza ", distance);
  console.log("bottone ", button);
});
