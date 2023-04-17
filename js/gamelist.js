const url = "https://wildflowerpower.no/wp-json/wc/v3/products";
const consumerKey = "ck_e4feb2cb291ac4383bf5a811ee7affe31baca164";
const consumerSecret = "cs_058bb30d4eecb248b6a3100f05be123ac861315e";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
  },
};

function loadGames() {
  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const games = data.map((product) => {
      const description = product.description.replace(/<\/?[^>]+(>|$)/g, "");
        
        return {
          name: product.name,
          year: product.date_created.substring(0, 4),
          smallPicture: product.images[0].src,
          largePicture: product.images[1].src,
          price: product.price,
          description: description,
          categories: product.categories.map((category) => category.name),
          id: product.id,
          featured: product.featured
        };
      });
      
      return games;
    })
    .catch((error) => console.error(error));
}



export function getGames() {
  return loadGames();
}
