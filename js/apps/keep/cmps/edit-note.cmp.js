import NoteText from '../cmps/note-text.cmp.js'
import NoteImg from '../cmps/note.img.cmp.js'
import NoteTodos from '../cmps/note-todos.cmp.js'
import NoteVideo from '../cmps/note-video.cmp.js'
import { keepServices } from '../../keep/service/keep-service.js';
export default{
    props:['note'],
    template: `
        <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
            <component :is-edit="true" :is="note.type" :note="note"></component>
              <div class="modal-footer">
            
                <!-- <input type="text" value="note.title"/> -->
                  <button class="modal-default-button" @click="saveEdit()">
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
          methods:{
            saveEdit(){
              console.log(this.note);
              keepServices.saveNoteToStorage()
              this.$emit('close')
            }
            
          },
          components:{
            NoteText,
            NoteImg,
            NoteTodos,
            NoteVideo,
            keepServices
          }
}