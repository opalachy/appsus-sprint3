
import './cmps/car-app.cmp.js';

Vue.config.keyCodes.f1 = 112;

new Vue({
    el: '#App',
    template: `
        <div>
            <header class="app-header">
                <h1>CARS</h1>
            </header>
            <car-app></car-app>

            <div v-on:click.self="parentClicked">
                <!-- <input @keyup.f1.prevent="sayHey"/> -->
                <input @keyup.alt.67="sayHey"/>
                parent
                <div @click.stop="childClicked">
                    child
                </div>
                parent
            </div>
        </div>
    `,
    methods: {
        parentClicked() {
            alert('parent clicked')
        },
        childClicked() {
            alert('child clicked')
        },
        sayHey() {
            console.log('HEY!');
        }
    }
});