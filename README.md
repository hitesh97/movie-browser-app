# Movie Browser App Challange

## Introduction

This implmentation of the movie-browser-app meets all the requirements mentioned in the requirement document.

- To see full requirement of this test, [visit here](https://github.com/zone/frontend/blob/master/challenges/movie-listings.md)

- Added comments where appropriate

This application is a simple React App which calls following APIs ONCE at the begning of the page load.

- [TMDb Movies Now Playing API][tmdb-now-playing]
- [TMDb Movie genres API][tmdb-genres]
- [TMDb Image API][tmdb-images]

-Lists the movies by Popularity in descending order

- You can filter the movies by:

  - One more more genres (OR comparision for mutliple genres)
  - Rating of the movie
  - Filters can be applied together to make narrow down the movies you are looking for!

## Special implementation ( it says have fun!! :))

I implemented 'infinite scroll' for paging!! as I feel paging with page number links wouldn't be great user expeirnece for Movie browsing app!!

- So scroll away when you want to load more movies!! and the application will make calls to next page !

## About this project

This project was uses :

- Create-react-app for basic boiler-plate code
- Bootstrap for simple styling
- React-bootstrap for some responsive grid
- Roboto Font
- React-Redux for state management

## How to run this project

- Step 1:
  - Checkout this repo
- Step 2:
  - Run `npm install` or `yarn install` (if you have yarn installed)
- strep 3:
  - Run `npm start` to start the application in Development mode
- Run `npm build` to make production build for deployment
  - Run `npm test` to run all tests

## Tests coverage

- Helpers functions are pure funcitons and are tested as they contain most of the business logic
- Reducers are tested fully as they determine the state of application after an action
- Components are tested to a degree but can be done more by adding interactions test etc.

## Could have been done more, if time permitted

- integration test of all components
- Full UI test of the application
- snapshot testing of components
