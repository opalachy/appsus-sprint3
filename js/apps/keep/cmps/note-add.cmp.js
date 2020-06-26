// import NoteText from '../cmps/note-text.cmp.js'
// import NoteImg from '../cmps/note.img.cmp.js'
// import NoteTodos from '../cmps/note-todos.cmp.js'
// import NoteVideo from '../cmps/note-video.cmp.js'

//to pages
export default{
    template:`
    <section class="add-note">
            <input type="text" v-model="inputValue" placeholder="text"/>
            <button v-on:click="addNote('NoteText')">text</button>
            <button v-on:click="addNote('NoteVideo')">video</button>
            <button v-on:click="addNote('NoteImg')">image</button>
            <button v-on:click="addNote('NoteTodos')">todo</button>
        </section>
    `,
    data(){
        return{
            inputValue: '',
        }
    },
   
    methods:{
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
             
            // console.log('calling emit', newNote);
            this.$emit('onAddNote', newNote);
            this.inputValue = ''
        }
    }
}
