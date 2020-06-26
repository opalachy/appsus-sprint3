
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
                <div class="box" @click="setInbox">Inbox</div>
                <div class="box" @click="setStars">Stars</div>
                <div class="box" @click="setDraft">Draft</div>
                <div class="box" @click="setDelete"><i class="fa fa-trash" aria-hidden="true"></i></div>
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

