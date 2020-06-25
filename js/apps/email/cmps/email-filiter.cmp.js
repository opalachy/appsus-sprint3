
export default {
    template: `
        <section class="email-filter">
            <input type="text" placeholder="Search By Subject" v-model="filterBy.searchBySubject" @input="filter"/>
            <select v-model="filterBy.isRead" @input="filter">
                <option >All</option>
                <option>Read</option>
                <option>Not Read</option>
            </select>
            <div class="email-container">
                <div class="box">Inbox</div>
                <div class="box">Stars</div>
                <div class="box">Draft</div>
                <div class="box">Delete</div>
            </div>
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

///add inbox, stared, trashed and sent items