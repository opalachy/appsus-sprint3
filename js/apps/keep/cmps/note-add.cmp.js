// import NoteText from '../cmps/note-text.cmp.js'
// import NoteImg from '../cmps/note.img.cmp.js'
// import NoteTodos from '../cmps/note-todos.cmp.js'
// import NoteVideo from '../cmps/note-video.cmp.js'

//to pages
export default{
    template:`
    <section class="add-note">
        <section >
            <input type="text" v-model="inputValue" :placeholder="getPlaceHolderText(selectedNoteType)"/>
            <button :class="{'selected-btn': selectedNoteType === 'NoteText'}" v-on:click="selectNoteType('NoteText')">text</button>
            <button :class="{'selected-btn': selectedNoteType === 'NoteVideo'}" v-on:click="selectNoteType('NoteVideo')">video</button>
            <button :class="{'selected-btn': selectedNoteType === 'NoteImg'}" v-on:click="selectNoteType('NoteImg')">image</button>
            <button :class="{'selected-btn': selectedNoteType === 'NoteTodos'}" v-on:click="selectNoteType('NoteTodos')">todo</button>
        </section>
        <button v-on:click="addNote(selectedNoteType)">add</button>
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
        //from service
        addNote(noteType){
            var newNote = {};
            newNote.type = noteType;
            newNote.info = {};
            newNote.style = {
                activeColor:'grey',
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
