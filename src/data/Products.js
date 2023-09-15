export const products = [
  {
    id: 1,
    title: "Conjunto Deportivo",
    price: "1500",
    category: "hombre",
    img: "./conjuntodeportivo.png",
  },

  {
    id: 2,
    title: "Franelillas",
    price: "500",
    category: "hombre",
    img: "./franelilla.png",
  },
  {
    id: 3,
    title: "Franela 100% Algodon",
    price: "800",
    category: "hombre",
    img: "./franela100.png",
  },
  {
    id: 4,
    title: "Camisa Poliester",
    price: "500",
    category: "hombre",
    img: "./camisapoliester.png",
  },

  {
    id: 5,
    title: "Calza Dama",
    price: "1500",
    category: "dama",
    img: "./calzadama.png",
  },
  {
    id: 6,
    title: "Remera Dama",
    price: "500",
    category: "dama",
    img: "./remeradama.png",
  },
  {
    id: 7,
    title: "Top Dama",
    price: "1500",
    category: "dama",
    img: "./topdama.png",
  },
  {
    id: 8,
    title: "Campera Dama",
    price: "2500",
    category: "dama",
    img: "./camperadama.png",
  },
  {
    id: 9,
    title: "Campera Niño",
    price: "1500",
    category: "niño",
    img: "./camperaniño.png",
  },
  {
    id: 10,
    title: "Jogger Dama",
    price: "500",
    category: "dama",
    img: "./joggerdama.png",
  },
  {
    id: 11,
    title: "Mochila Dama",
    price: "3500",
    category: "dama",
    img: "./mochiladama.png",
  },
  {
    id: 12,
    title: "Chaqueta Impermeable",
    price: "1200",
    category: "hombre",
    img: "./chaquetaimpermeable.png",
  },
  {
    id: 13,
    title: "Uniforme Deportivo",
    price: "2000",
    category: "hombre",
    img: "./uniformedeportivo.png",
  },
  {
    id: 14,
    title: "Jogger Caballero",
    price: "1000",
    category: "hombre",
    img: "./jogger.png",
  },
  {
    id: 15,
    title: "Mochila Niño",
    price: "3500",
    category: "niño",
    img: "./mochilaniño.png",
  },

  {
    id: 16,
    title: "Buzo Niño",
    price: "1500",
    category: "niño",
    img: "./buzoniño.png",
  },
  {
    id: 17,
    title: "Jogger Niño",
    price: "1500",
    category: "niño",
    img: "./joggerniño.png",
  },
  {
    id: 18,
    title: "Musculosa Niño",
    price: "1500",
    category: "niño",
    img: "./musculosaniño.png",
  },
  {
    id: 19,
    title: "Gorra Niño",
    price: "3500",
    category: "niño",
    img: "./gorraniño.png",
  },
  {
    id: 20,
    title: "Remeron Dama",
    price: "500",
    category: "dama",
    img: "./remerondama.png",
  },
  {
    id: 21,
    title: "Buzo Dama",
    price: "4500",
    category: "dama",
    img: "./buzodama.png",
  },
  {
    id: 22,
    title: "Lenceria Dama",
    price: "500",
    category: "dama",
    img: "./lenceriadama.png",
  },
  {
    id: 23,
    title: "Musculosa Dama",
    price: "2500",
    category: "dama",
    img: "./musculosadama.png",
  },
  {
    id: 24,
    title: "Boxers",
    price: "500",
    category: "hombre",
    img: "./ropainteriorhombre.png",
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
