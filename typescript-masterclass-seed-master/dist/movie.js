// here writing a script for the movie based application writing application typescript file
// // lets start with the movie application
var movies = /** @class */ (function () {
    function movies(title, releaseDate, rating, genre, description, image) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.genre = genre;
        this.description = description;
        this.image = image;
    }
    return movies;
}());
var multiplex = /** @class */ (function () {
    function multiplex(name, location, movies) {
        this.name = name;
        this.location = location;
        this.movies = movies;
    }
    return multiplex;
}());
var totalScreens = /** @class */ (function () {
    function totalScreens(multiplex, movies) {
        this.multiplex = multiplex;
        this.movies = movies;
    }
    return totalScreens;
}());
// above code contains the classes for the movie application in which comprises of the movie class, multiplex class and totalScreens class  
