

import { bookServices } from '../../book/service/book.service.js';

import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';


export default {
    template: `
    <main>
   
    <book-filter @filtered="setFilter" ></book-filter>
    <book-list :books="booksToShow" ></book-list >
    </main>   
`,
    data() {
        return {
            books: [],
            currBook: null,
            filterBy: null

        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
        // selectBook(book) {
        //     this.currBook = book;
        // }
    },
    computed: {
        booksToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.books;
            var filteredBooks = this.books;

            if (filterBy.searchByTitle) {

                filteredBooks = filteredBooks.filter(book => {
                    return (book.title.toLowerCase().includes(filterBy.searchByTitle.toLowerCase()));
                });
            }

            if (filterBy.fromPrice) {
                filteredBooks = filteredBooks.filter(book => {
                    return (book.listPrice.amount >= filterBy.fromPrice)
                });
            }

            if (filterBy.toPrice) {
                filteredBooks = filteredBooks.filter(book => {
                    return (book.listPrice.amount <= filterBy.toPrice)
                });
            }
            return filteredBooks;
        }


    },
    created() {
        bookServices.getBooks()
            .then(books => {
                this.books = books;
            })
    },
    components: {
        bookFilter,
        bookList
    }

};