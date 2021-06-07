"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');


let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман!');
} else {
  alert('Произошла ошибка!');
}


let i = 0;

while (i < 2) {
  let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
  let rateFilm = prompt('Насколько оцените его?', '');
  i++;

  if (lastWatchedFilm != null && rateFilm != null && lastWatchedFilm != '' && rateFilm != '' && lastWatchedFilm.length < 50 && rateFilm < 11) {
    personalMovieDB.movies[lastWatchedFilm] = rateFilm;
  } else {
    i--;
  }
}



console.log(personalMovieDB);
