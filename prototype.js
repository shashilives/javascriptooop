function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


Book.prototype.getSummary = function () {
    console.log(`${this.title} is written by ${this.author} in ${this.year}`);
}

Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    console.log(`${this.title} is ${years} years old`)
}

const book1 = new Book("One indian girl", "Chetan Bagat", 2016);
const book2 = new Book("India 2020", "APJ Abdul kalam", 2012);

console.log(book1);
book1.getSummary();
book1.getAge();
book2.getSummary();
book2.getAge();