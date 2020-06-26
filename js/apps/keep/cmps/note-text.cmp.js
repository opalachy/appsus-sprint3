
export default{
    props:['note', 'isEdit'],
    template:`
    <div>
        <li v-if="!isEdit">{{note.info.txt}}</li>
        <input v-if="isEdit" type="text" v-model="note.info.txt"/>
    </div>
       
     `,

}