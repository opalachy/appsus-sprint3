
import {myRouter} from './routes.js'

import {eventBus} from './services/event-bus.service.js' 

import navBar from './cmps/nav-bar.cmp.js'

// eventBus.$on('somethingChanged', (ev)=>{
//     console.log('somethingChanged', ev);
// })

new Vue({
    el: '#app',
    router: myRouter,
    template: `
        <div>
            <header class="app-header flex align-center space-between">
                <h1>CARS</h1>
                {{msg}}
                <nav-bar/>
            </header>
            <main>
                <router-view />
            </main>

            <footer>
                coffeerights 2020
            </footer>

        </div>
    `,
    data() {
        return {
            msg: ''
        }
    },
    created() {
        eventBus.$on('showMsg', (msg) => {
            this.msg = msg;
            alert(msg);
        });
    },
    components: {
        navBar
    }
});
