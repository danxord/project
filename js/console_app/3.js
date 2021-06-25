"use strict";

let numberOfFilms;
let lastWatchedFilm;
let filmRate;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};

function rememberMyFilms() {
    for (let i = 1; i <= 3; i++) {
        lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');
        filmRate = +prompt('На сколько оцените его', '');
        if (lastWatchedFilm != '' && filmRate != '' && lastWatchedFilm != false && filmRate != false && lastWatchedFilm.length < 50 && filmRate <= 10) {
            personalMovieDB.movies[lastWatchedFilm] = filmRate;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка, введите число!');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр по номером ${i+1}`);
    }
}

writeYourGenres();


function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    } else {
        console.log("Это приватная информация!");
    }
}

showMyDB();
