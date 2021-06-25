"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let lastWatchedFilm;
let filmRate;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель!');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка, введите число!');
}

let i = 1;
do {
    lastWatchedFilm = prompt('Введите последний просмотренный фильм', '');
    filmRate = +prompt('Введите оценку фильма', '');
    i++;
    if (lastWatchedFilm != '' && filmRate != '' && lastWatchedFilm != false && filmRate != false && lastWatchedFilm.length < 50 && filmRate <= 10) {
        personalMovieDB.movies[lastWatchedFilm] = filmRate;
    } else {
        i--;
    }
} while (i <= 3);

console.log(personalMovieDB);
