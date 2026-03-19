class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

const book1 = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1178, 'has been read');
book1.info();