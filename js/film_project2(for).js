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

for (let i = 0; i < 2; i++) {
  let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
    rateFilm = prompt('Насколько оцените его?', '');

  if (lastWatchedFilm != null && rateFilm != null && lastWatchedFilm != '' && rateFilm != '' && lastWatchedFilm.length < 50 && rateFilm < 11) {
    personalMovieDB.movies[lastWatchedFilm] = rateFilm;
  } else {
    i--;
  }
}


console.log(personalMovieDB);
