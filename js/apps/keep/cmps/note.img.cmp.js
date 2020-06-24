
export default{
    props:['info'],
    template:`
    <li>
        <h1>{{info.title}}</h1>
        <img :src="info.url" />    
    </li>
    `
}