
export default{
    props:['note','isEdit'],
    template:`
    <div>
        <h1>{{note.info.title}}</h1>
        <img :src="note.info.url" />
        <input v-if="isEdit" type="text" v-model="note.info.title"/>
        <input v-if="isEdit" type="text" v-model="note.info.url"/>
    </div>
    `,
}