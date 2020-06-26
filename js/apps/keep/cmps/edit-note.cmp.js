import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note.img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmp.js'
import NoteVideo from '../cmps/note-video.cmp.js'

export default{
    props:['note'],
    template: `
        <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
            <component :is="note.type" :note="note"></component>
              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    Edit
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
        `,
         data()  {
            return{
            showEditor: false
            } 
          },
          created(){
              console.log(this.note);
              
          },
          components:{
            NoteText,
            NoteImg,
            NoteTodos,
            NoteVideo
          }
}