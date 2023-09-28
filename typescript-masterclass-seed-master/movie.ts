// here writing a script for the movie based application writing application typescript file

// // lets start with the movie application

class movies{
    constructor(
        public title: string,
        public releaseDate: string,
        public rating: number,
        public genre: string,
        public description: string,
        public image: string
    ) { }
}

class multiplex {
    constructor(
        public name: string,
        public location: string,
        public movies: movies[]
    ) { }
}

class totalScreens {
    constructor(
        public multiplex: multiplex[],
        public movies: movies[]
    ) { }
}
// above code contains the classes for the movie application in which comprises of the movie class, multiplex class and totalScreens class  
