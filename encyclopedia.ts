import {ReferenceItem} from './classes';

export default class extends ReferenceItem {
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