// import noteSearch from '../cmp/note-search.cmp.js'
import { keepServices } from '../../keep/service/keep-service.js';
import noteSearch from '../cmps/note-search.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from './note-list.pages.js';

export default {
    template: `
    <main>
        <h1>Hello keep App</h1>
        <note-add @onAddNote="addNote"></note-add>
        <note-search @filtered="setFilter"></note-search>
        <note-list class="flex wrap" :notes="notesToShow"></note-list>
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
        noteList,
        noteAdd
    },
    created() {
        keepServices.getNotes()
            .then(notes => {
                console.log(notes);
                this.notes = notes;
            })
    },
    methods: {
            addNote(note) {
                this.notes.push(note)
                keepServices.saveNoteToStorage()
                keepServices.getNotes()
            },
            setFilter(filterBy) {
                this.filterBy = filterBy;
            },
            selectNote(note) {
                this.currNote = note;
                console.log('selected', this.currNote);
                
            }
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



