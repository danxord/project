"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
const filmRate = +prompt('На сколько оцените его', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.movies[lastWatchedFilm] = filmRate;

console.log(personalMovieDB);
