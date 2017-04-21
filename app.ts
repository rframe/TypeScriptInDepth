/**
 * Created by russell.frame on 4/21/2017.
 */

class Book {
    constructor(public title: string, public author: string, public available: boolean){}
}
function GetAllBooks(): Array<Book> {
    let books: Array<Book> = [
        new Book('Ulysses', 'James Joyce', true),
        new Book('A Farewell to Arms', 'Ernest Hemingway', false),
        new Book('I Know Why the Caged Bird Sings', 'Maya Angelou', true)
    ];
    return books;
}

function LogFirstAvailable(books: Array<Book>): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string;

    for(let currentBook of books) {
        if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available: ${firstAvailable}`)
}

let allBooks: Array<Book> = GetAllBooks();

allBooks.push(new Book('I Know Why the Caged Bird Sings', 'Maya Angelou', true));
LogFirstAvailable(allBooks);