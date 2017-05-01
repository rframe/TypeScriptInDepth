/**
 * Created by russell.frame on 4/21/2017.
 */
import {Category} from './enum';
import {Book, DamageLogger} from './interfaces';

// class Book {
//     constructor(public id: number, public title: string, public author: string, public available: boolean, public categrory: Category) {
//     }
// }
function GetAllBooks(): Array<Book> {
    let books = [
        {id: 1, title:'Ulysses', author: 'James Joyce', available: true, category:Category.Fiction},
        {id: 2, title:'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category:Category.Fiction},
        {id: 3, title:'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category:Category.Poetry},
        {id: 4, title:'Moby Dick', author: 'Herman Melville', available: true, category:Category.Fiction},
        // new Book(1, 'Ulysses', 'James Joyce', true, Category.Fiction),
        // new Book(2, 'A Farewell to Arms', 'Ernest Hemingway', false, Category.Fiction),
        // new Book(3, 'I Know Why the Caged Bird Sings', 'Maya Angelou', true, Category.Poetry),
        // new Book(4, 'Moby Dick', 'Herman Melville', true, Category.Fiction)
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


function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log(`Getting books in categroy: ${Category[categoryFilter]}`);

    const allBooks = GetAllBooks();
    const filteredTitles: Array<string> = [];

    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
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

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];

function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];
    if(typeof bookProperty == typeof '') {
        //get books by author, add to foundTitle
        foundTitles.push.apply(foundTitles, allBooks
            .filter(x => x.author === bookProperty)
            .map(z => {return z.title}));
    } else if(typeof bookProperty === 'boolean') {
        //get books by availability, add to foundTitles
        foundTitles.push.apply(foundTitles, allBooks
            .filter(x => x.available === bookProperty)
            .map(z => z.title));
    }
    return foundTitles;
}

function PrintBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
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


/******************************/
// let hermansBooks = GetTitles('Herman Melville');
// hermansBooks.forEach(x => console.log(x));

 //let checkoutBooks = GetTitles(false);

 //checkoutBooks.forEach(x => console.log(x));
/******************************/

let myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 251,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
    //year: '1813',
    //copies: 3
};

PrintBook(myBook);
myBook.markDamaged('Missing Back Cover');

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
logDamage(`Coffee Stains`);