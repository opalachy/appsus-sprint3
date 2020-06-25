// import noteSearch from '../cmp/note-search.cmp.js'
import { keepServices } from '../../keep/service/keep-service.js';
import {Utils} from '../../../service/utils.service.js';
import noteSearch from '../cmps/note-search.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from './note-list.pages.js';
import colorPicker from '../cmps/color-picker.cmp.js';

export default {
    template: `
    <main>
        <note-search @filtered="setFilter"></note-search>
        <h1>Hello keep App</h1>
        <note-add @onAddNote="addNote"></note-add>  
        <note-list class="flex wrap" v-on:click="selectNote" :notes="notesToShow"></note-list>
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
        colorPicker
    },
    created() {
        keepServices.getNotes()
            .then(notes => {
                this.notes = notes;
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
            setFilter(filterBy) {
                this.filterBy = filterBy;
            },
            selectNote(note) {
                this.currNote = note;   
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
                        let uQuery = filterBy.searchByTitle.toLowerCase();
                        if (noteType === "NoteText") {
                            return note.info.txt.toLowerCase().includes(uQuery);
                        }
                        if (noteType === "NoteImg") {
                            if (note.info.title === undefined) return false;
                            return note.info.title.toLowerCase().includes(uQuery);
                        }
                        if (noteType === "NoteVideo") {
                            if (note.info.title === undefined) return false;
                            return note.info.title.toLowerCase().includes(uQuery);
                        }
                        if (noteType === "NoteTodos") {
                            let todos = note.info.todos;
                            // let searchableText = '';
                            let filteredTodos = todos.filter(todo => todo.txt.toLowerCase().includes(uQuery))
                            return filteredTodos.length > 0;
                        }
                    });
                }
                return filteredNotes;
             }
           
         }   
         
}



