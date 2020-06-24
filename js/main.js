{/* <router-link to="/">Home</router-link> | */}
{/* <router-link to="/about">About</router-link> |  */}
{/* <book-app></book-app> */}

import {myRouter} from './routes.js'

new Vue({
    el: '#App',
    router: myRouter,
    template: `
    <div>
        
       <header>
         <nav>
           
            <router-link to="/book">Book Profile</router-link> |
            <router-link to="/books">Books App</router-link> | 
            <router-link to="/email">Email App</router-link> | 
            <router-link to="/keep">Keep App</router-link> | 
           
        </nav>
      </header>
      <main>
         <router-view />
      </main>

      <footer>
         coffeerights 2020
      </footer>
    </div>
    `,
});