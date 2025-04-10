// prendiamo gli elementi dal documento

const nameEL = document.getElementById("name-input");
const distanceEL = document.getElementById("distance-input");
const agedeEL = document.getElementById("age-input");
const buttonEL = document.getElementById("button-input");
const forumregisteredEL = document.getElementById("forum-person");

// elementi da inserire

const passengerName = document.getElementsByClassName("name-pass");
const priceType = document.getElementsByClassName("typeofTarif");
const vagonNumber = document.getElementsByClassName("vagon-number");
const codeCp = document.getElementsByClassName("code-cp");
const finalPrice = document.getElementsByClassName("price-final");

// ascolto l'invio del forum
forumregisteredEL.addEventListener("submit", (e) => {
  // evito il reloaded
  e.preventDefault();

  // leggiamo i valori

  const name = nameEL.value;
  const distance = parseInt(distanceEL.value);
  const age = agedeEL.value;
  const button = buttonEL.value;

  // console

  console.log("nome ", name);
  console.log("distanza ", distance);
  console.log("age ", age);
  console.log("bottone ", button);

  //  calcolo prezzo biglietto

  const price = distance * 0.21;
  const tarifyoung = price - (price * 20) / 100;
  const tarifold = price - (price * 40) / 100;

  console.log("costo ", price);
  console.log("costo young ", tarifyoung);
  console.log("costo old ", tarifold);

  if (age > 65) {
    tarifold.toFixed(2);
  } else if (age < 18) {
    tarifyoung.toFixed(2);
  } else price.toFixed(2);

  // inserisco nel biglietto
});
