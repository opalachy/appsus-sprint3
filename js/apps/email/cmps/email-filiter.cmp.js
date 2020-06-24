
export default {
    template: `
        <section class="email-filter">
            <input type="text" placeholder="Search By Subject" v-model="filterBy.searchBySubject" @input="filter"/>
            <select v-model="filterBy.isRead" @input="filter">
            <option :value="false">Read</option>
            <option :value="true">Not Read</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                searchBySubject:'',
                isRead: true
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        },
    }
}