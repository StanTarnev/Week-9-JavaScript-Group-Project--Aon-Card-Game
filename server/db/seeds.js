use game;
db.dropDatabase();

db.Cards.insertMany([
  {
    id: 1,
    colour: "blue",
    number: 1,
    front_url: 'http://localhost:3000/images/blue1.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 2,
    colour: "blue",
    number: 2,
    front_url: 'http://localhost:3000/images/blue2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 3,
    colour: "blue",
    number: 3,
    front_url: 'http://localhost:3000/images/blue3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 4,
    colour: "blue",
    number: 4,
    front_url: 'http://localhost:3000/images/blue4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 5,
    colour: "blue",
    number: 5,
    front_url: 'http://localhost:3000/images/blue5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 6,
    colour: "blue",
    number: 6,
    front_url: 'http://localhost:3000/images/blue6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 7,
    colour: "blue",
    number: 7,
    front_url: 'http://localhost:3000/images/blue7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 8,
    colour: "blue",
    number: 8,
    front_url: 'http://localhost:3000/images/blue8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 9,
    colour: "blue",
    number: 9,
    front_url: 'http://localhost:3000/images/blue9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 10,
    colour: "blue",
    number: 10,
    front_url: 'http://localhost:3000/images/blue10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 11,
    colour: "red",
    number: 1,
    front_url: 'http://localhost:3000/images/red10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 12,
    colour: "red",
    number: 2,
    front_url: 'http://localhost:3000/images/red2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 13,
    colour: "red",
    number: 3,
    front_url: 'http://localhost:3000/images/red3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 14,
    colour: "red",
    number: 4,
    front_url: 'http://localhost:3000/images/red4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 15,
    colour: "red",
    number: 5,
    front_url: 'http://localhost:3000/images/red5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 16,
    colour: "red",
    number: 6,
    front_url: 'http://localhost:3000/images/red6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 17,
    colour: "red",
    number: 7,
    front_url: 'http://localhost:3000/images/red7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 18,
    colour: "red",
    number: 8,
    front_url: 'http://localhost:3000/images/red8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 19,
    colour: "red",
    number: 9,
    front_url: 'http://localhost:3000/images/red9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 20,
    colour: "red",
    number: 10,
    front_url: 'http://localhost:3000/images/red10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 21,
    colour: "green",
    number: 1,
    front_url: 'http://localhost:3000/images/green1.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 22,
    colour: "green",
    number: 2,
    front_url: 'http://localhost:3000/images/green2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 23,
    colour: "green",
    number: 3,
    front_url: 'http://localhost:3000/images/green3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 24,
    colour: "green",
    number: 4,
    front_url: 'http://localhost:3000/images/green4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 25,
    colour: "green",
    number: 5,
    front_url: 'http://localhost:3000/images/green5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 26,
    colour: "green",
    number: 6,
    front_url: 'http://localhost:3000/images/green6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 27,
    colour: "green",
    number: 7,
    front_url: 'http://localhost:3000/images/green7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 28,
    colour: "green",
    number: 8,
    front_url: 'http://localhost:3000/images/green8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 29,
    colour: "green",
    number: 9,
    front_url: 'http://localhost:3000/images/green9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 30,
    colour: "green",
    number: 10,
    front_url: 'http://localhost:3000/images/green10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 31,
    colour: "yellow",
    number: 1,
    front_url: 'http://localhost:3000/images/yellow1.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 32,
    colour: "yellow",
    number: 2,
    front_url: 'http://localhost:3000/images/yellow2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 33,
    colour: "yellow",
    number: 3,
    front_url: 'http://localhost:3000/images/yellow3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 34,
    colour: "yellow",
    number: 4,
    front_url: 'http://localhost:3000/images/yellow4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 35,
    colour: "yellow",
    number: 5,
    front_url: 'http://localhost:3000/images/yellow5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 36,
    colour: "yellow",
    number: 6,
    front_url: 'http://localhost:3000/images/yellow6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 37,
    colour: "yellow",
    number: 7,
    front_url: 'http://localhost:3000/images/yellow7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 38,
    colour: "yellow",
    number: 8,
    front_url: 'http://localhost:3000/images/yellow8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 39,
    colour: "yellow",
    number: 9,
    front_url: 'http://localhost:3000/images/yellow9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 40,
    colour: "yellow",
    number: 10,
    front_url: 'http://localhost:3000/images/yellow10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
]);
