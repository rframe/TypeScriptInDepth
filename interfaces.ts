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
    markDamaged?: (reason: string) => void;

}

export { Book };