import { keepServices } from '../../keep/service/keep-service.js';

export default{
    props:['info','note'],
   template:`
    <div>
    <iframe width="250" height="300" :src="getUrl()" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button @click="deleteNote">delete</button>
    </div>
    `,
    methods: {
        getUrl() {
            var str = this.info.url;
            var res = str.replace('watch?v=', 'embed/');
            console.log('res is',res);
            return res;
        },
        deleteNote(){
            keepServices.RemoveNote(this.note.id);
        }
    },
    // methods:{
    //     deleteNote(){
    //         keepServices.RemoveNote(this.note.id);
    //     }
    // }

}