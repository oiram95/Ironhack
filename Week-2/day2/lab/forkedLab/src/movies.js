import { movies } from './data.js';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Version 1
// Iteration 1 - with Bonus using a regular function
function getAllDirectors(movieArray) {
  const rawList = movieArray.map((movie) => movie.director);
  // Bonus
  const cleanList = rawList.filter(
    (director, index) => rawList.indexOf(director) === index
  );
  return cleanList;
}
// console.log(`1. Clean List of All Directors: ${getAllDirectors(movies)}`);

// Version 2
// Iteration 1 - with Bonus using an arrow function
const getAllDirectors2 = (movieArray) => {
  const rawList = movieArray.map((movie) => movie.director);
  const cleanList = rawList.filter(
    (director, index) => rawList.indexOf(director) === index
  );
  return cleanList;
};
// console.log(`1. Clean List of All Directors: ${getAllDirectors2(movies)}`);

// Version 3
// Iteration 1 - with Bonus using an arrow function
const getAllDirectors3 = (moviesArray) => {
  return [...new Set(moviesArray.map((movie) => movie.director))];
};
// console.log(`1. Clean List of All Directors: ${getAllDirectors3(movies)}`);

// .
// .
// .
// .
// .
// .
// ITERATION 2
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Version 1 -Regular function
const howManyMovies = (moviesArray) => {
  // 1st nos creamos una vairable que filtremos en el moviesArray para conseguir un valor de "steven spielrberg"
  const steven = moviesArray.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  // 2nd usamos la variable anterior para poder filtrar entre el genero
  const stevenDrama = steven.filter((movie) => movie.genre.includes('Drama'));
  return stevenDrama;
};
// console.log(2.'AMount of movies:');
// console.log(howManyMovies(movies));

// Version 2 - Arrow function
const howManyMovies2 = (moviesArray) => {
  const steven = moviesArray.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  const stevenDrama = steven.filter((movie) => movie.genre.includes('Drama'));
  return stevenDrama.length;
};
// console.log('This is the list:');
// console.log(howManyMovies2(movies));

// .
// .
// .
// .
// .
// .
// .
// ITERATION 3
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const scoresAverage = (moviesArray) => {
  // Basically we use the arguments with the reduce function (De un conjunto de valores, te devuelve un valor definido por el progamador) que usaremos un acumulador y una pelicula para sacar e score y sumarlo y nos los guardamos en una variable que la inicializaremos a 0.
  const scores = moviesArray.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);
  // usamos la variable scores para dividir el score entre el lenght de las pelis!
  const avg = scores / moviesArray.length;
  return Number(avg.toFixed(2));
};
// console.log(`3. Average score of all movies: ${scoresAverage(movies)}`);

// .
// .
// .
// .
// .
// .
// .
// .
// .
// Iteration 4: Drama movies - Get the average of Drama Movies

// VERSION 1
const dramaMoviesScore = (moviesArray) => {
  const drama = moviesArray.filter((movie) => movie.genre.includes('Drama'));
  const scores = drama.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);
  const avg = scores / movies.length;
  return Number(avg.toFixed(2));
};
// console.log(`4. Average score of Drama movies: ${dramaMoviesScore(movies)}`);

// .
// .
// .
// .
// .
// .
// .
// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (moviesArray) => {
  const orderdList = moviesArray.sort((a, b) => a.year - b.year);
  return orderdList;
};
// console.log('5. Movies ordered by ascending year:');
// console.log(orderByYear(movies));

// .
// .
// .
// .
// .
// .
// .
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// Version 1 - using sort
const orderAlphabetically = (moviesArray) => {
  moviesArray.sort((a, b) => (a.title < b.title ? -1 : 0));
  return moviesArray.slice(0, 20);
};
// console.log('6. Movies ordered by title::');
// console.log(orderAlphabetically(movies));

// Version 2 - Using map
const orderAlphabetically2 = (moviesArray) => {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
};
console.log('6. Movies ordered by title:');
console.log(orderAlphabetically2(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
