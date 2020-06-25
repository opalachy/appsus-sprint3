// import notePreview from '../cmps/note-preview.cmp.js'
import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note.img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmp.js'
import NoteVideo from '../cmps/note-video.cmp.js'

export default{
     props:['notes'],
     template:`
    <ul class="note-list">
        <div  class="flex " v-for="(note,idx) in notes" v-bind:key="idx" :note="note">
           <component :list="listId" @click.native="editNote" :is="note.type" :info="note.info"></component>
        </div>
    </ul>
    `,
    
    components:{
        // notePreview,
        NoteText,
        NoteImg,
        NoteTodos,
        NoteVideo

    },
    methods:{
        editNote: function(event){
            console.log('edit',event);
            
        }
        
    },

    created() {
        console.log(this.notes)
    },
    computed:{
        listId(){
            return "list" + this._uid;
        }

     }

}

// 
