"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const firstWatchedFilm = prompt('Один из последних просмотренных фильмов?'),
  rateFirstFilm = prompt('Насколько оцените его?'),
  secondWatchedFilm = prompt('Один из последних просмотренных фильмов?'),
  rateSecondFilm = prompt('Насколько оцените его?');

personalMovieDB.movies[firstWatchedFilm] = rateFirstFilm;
personalMovieDB.movies[secondWatchedFilm] = rateSecondFilm;

console.log(personalMovieDB);



//backup
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
} else if (personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман!');
} else {
  alert('Произошла ошибка!');
}

const firstWatchedFilm = prompt('Один из последних просмотренных фильмов?'),
  rateFirstFilm = prompt('Насколько оцените его?'),
  secondWatchedFilm = prompt('Один из последних просмотренных фильмов?'),
  rateSecondFilm = prompt('Насколько оцените его?');

personalMovieDB.movies[firstWatchedFilm] = rateFirstFilm;
personalMovieDB.movies[secondWatchedFilm] = rateSecondFilm;

console.log(personalMovieDB);



//3
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
} else if (personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман!');
} else {
  alert('Произошла ошибка!');
}

let firstWatchedFilm = '',
  rateFirstFilm = '',
  secondWatchedFilm = '',
  rateSecondFilm = '';



while (firstWatchedFilm == '') {
  firstWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
}

while (rateFirstFilm == '') {
  rateFirstFilm = prompt('Насколько оцените его?', '');
}

while (secondWatchedFilm == '') {
  secondWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
}
while (rateSecondFilm == '') {
  rateSecondFilm = prompt('Насколько оцените его?', '');
}


personalMovieDB.movies[firstWatchedFilm] = rateFirstFilm;
personalMovieDB.movies[secondWatchedFilm] = rateSecondFilm;

console.log(personalMovieDB);
