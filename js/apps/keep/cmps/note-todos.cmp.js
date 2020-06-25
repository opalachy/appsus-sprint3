import { keepServices } from '../../keep/service/keep-service.js';
import colorPicker from './color-picker.cmp.js'
export default{
    props:['info','note'],
    template:`
    <div v-bind:style="{'background-color': activeColor}">
        <li  v-for="(todo,idx) in info.todos" > <p @click="doneTask(idx)" v-bind:class="{done:todo.doneAt}">{{todo.txt}}</p></li>
        <button @click="deleteNote">delete</button>
        <button @click='openPalette'>theme</button>
        <color-picker v-if="isPaletteShown" @pickedColor="colorPicked"></color-picker>  
    </div>
  
     `,
     data(){
        return{
            isPaletteShown: false,
            activeColor: 'grey',
        }
    },
     methods:{
        deleteNote(){
            keepServices.RemoveNote(this.note.id);
        },
        openPalette(){
            this.isPaletteShown= !this.isPaletteShown;
        },
        colorPicked(color){
           this.activeColor = color;
           this.isPaletteShown= !this.isPaletteShown;
        },
        doneTask(idx){
            if( this.info.todos[idx].doneAt){
                this.info.todos[idx].doneAt = null
            }
            else this.info.todos[idx].doneAt = Date.now();
        }
    },
    components:{
        colorPicker
    }
}