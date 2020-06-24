import notePreview from '../cmps/note-preview.cmp.js'
import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note.img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmp.js'

export default{
     props:['notes'],
     template:`
    <ul class="note-list">
        <div class="flex " v-for="note in notes" v-bind:key="note.type" :note="note">
           <component v-on:click.native="editNote" :is="note.type" :info="note.info"></component>
        </div>
        
    </ul>
    `,
    
    components:{
        notePreview,
        NoteText,
        NoteImg,
        NoteTodos

    },
    methods:{
        editNote: function(event){
            console.log('edit',event);
            
        }
    },

    created() {
        console.log(this.notes)
    }
}
