import { getGames } from "./gamelist.js";

getGames().then((games) => {

  const gamesContainer = document.querySelector(".gamesGrid2");
  let numDisplayed = 3;

  console.log(games);

  for (let i=0; i < games.length; i++){
      const game = games[i];

      const gameItem = document.createElement("div");
      gameItem.classList.add("gamesItem");

      const gameImg = document.createElement("img");
      gameImg.classList.add("gamesImg");
      gameImg.src = game.largePicture;
      gameImg.alt = game.name;

      const gameInfo = document.createElement("div");
      gameInfo.classList.add("gamesInfo");

      const gameYear = document.createElement("p");
      gameYear.classList.add("gamesYear");
      gameYear.textContent = game.year;

      const gameName = document.createElement("p");
      gameName.classList.add("gamesName");
      gameName.textContent = game.name;

      const gamePrice = document.createElement("p");
      gamePrice.classList.add("gamesPrice");
      gamePrice.textContent = "$" + game.price;

      const gameCategoryBtns = document.createElement('p');
      gameCategoryBtns.classList.add('buttonChategory');
      gameCategoryBtns.textContent = game.categories.join(", ");;


      gameItem.addEventListener("click", function() {
          window.location.href = "gamepreview.html?id=" + game.id;
      });

      gameInfo.appendChild(gameYear);
      gameInfo.appendChild(gameName);
      gameInfo.appendChild(gamePrice);
      gameInfo.appendChild(gameCategoryBtns);
      gameItem.appendChild(gameImg);
      gameItem.appendChild(gameInfo);
      gamesContainer.appendChild(gameItem);
  };


  const featuredGameIndex = games.findIndex (game => game.featured);
  const heroContainer = document.querySelector(".heroContainer");
  for (let i=0; i < games.length; i++){
      const game = games[i];

      const heroHeading = document.querySelector("#heroHeading");
      heroHeading.textContent = games[featuredGameIndex].name;

      const heroBtn = document.querySelector(".button2");
      heroBtn.textContent = "Buy for" + " " + "$" + games[featuredGameIndex].price;
      heroBtn.href = "gamepreview.html?id=" + games[featuredGameIndex].id;
  };

  games[featuredGameIndex].categories.forEach((category) => {
    const ctgContainer = document.querySelector(".gamesCtg");
    const gamesCtg = document.createElement("p");
    gamesCtg.classList.add("buttonChategory");
    gamesCtg.textContent = category;
    ctgContainer.appendChild(gamesCtg);
  });

  const searchInput = document.getElementById("search");
  const form = document.querySelector(".searchForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const searchTerm = searchInput.value.toLowerCase();
    const matchingGame = games.find((game) =>
      game.name.toLowerCase().includes(searchTerm)
    );

    if (matchingGame) {
      const gameId = matchingGame.id;
      window.location.href = `gamepreview.html?id=${gameId}`;
    }
  });

});
