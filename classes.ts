import {Book, DamageLogger, Author, Librarian} from './interfaces';

export class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

export abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'Research';
    constructor(public title: string, protected year: number) {
        console.log(`Creating a new ReferenceItem...`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string){
        this._publisher = newPublisher;
    }
    
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

export class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}