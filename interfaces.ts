/**
 * Created by russell.frame on 4/21/2017.
 */
import {Category} from './enum';

interface Book {

    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;

}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customer: string) => void;
}

export { Book, DamageLogger, Author, Librarian };