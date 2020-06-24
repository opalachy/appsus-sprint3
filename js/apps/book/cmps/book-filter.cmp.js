

export default {
    template: `
        <section>
            <input type="text" placeholder="Search By Title" v-model="filterBy.searchByTitle" @input="filter"/>
            <input type="number" placeholder="Search By Price (min)" v-model.number="filterBy.fromPrice" @input="filter"/>
            <input type="number" placeholder="Search By Price (max)" v-model.number="filterBy.toPrice" @input="filter"/>
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