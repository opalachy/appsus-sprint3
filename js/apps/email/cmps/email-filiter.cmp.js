
export default {
    template: `
        <section class="email-filter flex">
            <div>
                    <input class="filter-input" type="text" placeholder="Search By Subject" v-model="filterBy.searchBySubject" @input="filter"/>
                    <select class="filter-select" v-model="filterBy.isRead" @input="filter">
                        <option >All</option>
                        <option>Read</option>
                        <option>Not Read</option>
                    </select>
            </div>    
            <div class="email-container">
                <div class="box" @click="setInbox"><i class="fa fa-inbox" aria-hidden="true"></i> Inbox</div>
                <div class="box" @click="setStars"><i class="fa fa-star-o" aria-hidden="true"></i> Stars</div>
                <div class="box" @click="setDraft"><i class="fa fa-files-o" aria-hidden="true"></i> Draft</div>
                <div class="box" @click="setDelete"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</div>
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
        },
        setInbox(){
            this.filterBy.isInbox = true;
            this.filterBy.isStars = false;
            this.filterBy.isDraft = false;
            this.filterBy.isDelete =false;
            this.filter();
        },    
        setStars(){
            this.filterBy.isInbox = false;
            this.filterBy.isStars = true;
            this.filterBy.isDraft = false;
            this.filterBy.isDelete =false;
            this.filter();
        },    
        setDraft(){
            this.filterBy.isInbox = false;
            this.filterBy.isStars = false;
            this.filterBy.isDraft = true;
            this.filterBy.isDelete =false;
            this.filter();
        },    
        setDelete(){
            this.filterBy.isInbox = false;
            this.filterBy.isStars = false;
            this.filterBy.isDraft = false;
            this.filterBy.isDelete =true;
            this.filter();
        }    
    }
}

