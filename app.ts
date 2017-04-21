/**
 * Created by russell.frame on 4/21/2017.
 */

class Book {
    constructor(public id: number, public title: string, public author: string, public available: boolean, public categrory: Category) {
    }
}
function GetAllBooks(): Array<Book> {
    let books: Array<Book> = [
        new Book(1, 'Ulysses', 'James Joyce', true, Category.Fiction),
        new Book(2, 'A Farewell to Arms', 'Ernest Hemingway', false, Category.Fiction),
        new Book(3, 'I Know Why the Caged Bird Sings', 'Maya Angelou', true, Category.Poetry),
        new Book(4, 'Moby Dick', 'Herman Melville', true, Category.Fiction)
    ];
    return books;
}

function LogFirstAvailable(books: Array<Book>): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string;

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available: ${firstAvailable}`)
}

enum Category {Biography, Poetry, Fiction, History, Children};

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log(`Getting books in categroy: ${Category[categoryFilter]}`);

    const allBooks = GetAllBooks();
    const filteredTitles: Array<string> = [];

    for(let currentBook of allBooks) {
        if(currentBook.categrory === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: Array<string>) {
    for (let title of titles) {
        console.log(title);
    }
}
function GetBookById(id: number): Book {
    const allBooks: Array<Book> = GetAllBooks();
    
    return allBooks.filter(book => book.id === id)[0];
}

//const allBooks: Array<Book> = GetAllBooks();
//LogFirstAvailable(allBooks);

const fictionBooks: Array<string> = GetBookTitlesByCategory(Category.Fiction);
//LogBookTitles(fictionBooks);
fictionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val}`));

