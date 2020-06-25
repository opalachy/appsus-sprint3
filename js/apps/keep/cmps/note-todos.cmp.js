import { keepServices } from '../../keep/service/keep-service.js';

export default{
    props:['info','note'],
    template:`
    <div >
        <li v-for="todo in info.todos">{{todo.txt}}</li>
        <button @click="deleteNote">delete</button>  
    </div>
  
     `,
     methods:{
        deleteNote(){
            keepServices.RemoveNote(this.note.id);
        }
    }
}