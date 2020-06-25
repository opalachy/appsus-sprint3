import { keepServices } from '../../keep/service/keep-service.js';

export default{
    props:['info','note'],
    template:`
    <div>
        <h1>{{info.title}}</h1>
        <img :src="info.url" />
        <button @click="deleteNote">delete</button>    
    </div>
    `,
    methods:{
        deleteNote(){
            keepServices.RemoveNote(this.note.id);
        }
    }

}