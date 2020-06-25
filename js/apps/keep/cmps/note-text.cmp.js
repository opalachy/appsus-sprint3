import { keepServices } from '../../keep/service/keep-service.js';
import colorPicker from './color-picker.cmp.js'
export default{
    props:['info','note'],
    template:`
    <div v-bind:style="{'background-color': activeColor}">
        <li>{{info.txt}}</li>
        <button @click="deleteNote">delete</button>
        <!-- <button>edit</button> -->
        <button @click='openPalette'>theme</button>
        <!-- <button>copy</button> -->
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
        }
    },

    components:{
        colorPicker
    }


}