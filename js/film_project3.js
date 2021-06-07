"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
  } else {
    alert('Произошла ошибка!');
  }
}
detectPersonalLevel();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
      rateFilm = prompt('Насколько оцените его?', '');

    if (lastWatchedFilm != null && rateFilm != null && lastWatchedFilm != '' && rateFilm != '' && lastWatchedFilm.length < 50 && rateFilm < 11) {
      personalMovieDB.movies[lastWatchedFilm] = rateFilm;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}?`, '');

    if (favouriteGenre != null && favouriteGenre != '') {
      personalMovieDB.genres[i - 1] = favouriteGenre;
    } else {
      i--;
    }
  }
}
writeYourGenres();

function showMyDB() {
  if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
  } else {
    console.log('Ошибка, это приватная информация!');
  }
}
showMyDB();
