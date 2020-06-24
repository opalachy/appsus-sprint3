
export default{
    props:['info'],
    template:`
    <div>
    <h1>{{info.title}}</h1>
    <img src="info.url" />    
    </div>
    `
}