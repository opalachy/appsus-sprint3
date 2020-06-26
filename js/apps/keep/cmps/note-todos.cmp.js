import { keepServices } from '../../keep/service/keep-service.js';

export default{
    props:['info','note'],
    template:`
    <div>
        <li  v-for="(todo,idx) in note.info.todos" > <p @click="doneTask(idx)" v-bind:class="{done:todo.doneAt}">{{todo.txt}}</p></li>
    </div> 
     `,
     methods:{
        doneTask(idx){
            if( this.note.info.todos[idx].doneAt){
                this.note.info.todos[idx].doneAt = null
            }
            else this.note.info.todos[idx].doneAt = Date.now();
            keepServices.saveNoteToStorage()
        }
    },
}