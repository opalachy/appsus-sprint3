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
    <div class="note-view" v-bind:style="{'background-color': note.style.activeColor}">    
        <component :is="cmpType" :note="note"></component>
            <i class="fa fa-trash" aria-hidden="true" @click="deleteNote"></i>
            <i class="fa fa-pencil-square-o" aria-hidden="true" id="show-modal" @click="showEditor = true"></i>
        <editNote v-if="showEditor" :note="note" @close="showEditor = false"></editNote>
            <i class= "fa fa-paint-brush" @click='openPalette'></i>
            <i :class="getPinBtnText()" @click='addToPin'></i>
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
            return this.note.isPinned ? 'fa fa-thumb-tack' : "gray fa fa-thumb-tack"; 
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