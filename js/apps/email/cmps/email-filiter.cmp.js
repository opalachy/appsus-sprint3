
export default {
    template: `
        <section class="email-filter">
            <input type="text" placeholder="Search By Subject" v-model="filterBy.searchBySubject" @input="filter"/>
            <select v-model="filterBy.isRead" @input="filter">
            <option >All</option>
            <option>Read</option>
            <option>Not Read</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                searchBySubject:'',
                isRead: 'All'
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        },
    }
}