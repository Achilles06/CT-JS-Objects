//Task 1 
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//Task 2
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

//Task 3
const library = [];

function addBook(book) {
    library.push(book);
}

function searchBooksByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchBooksByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

//Task 4
function filterBooksByPages() {
    return library.filter(book => book.pages > 100);
}

function mapBooksWithTitleAndAuthorPrefix() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

//Example
// Creating new books
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);
const book3 = new Book('The Catcher in the Rye', 'J.D. Salinger', 214);
const book4 = new Book('Animal Farm', 'George Orwell', 112);
const book5 = new Book('The Old Man and the Sea', 'Ernest Hemingway', 99);

// Adding books to the library
addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);
addBook(book5);

// Displaying book info
console.log(book1.displayInfo()); // Output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Pages: 180

// Searching for books by title or author
console.log(searchBooksByTitle('Animal Farm')); // Output: Array containing the book 'Animal Farm'
console.log(searchBooksByAuthor('J.D. Salinger')); // Output: Array containing the book 'The Catcher in the Rye'

// Filtering books with more than 100 pages
console.log(filterBooksByPages()); // Output: Array containing books with more than 100 pages

// Mapping books with "Title: " and "Author: " prefixes
console.log(mapBooksWithTitleAndAuthorPrefix());
// Output: Array of objects with prefixed titles and authors

