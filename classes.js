class Book {
    constructor(title, author, year) {
        this.title = title,
            this.author = author,
            this.year = year
    }

    getSummary() {
        console.log(`${this.title} is written by ${this.author} in ${this.year}`);
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    //No need to initialize an object to access  staic method 
    static topBookStore() {
        console.log("Sapna Book store");
    }
}

const book1 = new Book("India 2020", "APJ", 2016);

console.log(book1)
book1.getSummary();
book1.revise(2018);

console.log(book1)

Book.topBookStore();