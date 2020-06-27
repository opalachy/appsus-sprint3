// import NoteText from '../cmps/note-text.cmp.js'
// import NoteImg from '../cmps/note.img.cmp.js'
// import NoteTodos from '../cmps/note-todos.cmp.js'
// import NoteVideo from '../cmps/note-video.cmp.js'

//to pages
export default{
    template:`
    <section class="add-note flex column">
        <section >
            <input type="text" @keyup="keyUp"  @blur="addNote(selectedNoteType)" v-model="inputValue" :placeholder="getPlaceHolderText(selectedNoteType)"/>
                <div>
                <i class="fa fa-font" aria-hidden="true" :class="{'selected-btn': selectedNoteType === 'NoteText'}" v-on:click="selectNoteType('NoteText')"></i>
                <i class="fa fa-youtube-square" aria-hidden="true" :class="{'selected-btn': selectedNoteType === 'NoteVideo'}" v-on:click="selectNoteType('NoteVideo')"></i>
                <i class="fa fa-picture-o" aria-hidden="true" :class="{'selected-btn': selectedNoteType === 'NoteImg'}" v-on:click="selectNoteType('NoteImg')"></i>
                <i class="fa fa-list" aria-hidden="true" :class="{'selected-btn': selectedNoteType === 'NoteTodos'}" v-on:click="selectNoteType('NoteTodos')"></i>
                </div>
        </section>
        <!-- <button v-on:click="addNote(selectedNoteType)"> -->
            <!-- <i class="fa fa-plus add-icon" aria-hidden="true" v-on:click="addNote(selectedNoteType)"></i> -->
        <!-- </button> -->
    </section>
    `,
    data(){
        return{
            inputValue: '',
            selectedNoteType:'NoteText',
            PlaceHolderText:{
                'NoteText': 'Enter text',
                'NoteVideo': 'Enter video URL',
                'NoteImg': 'Enter image URL',
                'NoteTodos': 'Enter comma sperated list',
            }
        }
    },
   
    methods:{
        selectNoteType(noteType){
            this.selectedNoteType = noteType;
        },
        getPlaceHolderText(noteType){    
           return this.PlaceHolderText[noteType]
        },
        keyUp(ev){
            if(ev.keyCode === 13){
                this.addNote(this.selectedNoteType)
            }
        },
        //from service
        addNote(noteType){
            var newNote = {};
            newNote.type = noteType;
            newNote.info = {};
            newNote.style = {
                activeColor:'lightgray',
            };

            if(this.inputValue === '')return
            if (noteType === 'NoteText') {
                newNote.info.txt = this.inputValue;
            }
            else if (noteType === 'NoteVideo') {
                newNote.info.url = this.inputValue;
            }
            else if (noteType === 'NoteImg') {
                newNote.info.url = this.inputValue;
            }
            else {
                newNote.info.todos = this.inputValue.split(',').map(txt => {return {txt: txt,  doneAt: null}});
            }
             
            this.$emit('onAddNote', newNote);
            this.inputValue = ''
        }
    }
}
