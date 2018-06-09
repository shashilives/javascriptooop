class Book {
    constructor(title, author, year) {
        this.title = title,
            this.author = author,
            this.year = year
    }

    getSummary() {
        console.log(`${this.title} is written by ${this.author} in ${this.year}`);
    }

}

//Magazine subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

}

const mag = new Magazine("india 2020", "APJ", 2016, "June");

console.log(mag);
mag.getSummary();