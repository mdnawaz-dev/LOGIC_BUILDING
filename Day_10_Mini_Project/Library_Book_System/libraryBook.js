/*
Question:
Library Book System

Create a Book class with:
- title
- author
- isAvailable (default true)

Methods:
- checkout()
- returnBook()

Create a Library class with:
- addBook(book)
- findBookByTitle(title)
- checkoutBook(title)
- returnBook(title)
- listAvailableBooks()
*/

// ---------------- Book Class ----------------

class Book {

    constructor(title, author, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    checkout() {

        if (!this.isAvailable) {
            throw new Error(`"${this.title}" is already checked out.`);
        }

        this.isAvailable = false;

        console.log(`Successfully checked out: "${this.title}"`);
    }

    returnBook() {

        this.isAvailable = true;

        console.log(`Successfully returned: "${this.title}"`);
    }

}

// ---------------- Library Class ----------------

class Library {

    constructor() {
        this.books = [];
    }

    addBook(book) {

        this.books.push(book);

        console.log(`Successfully added: "${book.title}"`);
    }

    findBookByTitle(title) {

        return this.books.find(book =>
            book.title.toLowerCase() === title.toLowerCase()
        );

    }

    checkoutBook(title) {

        const book = this.findBookByTitle(title);

        if (!book) {
            throw new Error(`"${title}" does not exist in the library.`);
        }

        book.checkout();

    }

    returnBook(title) {

        const book = this.findBookByTitle(title);

        if (!book) {
            throw new Error(`"${title}" does not belong to this library.`);
        }

        book.returnBook();

    }

    listAvailableBooks() {

        console.log("\n----- Available Books -----");

        const availableBooks = this.books.filter(
            book => book.isAvailable
        );

        if (availableBooks.length === 0) {

            console.log("No books available.");

        } else {

            availableBooks.forEach(book => {

                console.log(`• ${book.title} by ${book.author}`);

            });

        }

    }

}

// ---------------- Testing ----------------

const library = new Library();

library.addBook(
    new Book("Atomic Habits", "James Clear")
);

library.addBook(
    new Book("Clean Code", "Robert C. Martin")
);

library.addBook(
    new Book("The Alchemist", "Paulo Coelho")
);

library.listAvailableBooks();

console.log("\nChecking out Clean Code...\n");

library.checkoutBook("Clean Code");

library.listAvailableBooks();

console.log("\nReturning Clean Code...\n");

library.returnBook("Clean Code");

library.listAvailableBooks();

// ---------------- Output ----------------
/*
Successfully added: "Atomic Habits"
Successfully added: "Clean Code"
Successfully added: "The Alchemist"

----- Available Books -----
• Atomic Habits by James Clear
• Clean Code by Robert C. Martin
• The Alchemist by Paulo Coelho

Checking out Clean Code...

Successfully checked out: "Clean Code"

----- Available Books -----
• Atomic Habits by James Clear
• The Alchemist by Paulo Coelho

Returning Clean Code...

Successfully returned: "Clean Code"

----- Available Books -----
• Atomic Habits by James Clear
• Clean Code by Robert C. Martin
• The Alchemist by Paulo Coelho

*/