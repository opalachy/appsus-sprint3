export default{
    template:`
    <section class="add-note">
        <input type="text"/>
        <button v-on:click="log('NoteVideo')">txt</button>
        <!-- <button @onclick="log()" @:key="note.type.NoteVideo">video</button>
        <button @onclick="log()" @:key="note.type.NoteImg">img</button>
        <button @onclick="log()" @:key="note.type.NoteTodos">todo list</button> -->
    </section>
    `,
    data(){
        return{
            mapper:{
                txt: "NoteText"
            }
        }
    },
    methods:{
        log: function(component){
            console.log(component);
            
        }
    }
}

