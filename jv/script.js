// prendiamo gli elementi dal documento

const nameEL = document.getElementById("name-input");
const distanceEL = document.getElementById("distance-input");

const buttonEL = document.getElementById("button-input");
const forumregisteredEL = document.getElementById("forum-person");
const typeAgeEl = document.getElementById("inputGroupSelect01");

// elementi da inserire

const passengerName = document.getElementById("name-pass");
const priceType = document.getElementById("typeofTarif");
const vagonNumber = document.getElementById("vagon-number");
const codeCp = document.getElementById("code-cp");
const finalPrice = document.getElementById("price-final");
const ticketAdd = document.getElementById("card-ticket");
// ascolto l'invio del forum
forumregisteredEL.addEventListener("submit", (e) => {
  // evito il reloaded
  e.preventDefault();

  // leggiamo i valori

  const name = nameEL.value;
  const distance = parseInt(distanceEL.value);

  const typeAge = typeAgeEl.value;
  const button = buttonEL.value;

  // console

  console.log("nome ", name);
  console.log("distanza ", distance);

  console.log("type age ", typeAge);
  console.log("bottone ", button);

  //  calcolo prezzo biglietto

  let price = distance * 0.21;
  const tarifyoung = price - (price * 20) / 100;
  const tarifold = price - (price * 40) / 100;
  let typeOfprice = "Tariffa Standard";

  //   console log
  console.log("costo ", price);
  console.log("costo young ", tarifyoung);
  console.log("costo old ", tarifold);

  if (typeAge == 3) {
    price = tarifold.toFixed(2);
    typeOfprice = "Tariffa Over 65";
  } else if (typeAge == 2) {
    price = tarifyoung.toFixed(2);
    typeOfprice = "Tariffa Under 18";
  } else price.toFixed(2);
  typeOfprice;

  //   faccio comparire il biglietto
  ticketAdd.classList.remove("d-none");

  // inserisco nel biglietto

  passengerName.innerText = `${name}`;
  priceType.innerText = `${typeOfprice}`;
  vagonNumber.innerText = `Carrozza: ${Math.floor(Math.random() * 10)}`;
  codeCp.innerText = `Codice CP: ${Math.floor(Math.random() * 1000)}`;
  finalPrice.innerText = `costo: ${price} €`;
});
