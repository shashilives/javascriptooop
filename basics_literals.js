const s1 = 'hello';
console.log(typeof s1);

const s2 = new String("Hello");
console.log(typeof s2);


//console.log(window);
// window.alert(1);
//alert(1); both are same



const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: 2016,
    getSummary: function () {
        return ` ${this.title} was written by ${this.author} in ${this.year}`
    }
}

//console.log(book1);
//console.log(book1.getSummary());

console.log(Object.keys(book1))
console.log(Object.values(book1))
