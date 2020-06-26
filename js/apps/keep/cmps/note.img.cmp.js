
export default{
    props:['note'],
    template:`
    <div>
        <h1>{{note.info.title}}</h1>
        <img :src="note.info.url" />
        <!-- <input  type="text" placeholder="typesomething"/> -->
    </div>
    `,
}