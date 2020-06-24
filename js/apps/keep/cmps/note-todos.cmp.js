
export default{
   props:['info'],
    template:`
    <div>
        <li v-for="todo in info.todos">{{todo.txt}}</li>  
    </div>
  
     `
}