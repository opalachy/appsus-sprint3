
export default{
    template:`
    <section class="search-bar">
        
         <span class="search-icon"><i class="fa fa-search" aria-hidden="true"></i><input placeholder="search" type="text" v-model="filterBy.searchByTitle" @input="filter"/></span>   
         <select v-model="filterBy.searchByType"  @input="filter">
             <option value="img">Images</option>
             <option value="todo">Todos</option>
             <option value="text">Text</option>
             <option value="video">Video</option>
             <option value="">All</option>
         </select>
    </section>
  
    `,
    data() {
        return {
            filterBy: {
                searchByType:'',
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
