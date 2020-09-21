# Educational Game App

This project was my first group assignment at the end of the JavaScript section of my Software Development course at CodeClan. Our team of three opted for combining two of the available briefs ('Educational App' and 'Browser Game') to create an educational browser game that teaches the numbers 1-10 in the Scottish Gaelic language in a fun and interactive way. The app is a variation of the Uno card game and has two main feature pages: a preparational quiz and the game page itself. The game page, where the user plays against the app, utilizes Celtic visual patterns for the design of the cards, which display the Gaelic words for the numbers rather than digits. The quiz page has two sections: a cloud displaying the words for the numbers and an area of input fields for testing knowledge of them. The words in the numbers cloud are displayed in a randomized way, so as not to make the correct input for the testing section obvious. When hovering over each word in the cloud, the user hears the pronounciation of the particular number in Gaelic. The testing section lists input fields for the ten numbers and a 'check' button for each that plays the corresponding Gaelic word if the input is correct or a 'mistake' sound otherwise. My focus in the project was on the quiz page as I volunteered to implement there some of the strategies I had used previously in my career as a language teacher. I also did some work on the persisting of the initial data in the database, as well as contributing to the overall CSS styling. The app was built using VueJS for the front end, EspressJS for the server side and MongoDB for the database. 

## Prerequisites

* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/try/download/community)

## How To Run

* Start the MongoDB server:

```
$ mongod
```

* (In a new terminal) Inside the server folder:

```
$ npm run seeds
```

```
$ npm install
```

```
$ npm run server:dev
```

* (In a new terminal) Inside the client folder:

```
$ npm install
```

```
$ npm run dev
```

## Authors

* **[Stan Tarnev](https://github.com/StanTarnev)**
* **[Adam Hidvegi](https://github.com/AdamHidvegi)**
* **[Aurimas Drungilas](https://github.com/aurimas-drungilas)**


