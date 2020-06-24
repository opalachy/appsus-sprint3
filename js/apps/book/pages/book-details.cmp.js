{/* <pre>{{book}}</pre> */ }

import bookDescription from '../pages/book-description.cmp.js'
import { bookServices } from '../service/book.service.js';

export default {
    template: `
        <section>
        <section v-if="book" class="book-details">
        <router-link to="/books">Back</router-link>
                <button @click="close">X</button>
                <h2>{{pageCount}}</h2>
                <h2>{{publishedDate}}</h2>
                <h2 :class="classColor">{{this.book.listPrice.amount}}</h2>
                <img v-if="book.listPrice.isOnSale" src="img/1.JPG" width=100px/>
                <book-description :txt="book.description"></book-description>
                <img :src="book.thumbnail" width=200px>
            </section>
            
        </section>
    `,
    data() {
        return {
            book: null
        }
    },
    created() {
        // const id = this.$route.params.id;
        const {bookId} = this.$route.params;
        bookServices.getById(bookId)
            .then(book => {
                this.book = book;
            })
    },
    methods: {
        close() {
            this.$emit('close', null);
            this.$router.push('/books')
        }
    },
    computed: {
        pageCount() {
            if (this.book.pageCount > 500) {
                return 'Long Reading';
            } else if (this.book.pageCount > 200) {
                return 'Decent Reading';
            } else if (this.book.pageCount < 100) {
                return 'Light Reading';
            }
        },
        publishedDate() {

            if (new Date().getFullYear() - this.book.publishedDate > 10) {
                return 'Veteran Book'
            } else if (new Date().getFullYear() - this.book.publishedDate < 1) {
                return 'New'
            }
        },
        classColor() {
            return {
                redColor: this.book.listPrice.amount > 150,
                greenColor: this.book.listPrice.amount < 20
            }
        },

    },
    components:{
        bookDescription
    }
}