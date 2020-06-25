
export default{
    template:`
    <div class="Palette">
        <div class="color" 
             v-for="(color, idx) in backgroundColor" 
             :style="{'background-color': color}" 
             @click="changeColor(color)"
             >
        </div>
    </div>
    `,
    data() {
        return{
             backgroundColor : ['blue','red','teal','grey','pink','purple']   
        }
        
    },
    methods:{
         changeColor(color){
            console.log(color);
            this.$emit('pickedColor',color);
        }
    }

   

}