import { Utils } from '../../../service/utils.service.js';
import { emailServices } from "../../email/service/email.service.js";

export default {
    template: `
    <section>
        <button @click="isCompose">Compose</button> </br>
        <form v-if="!set" class="email-compose flex">
            <label class="first" v-if="!set" for="to">New Email</label>
            <div>
            <label v-if="!set" for="to">To:</label>
            <input v-if="!set" type="text" v-model="email.to"/>
            </div>
            <div>
            <label v-if="!set" for="Cc">Cc:</label>
            <input v-if="!set" type="text" v-model="email.cc"/>
            </div>
            <div>
            <label v-if="!set" for="Bcc">Bcc:</label>
            <input v-if="!set" type="text" v-model="email.bcc"/>
            </div>
            <div>
            <label v-if="!set" for="Subject">Subject:</label>
            <input v-if="!set" type="text" v-model="email.subject"/>
            </div>
            <div>
            <textarea class="last" v-if="!set" type="text" v-model="email.body"></textarea>
            </div>
            <button v-if="!set" @click.prevent="logEmail">Send</button>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                id: Utils.getRandomId(),
                to: '',
                cc: '',
                bcc: '',
                subject: '',
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
        },
        logEmail(){
            this.set = !this.set;
            this.$emit('clicked', this.set);
            emailServices.logNewEmail(this.email);
            setTimeout(()=> {
                this.email = {
                    id: Utils.getRandomId(),
                    to: '',
                    cc: '',
                    bcc: '',
                    subject: '',
                    body: '',
                    isRead: false,
                    sentAt: new Date
                }
            },0.3)
        }
    }
}