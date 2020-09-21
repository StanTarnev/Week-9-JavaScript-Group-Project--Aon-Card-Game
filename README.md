# Educational Game App

This project was my second solo assignment during the JavaScript section of my Software Development course at CodeClan. The task was to create an application that makes a request to a web API and displays the data. The minimum viable product included displaying data from an API request, the application having a clear separation of concerns, i.e. using multiple components, and taking input from the user to update the page. Also, as I encountered the CORS origin issue when fetching the data from the API, I modified the code to add a server to the app, through which I rerouted the fetch call to ensure that the resource accessed through the API endpoint was loaded consistently. Additionally, as the endpoint only returned 100 objects at a time, I refactored the initial request to fetch the desired set of 500+ objects the API provides. The objective of the assignment was to demonstrate understanding of how to create a multi-component web application from scratch, and how to make API requests to load JSON data into the app. It was built using VueJS, plus the added ExpressJS server, as well as CSS for the styling.

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


