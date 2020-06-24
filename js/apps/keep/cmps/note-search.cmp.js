
export default{
    template:`
    <section class="search-bar">
         <h1>Search</h1>
         <input placeholder="img/todo/text" type="text" v-model="filterBy.searchByTitle" @input="filter"/>
    </section>
  
    `,
    data() {
        return {
            filterBy: {
                searchByTitle:'',
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}
