
import {myRouter} from './routes.js'


new Vue({
    el: '#App',
    router: myRouter,
    template: `
    <div>
        <div  @click="toggle" class="screen" :class="{'menu-open': open}" ></div>
       <header>
         <nav class="main-navbar flex wrap align-center space-between">
            <div>
            <h1>Appsus</h1>
            </div>
               <button @click="toggle" class="btn-menu">☰</button>
               <div @click="close" class="routes flex space-between" :class="{'menu-open': open}">
                  <router-link to="/about">About Us</router-link> 
                  <router-link to="/books">Books App</router-link> 
                  <router-link to="/email">Email App</router-link>
                  <router-link to="/keep">Keep App</router-link> 
               </div>
        </nav>
      </header>
      <main>
         <router-view />
      </main>
      <footer>
         coffeerights &copy 2020
      </footer>
    </div>
    `,
      data(){
       return{
            open: false
         }
      },
    methods:{
      toggle(){
         this.open = !this.open; 
      },
      close() {
         this.open = false;
      }
    }
});