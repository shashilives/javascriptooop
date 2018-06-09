function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


Book.prototype.getSummary = function () {
    console.log(`${this.title} is written by ${this.author} in ${this.year}`);
}


function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("One indian girl", "Chetan Bagat", 2016, "June");

//Forcing Magazine constructor
Magazine.prototype.constructor = Magazine;

mag1.getSummary();

console.log(mag1);