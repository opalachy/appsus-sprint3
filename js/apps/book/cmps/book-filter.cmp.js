

export default {
    template: `
        <section class="search-bar">
            <input type="text" class="book-filter-input" placeholder="Search By Title" v-model="filterBy.searchByTitle" @input="filter"/>
            <input type="number" class="book-filter-input" placeholder="Search By Price (min)" v-model.number="filterBy.fromPrice" @input="filter"/>
            <input type="number" class="book-filter-input" placeholder="Search By Price (max)" v-model.number="filterBy.toPrice" @input="filter"/>
        </section>
    `,
    data() {
        return {
            filterBy: {
                searchByTitle:'',
                fromPrice:'',
                toPrice:''
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}