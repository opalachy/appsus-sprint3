// import noteSearch from '../cmp/note-search.cmp.js'
import { keepServices } from '../../keep/service/keep-service.js';
import noteSearch from '../cmps/note-search.cmp.js';
import noteList from './note-list.pages.js';

export default {
    template: `
    <main>
        <h1>Hello keep App</h1>
        <note-search  @filtered="setFilter"></note-search>
        <note-list  :notes="notesToShow"></note-list>
    </main>   
`,
    data(){
        return{
            notes:[],
            currNote: null,
            filterBy: null
        }
    },
    components:{
        noteSearch,
        noteList
    },
    created() {
        keepServices.getNotes()
            .then(notes => {
                console.log(notes);
                this.notes = notes;
            })
    },
    methods: {
            setFilter(filterBy) {
                this.filterBy = filterBy;
            },
            // selectNote(note) {
            //     this.currNote = note;
            // }
    },
    computed: {
            notesToShow() {
                const filterBy = this.filterBy;
                if (!filterBy) return this.notes;
                var filteredNotes = this.notes;
                if (filterBy.searchByTitle) {
                    filteredNotes = filteredNotes.filter(notes => {
                        return (notes.type.toLowerCase().includes(filterBy.searchByTitle.toLowerCase()));
                    });
                }
                return filteredNotes;
             }
           
         }   
         
}



