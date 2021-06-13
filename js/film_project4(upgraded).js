"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка!');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
                rateFilm = prompt('Насколько оцените его?', '');

            if (lastWatchedFilm != null && rateFilm != null && lastWatchedFilm != '' && rateFilm != '' && lastWatchedFilm.length < 50 && rateFilm < 11) {
                personalMovieDB.movies[lastWatchedFilm] = rateFilm;
            } else {
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let favouriteGenres = prompt("Введите ваши любимые жанры через запятую").toLowerCase();

            if (favouriteGenres === null || favouriteGenres === '') {
                console.log('Вы ввели некорректные данные или не ввели их вообще!');
                i--;
            } else {
                personalMovieDB.genres = favouriteGenres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимые жанры ${i + 1} - это ${item}`);
        });

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};
