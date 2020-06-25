import { keepServices } from '../../keep/service/keep-service.js';
import colorPicker from './color-picker.cmp.js'
export default{
    props:['info','note'],
    template:`
    <div v-bind:style="{'background-color': activeColor}">
        <h1>{{info.title}}</h1>
        <img :src="info.url" />
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
    },
   
    components:{
        colorPicker
    }

}