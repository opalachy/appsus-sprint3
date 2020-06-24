// import noteSearch from '../cmp/note-search.cmp.js'
import { keepServices } from '../../keep/service/keep-service.js';
import noteSearch from '../cmps/note-search.cmp.js';
import noteList from './note-list.pages.js';

export default {
    template: `
    <main>
        <h1>Hello keep App</h1>
        <note-search></note-search>
        <note-list :notes="notes"></note-list>

    </main>   
`,
data(){
    return{
        notes:[]
    }
},
components:{
    noteSearch,
    noteList
},
created() {
    keepServices.getNotes()
        .then(notes => {
            console.log(notes);
            this.notes = notes;
        })
},
}