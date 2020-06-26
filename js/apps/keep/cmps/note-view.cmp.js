import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note.img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmp.js'
import NoteVideo from '../cmps/note-video.cmp.js'
import { keepServices } from '../../keep/service/keep-service.js';
import colorPicker from './color-picker.cmp.js';
import editNote from '../cmps/edit-note.cmp.js';

export default{
    props:['note','cmpType'],
    template:`
    <div v-bind:style="{'background-color': note.style.activeColor}">    
        <component :is="cmpType" :note="note"></component>
        <button @click="deleteNote">delete</button>
        <button id="show-modal" @click="showEditor = true">Show Modal</button>
        <editNote v-if="showEditor" :note="note" @close="showEditor = false"></editNote>
        <button @click='openPalette'>theme</button>
        <button @click='addToPin'>{{getPinBtnText()}}</button>
        <!-- <button>copy</button> -->
        <color-picker v-if="isPaletteShown" @pickedColor="colorPicked"></color-picker>
    </div>
    `,
    data(){
        return{
            isPaletteShown: false,
            showEditor : false
        }
    },

    methods:{
        getPinBtnText() {
            return this.note.isPinned ? 'unpin' : 'pin'; 
        },
        deleteNote(){
            keepServices.RemoveNote(this.note.id);
        },
        openPalette(){
            this.isPaletteShown= !this.isPaletteShown;
        },
        colorPicked(color){
           this.note.style.activeColor = color;
           this.isPaletteShown= !this.isPaletteShown;
           keepServices.saveNoteToStorage()
        },
        addToPin(){
            this.note.isPinned = !this.note.isPinned;
            keepServices.saveNoteToStorage()
        },
        // showEditor(){
        //    this.showEditor = true;
        //     console.log(this.note);
            
        // }
        
    },

    components:{
        colorPicker,
        NoteText,
        NoteImg,
        NoteTodos,
        NoteVideo,
        editNote

    },
}