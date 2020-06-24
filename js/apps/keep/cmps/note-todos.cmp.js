
export default{
   props:['info'],
    template:`
    <div>
        <h1>{{info.todos[1].txt}}</h1>  
        <h1>{{info.todos[0].txt}}</h1>
    </div>
  
     `
}