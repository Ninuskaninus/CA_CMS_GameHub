import { getGames } from "./gamelist.js";

async function init() {
  const games = await getGames();
  const gameId = parseInt(new URLSearchParams(window.location.search).get("id"));
  const selectedGame = games.find(game => game.id === gameId);

  console.log(selectedGame);
  

  document.title = "Gamehub –" + " " + selectedGame.name;

  const heroPreview = document.querySelector(".heroPreview");
  heroPreview.style.backgroundImage = `url(${selectedGame.largePicture})`;
  heroPreview.style.backgroundSize = "cover";
  heroPreview.style.backgroundPosition = "top";

  const heroContainerPreview = document.querySelector(".heroCointainer");
  const heroChategory = document.querySelector(".heroChategory");

  selectedGame.categories.forEach((category) => {
    const categoryElem = document.createElement("p");
    categoryElem.textContent = category;
    categoryElem.classList.add("buttonChategory");
    heroChategory.appendChild(categoryElem);
  });

  

  const previewImgs = document.querySelectorAll(".previewImg");
  previewImgs.forEach((previewImg, i) => {
    previewImg.src = selectedGame.smallPicture;
    previewImg.alt = selectedGame.name;
  });

  const heroHeading = document.querySelector("#heroHeading");
  heroHeading.textContent = selectedGame.name;

  const previewText = document.querySelector(".containerText");
  previewText.textContent = selectedGame.description;

  const heroBtnContainer = document.querySelector(".containerBtn");
  const heroBtn = document.querySelector(".button2");
  heroBtn.textContent = `Buy for $${selectedGame.price}`;
  heroBtn.href = "gamebuy.html?id=" + selectedGame.id;
}

init();
