import notePreview from '../cmps/note-preview.cmp.js'
import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note.img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmp.js'

export default{
     props:['notes'],
     template:`
    <ul class="note-list">
        <div v-for="note in notes" v-bind:key="note.type" :note="note">
           <component :is="note.type" :info="note.info" />
        </div>
        
    </ul>
    `,
    
    components:{
        notePreview,
        NoteText,
        NoteImg,
        NoteTodos

    },
    created() {
        console.log(this.notes)
    }
}
