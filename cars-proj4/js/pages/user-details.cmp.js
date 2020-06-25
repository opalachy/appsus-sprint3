import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js';



export default {
    template: `
        <section class="user-details">
            <h4>
                <button @click="val--">-</button>
                Val: {{val}}
            </h4>
            <h2>User Details</h2>
            <h3>{{user.fullName}}</h3>
            <input v-model="user.fullName" />
            <h4>
                <button @click="dec">-</button>
                Score: {{userScore}}
                <button @click="inc">+</button>
            </h4>
            <span v-for="n in 10">{{ n }} </span>

            <div class="ball" :class="ballClass" :style="{marginLeft: user.score + 'px'}"></div>
        </section>
    `,
    data() {
        return {
            val: 90,
            user: {fullName: 'Shraga Puts', score: 10},
            interval: null
        }
    },
    computed: {
        userScore() {
            return this.user.score.toLocaleString()
        },
        ballClass() {
            return {
                bubu: this.user.score > 15,
                mumu: this.user.score < 5,
                kuku: this.user.fullName === 'puki',
            }
        }
    },
    created() {
        console.log('UserDetails cmp Created');
        // this.interval = setInterval(() => {
        //     console.log('I am RUNNING!');
        //     this.inc()
        // }, 1000);
    },
    destroyed() {
        console.log('UserDetails cmp Desroyed');
        clearInterval(this.interval);
    },
    methods: {
        inc() {
            this.user.score++;
            eventBus.$emit(EVENT_SHOW_MSG, {txt: 'User just got Better', type: 'success'})
        },
        dec() {
            this.user.score--;
            eventBus.$emit(EVENT_SHOW_MSG, {txt: 'User just got WORST', type: 'fail'})
        }
    },
    watch: {
        val(newValue, oldValue) {
            console.log('VAL was changed from:', oldValue, 'to:', newValue);
        },
        'user.score'(){
            console.log('SCORE WAS CHANGED');
        },
        user: {
            deep: true,
            handler(newUser){
                console.log('USER WAS CHANGED to:', newUser);
            }
        }
    }
}