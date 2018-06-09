//Object of protos

const bookProtos = {
    getSummary: function () {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}


const book1 = Object.create(bookProtos);
book1.title = "One indian girl";
book1.author = " Chetan bagat";
book1.year = 2013;

console.log(book1)

//The below approah doesnot work in node
const book2 = Object.create(bookProtos,
    {
        title: { value: "Book1" },
        author: { value: "Shashi" },
        year: { value: 2013 },
    });

console.log(book2)