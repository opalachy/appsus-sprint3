// import noteSearch from '../cmp/note-search.cmp.js'
import { keepServices } from '../../keep/service/keep-service.js';
import {Utils} from '../../../service/utils.service.js';
import noteSearch from '../cmps/note-search.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from './note-list.pages.js';
import colorPicker from '../cmps/color-picker.cmp.js';


export default {
    template: `
    <main class="main-keep-app">
        <note-search @filtered="setFilter"></note-search>
        <note-add @onAddNote="addNote"></note-add>
        <section v-show="getPinnednotes(notesToShow).length > 0">
            <h4 class="keep-category">Pinned Notes:</h4>
            <hr/>
            <note-list class="flex wrap" v-on:click="selectNote" :notes="getPinnednotes(notesToShow)"></note-list>
            <h4 class="keep-category">Other Notes:</h4>
            <hr/>
        </section>
        <note-list class="flex wrap" v-on:click="selectNote" :notes="getOtherNotes(notesToShow)"></note-list>
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
        noteAdd,
        colorPicker,
    },
    created() {
        keepServices.getNotes()
            .then(notes => {
                this.notes = notes;
                this.filterBy = '';
            })
    },
    methods: {
        //to service
            addNote(note) {
                note.id = Utils.getRandomId()
                this.notes.push(note)
                keepServices.saveNoteToStorage()
                keepServices.getNotes()
            },
            //
            setFilter(filterBy) {
                this.filterBy = filterBy;
            },
            selectNote(note) {
                this.currNote = note;   
            },
            getPinnednotes(notes) {
                return notes.filter(note=>{
                    return note.isPinned
                })
            },
            getOtherNotes(notes) {
                return notes.filter(note=>{
                return !note.isPinned
                })
            }
    },
    computed: {
            notesToShow() {
                const filterBy = this.filterBy;
                if (!filterBy) return this.notes;
                var filteredNotes = this.notes;
                if (filterBy.searchByType) {
                    filteredNotes = filteredNotes.filter(note => {
                        return (note.type.toLowerCase().includes(filterBy.searchByType.toLowerCase()));
                    });
                }
                if (filterBy.searchByTitle) {
                    filteredNotes = filteredNotes.filter(note => {
                        let noteType = note.type;
                        let filter = filterBy.searchByTitle.toLowerCase();
                        if (noteType === "NoteText") {
                            return note.info.txt.toLowerCase().includes(filter);
                        }
                        if (noteType === "NoteImg") {
                            if (note.info.title === undefined) return false;
                            return note.info.title.toLowerCase().includes(filter);
                        }
                        if (noteType === "NoteVideo") {
                            if (note.info.title === undefined) return false;
                            return note.info.title.toLowerCase().includes(filter);
                        }
                        if (noteType === "NoteTodos") {
                            let todos = note.info.todos;
                            let filteredTodos = todos.filter(todo => todo.txt.toLowerCase().includes(filter))
                            return filteredTodos.length > 0;
                        }
                    });
                }
                return filteredNotes;
             }
           
         }  ,
        //  destroyed(){
        //      alert
        //  } 
         
}



