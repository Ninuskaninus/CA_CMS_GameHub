import { getGames } from "./gamelist.js";

getGames().then((games) => {
  const gamesContainer = document.querySelector('.gamesGrid1');
  let numDisplayed = 6;

  for (let i = 0; i < numDisplayed; i++) {
    const game = games[i];

    const gameItem = document.createElement('div');
    gameItem.classList.add('gamesItem');

    const gameImg = document.createElement('img');
    gameImg.classList.add('gamesImg');
    gameImg.src = game.largePicture;
    gameImg.alt = game.name;

    const gameInfo = document.createElement('div');
    gameInfo.classList.add('gamesInfo');

    const gameYear = document.createElement('p');
    gameYear.classList.add('gamesYear');
    gameYear.textContent = game.year;

    const gameName = document.createElement('p');
    gameName.classList.add('gamesName');
    gameName.textContent = game.name;

    const gamePrice = document.createElement('p');
    gamePrice.classList.add('gamesPrice');
    gamePrice.textContent = '$' + game.price;

    
    const gameCategoryBtn = document.createElement('p');
    gameCategoryBtn.classList.add('buttonChategory');
    gameCategoryBtn.textContent = game.categories.join(", ");

    gameItem.addEventListener('click', function () {
      window.location.href = 'gamepreview.html?id=' + game.id;
    });

    gameInfo.appendChild(gameYear);
    gameInfo.appendChild(gameName);
    gameInfo.appendChild(gamePrice);
    gameInfo.appendChild(gameCategoryBtn);

    gameItem.appendChild(gameImg);
    gameItem.appendChild(gameInfo);

    gamesContainer.appendChild(gameItem);
  }

const featuredGameIndex = games.findIndex(game => game.featured);
const heroIndex = document.querySelector('.heroIndex');

const style = document.createElement('style');
document.head.appendChild(style);

const rule = `.heroIndex::after { background-image: url('${games[featuredGameIndex].largePicture}'); }`;
style.sheet.insertRule(rule);

  const heroContainer = document.querySelector('.heroContainer');
  const gameName = document.querySelector('#gameName');
  gameName.textContent = games[featuredGameIndex].name;
  
  games[featuredGameIndex].categories.forEach((category) => {
    const ctgContainer = document.querySelector(".gamesCtg");
    const gamesCtg = document.createElement("p");
    gamesCtg.classList.add("buttonChategory");
    gamesCtg.textContent = category;
    ctgContainer.appendChild(gamesCtg);
  });
  
  const gameDes = document.querySelector('.heroText');
  gameDes.textContent = games[featuredGameIndex].description;
  
  const gamePriceBtn = document.querySelector('.button2');
  gamePriceBtn.textContent = 'Buy for' + ' ' + '$' + games[featuredGameIndex].price;
  gamePriceBtn.href = 'gamepreview.html?id=' + games[featuredGameIndex].id;
  
  console.log(heroIndexStyle);
  console.log(`largePicture = ${games[featuredGameIndex].largePicture}`);

  const searchInput = document.getElementById('search');
  const form = document.querySelector('.searchForm');

  form.addEventListener('submit', (event) => {
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




