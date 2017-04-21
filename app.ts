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

function LogFirstAvailable(books: Array<Book> = GetAllBooks()): void {
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

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
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

function CreateCustomerId(name: string, id: number): string {
    return `${name}${id}`;
}

function CreateCustomer(name: string, age?: number, city?: string) {
    console.log(`Creating Customer ${name}`);
    if(!!age) {
        console.log(`Age ${age}`);
    }
    if(!!city) {
        console.log(`City ${city}`);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Chekcing out books for ${customer}`);
    let booksCheckedOut: string[] = [];
    for(let bookId of bookIDs) {
        let book = GetBookById(bookId);
        if(book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

/******************************/
//const allBooks: Array<Book> = GetAllBooks();
//LogFirstAvailable(allBooks);
/******************************/



/******************************/
//const fictionBooks: Array<string> = GetBookTitlesByCategory(Category.Fiction);
//LogBookTitles(fictionBooks);
//fictionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val}`));
/******************************/



/******************************/
//let x: number;
//x = 5;

//let IdGenerator: (chars: string, num: number) => string;
//IdGenerator = CreateCustomerId;
//IdGenerator = (name: string, id: number) => {return `${name}${id}`;}

//let myId: string = CreateCustomerId('daniel', 10);
//myId = IdGenerator('daniel', 15);
//console.log(myId)
/******************************/


/******************************/
// CreateCustomer('Michelle');
// CreateCustomer('Leigh', 6);
// CreateCustomer('Marie', 12, 'Atlanta');
/******************************/

/******************************/
//let fictionBooks: Array<string> = GetBookTitlesByCategory();
//fictionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val}`));

//LogFirstAvailable();

//const myBooks: string[] = CheckoutBooks('Michelle', 1, 2, 3, 4);
//myBooks.forEach(x => console.log(x));
/******************************/