import { Utils } from '../../../service/utils.service.js';
import { emailServices } from "../../email/service/email.service.js";

export default {
    template: `
    <section>
        <button @click="isCompose">Compose</button> 
        <button @click="isCompose">Safe to Draft</button> 
        <button @click="isCompose">Back without saving</button> 
        <form v-if="!set" class="email-compose flex">
            <label class="first" v-if="!set" for="to">New Email</label>
            <div>
            <label v-if="!set" for="to">To:</label>
            <input v-if="!set" type="email" pattern=".+@globex.com" size="30" required v-model="email.to"/>
            </div>
            <div>
            <label v-if="!set" for="Cc">Cc:</label>
            <input v-if="!set" type="text" v-model="email.cc"/>
            </div>
            <div>
            <label v-if="!set" value="blabla"for="Bcc">Bcc:</label>
            <input v-if="!set" type="text" v-model="email.bcc"/>
            </div>
            <div>
            <label v-if="!set" for="Subject">Subject:</label>
            <input v-if="!set" type="text" v-model="email.subject"/>
            </div>
            <div>
            <textarea class="last" v-if="!set" type="text" v-model="email.body"></textarea>
            </div>
            <button :disabled="!isValid" v-if="!set" @click.prevent="logEmail">Send</button>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                id: Utils.getRandomId(),
                to: 'Muki@gmail.com',
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
    computed: {
        isValid() {
            return (this.email.to && (this.email.subject || this.email.body))
        }
    },
    methods: { // to move the functions to the parent
        isCompose() {
            this.set = !this.set;
            this.$emit('clicked', this.set);
        },
        logEmail(){
            this.set = !this.set;
            this.$emit('clicked', this.set);
            emailServices.sendEmail(this.email);
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