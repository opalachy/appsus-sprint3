import { Utils } from '../../../service/utils.service.js';

export default {
    template: `
        <form class="email-compose">
            <button @click="isCompose">Compose</button> </br>
            <label for="to">New Email</label>
            <label for="to">To:</label>
            <input v-if="set" type="text" v-model="email.to"/></br>
            <label for="to">Cc:</label>
            <input v-if="!set" type="text" v-model="email.bcc"/>
            <label for="to">Subject:</label>
            <input v-if="!set" type="text" v-model="email.subject"/>
            <input v-if="!set" type="text" v-model="email.body"/>

            <button v-if="!set" @click="isCompose">Send</button>
        </form>
    `,
    data() {
        return {
            email: {
                id: Utils.getRandomId(),
                to:'',
                cc:'',
                bcc:'',
                subject:'',
                body: '',
                isRead: false,
                sentAt: new Date
            },
           set: true
        }
    },
    methods: {
        isCompose() {
            this.set = !this.set;
            this.$emit('clicked', this.set);
        }

    }
}