
export default {
    template: `
    <section class="email-filter flex">
            <div class="filter-container">        
                        <span class="search-icon"><i class="fa fa-search" aria-hidden="true"></i><input class="filter-input" type="text" placeholder="By Subject" v-model="filterBy.searchBySubject" @input="filter"/></span>
                        <select class="filter-select" v-model="filterBy.isRead" @input="filter">
                            <option >All</option>
                            <option>Read</option>
                            <option>Not Read</option>
                        </select>   
            </div>    
    </section>
    `,
    data() {
        return {
            filterBy: {
                searchBySubject:'',
                isRead: 'All',
                isInbox: true,
                isStars: false,
                isDraft: false,
                isDelete: false

            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }    
    }
}

