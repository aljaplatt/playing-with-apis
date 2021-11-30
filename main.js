let p = document.querySelector("#quote");
let author = document.querySelector(".author");
let clickButton = document.querySelector("#clickButton");
let fav = document.querySelector("#fav");
let ol = document.querySelector("ol");

let data;
let newLi;

async function fetchAPI() {
  let response = await fetch(
    "https://programming-quotes-api.herokuapp.com/Quotes/random"
  );
  console.log(response);

  data = await response.json();

  console.log(data);

  getQuote();
}

fetchAPI();

function getQuote() {
  p.innerText = data.en;
  author.innerText = data.author;
}

clickButton.addEventListener("click", fetchAPI);

function addFavQuote() {
  newLi = document.createElement("li");
  newLi.innerText = p.innerText;
  ol.appendChild(newLi);
  console.log(newLi);
}

fav.addEventListener("click", addFavQuote);
