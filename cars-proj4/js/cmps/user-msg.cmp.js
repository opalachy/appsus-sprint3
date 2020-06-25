
import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js';

export default {
    template: `
        <section class="user-msg" v-if="msg" :class="msgClass">
            <button @click="close">x</button>
            <p>{{msg.txt}}</p>
        </section>
    `,
    data() {
        return {
            msg: null,
            timeout: null
        }
    },
    computed: {
        msgClass() {
            if (!this.msg) return ''
            return this.msg.type;
        }
    },
    created() {
        eventBus.$on(EVENT_SHOW_MSG, msg =>{
            clearTimeout(this.timeout)
            this.msg = msg;
            this.timeout = setTimeout(()=>{this.msg = null}, 3000)
        })
    },
    methods: {
        close() {
            this.msg = null;
            clearTimeout(this.timeout)
        }
    }
}