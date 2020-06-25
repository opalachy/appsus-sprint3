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
        <h1>Hello keep App</h1>
        <note-add @onAddNote="addNote"></note-add>
        <note-search @filtered="setFilter"></note-search>
        <!-- <color-picker></color-picker> -->
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
                console.log(notes);
                this.notes = notes;
            })
    },
    methods: {
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



