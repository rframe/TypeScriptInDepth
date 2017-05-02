/**
 * Created by russell.frame on 4/21/2017.
 */
import {Category} from './enum';
import {Book, DamageLogger, Author, Librarian} from './interfaces';
import {UniversityLibrarian, ReferenceItem, Encyclopedia} from './classes';
//import * as util from './lib/utilityFunctions';
import {CalculateLateFee as CalcFee, MaxBooksAllowed} from './lib/utilityFunctions';

function GetAllBooks(): Array<Book> {
    let books = [
        {id: 1, title:'Ulysses', author: 'James Joyce', available: true, category:Category.Fiction},
        {id: 2, title:'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category:Category.Fiction},
        {id: 3, title:'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category:Category.Poetry},
        {id: 4, title:'Moby Dick', author: 'Herman Melville', available: true, category:Category.Fiction}
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

/******************************/
// let myBook: Book = {
//     id: 5,
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     available: true,
//     category: Category.Fiction,
//     pages: 251,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     //year: '1813',
//     //copies: 3
// };

// PrintBook(myBook);
// myBook.markDamaged('Missing Back Cover');
/******************************/

/******************************/
// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log(`Damage reported: ${damage}`);
// logDamage(`Coffee Stains`);
/******************************/

/******************************/
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');
/******************************/

/******************************/
// Creating and Using Classes
// let ref: ReferenceItem = new ReferenceItem('Another New Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);
/******************************/

/******************************/
// Extending Classes
// If parent object constructor exporct parameters and child object does not have a constructor pass the parameters for the parent object to the child object
//let refBook = new Encyclopedia('Worldpedia', 1900);
// let refBook = new Encyclopedia('Worldpedia', 1900, 10);
// refBook.printItem();
/******************************/

/******************************/
// Creating Abstract Classes
// let refBook: ReferenceItem = new Encyclopedia('Worldpedia', 1900, 10);
// refBook.printCitation();
/******************************/

/******************************/
// Using Class Expressions
// let Newspaper = class extends ReferenceItem {
//     printCitation(): void {
//         console.log(`Newspaper: ${this.title}`);
//     }
// }

// let myPaper = new Newspaper('The Gazette', 2016);
// myPaper.printCitation();

// class Novel extends class {title: string} {
//     mainCharacter: string;
// }

// let favoriteNovel = new Novel();
// favoriteNovel.mainCharacter = '';
// favoriteNovel.title = '';


// class Novel extends class extends class {a: string} {title: string} {
//     mainCharacter: string;
// }

// let favoriteNovel = new Novel();
// favoriteNovel.mainCharacter = '';
// favoriteNovel.title = '';
// favoriteNovel.a = '';
/******************************/


/****Modules and Namespaces****/
/******************************/
// Creating an App with Namespaces
/******************************/

/******************************/
// Export and Import Basics
/******************************/

/******************************/
// Importing an Entire Modul
/******************************/

/******************************/
// Using Default Exports
/******************************/

/******************************/
// Creating and Using Generic Functions
/******************************/

/******************************/
// Creating and Using a Generic Class
/******************************/

/******************************/
// Using Compiler Options
/******************************/

/******************************/
// Managing a Project with tsconfig.json
/******************************/

/******************************/
// Using Definitions from Definitely Typed
/******************************/

/******************************/
// Installing Type Definitions with tsd
/******************************/

/******************************/
// Installing Type Definitions with typings
/******************************/