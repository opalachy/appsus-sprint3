
import bookDetails from '../pages/book-details.cmp.js'

export default {
    props: ['book'],
    template: `
        <li class="book-preview">
        <h2>{{book.title}} </h2>
        <h2 :class="classColor"> {{getCurSym}} </h2>
        <img :src="book.thumbnail" width=150px >
        <router-link :to="'/book/' + book.id">Details</router-link> | 
        </li>
    `,
    data() {
        return {
            ILS: '₪',
            USD: '$',
            EUR: '€'
        }
    },
    computed: {
        getCurSym() {
            if (this.book.listPrice.currencyCode === 'ILS') {
                return this.ILS + this.book.listPrice.amount
            } else if (this.book.listPrice.currencyCode === 'USD') {
                return this.USD + this.book.listPrice.amount
            } else {
                return  this.book.listPrice.amount + this.EUR
            }
        },
        classColor() {
            return {
                redColor: this.book.listPrice.amount > 150,
                greenColor: this.book.listPrice.amount < 20
            }
        }
    },
    components:{
        bookDetails
    }
};
