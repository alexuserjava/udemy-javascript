'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');

    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

    
    function rememberMyfilms () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
    
            if (a != null && b!= null && a != '' && b != '' && a.length < 50) {
                // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и а < 50 символов то
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    }

    //rememberMyfilms();

    function detectPersonalLevel() {
        if(personalMovieDB.count < 10){
            console.log("Занадто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви классичний глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('А ви кіноман')
        } else {
            console.log('Помилка');
        }

    }


    //detectPersonalLevel();

    function showMyDB (hidden){
        if (!hidden){
            console.log(personalMovieDB);
    
        }
    }

    showMyDB(personalMovieDB.privat);
    
    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш улюбленний жанр під номером ${i}`);
        }
    }

    writeYourGenres();
























