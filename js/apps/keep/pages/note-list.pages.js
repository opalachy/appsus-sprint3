
import NoteView from '../cmps/note-view.cmp.js'
//to cmp
export default{
     props:['notes'],
     template:`
    <ul class="note-list">
        <div  class="flex " v-for="(note,idx) in notes" v-bind:key="idx" :note="note">
            <note-view :cmp-type="note.type" :note="note"></note-view>
         </div>
    </ul>
    `,
    
    components:{
        NoteView
    },


}
