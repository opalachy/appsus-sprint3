import { Utils } from '../../../service/utils.service.js';
import { emailServices } from "../../email/service/email.service.js";

export default {
    template: `
    <section class="email-compose-section">
        <button class="button-compose control" v-if="set" @click="isCompose"><i class="fa fa-envelope-o" aria-hidden="true"></i> Compose</button> 
        <button class="button-compose control" v-if="!set" @click="isSaveToDraft"><i class="fa fa-floppy-o" aria-hidden="true"></i> Draft</button> 
        <button class="button-compose control" v-if="!set" @click="isCompose"><i class="fa fa-sign-out" aria-hidden="true"></i> without saving</button> 
        <form v-if="!set" class="email-compose flex">
        <div>
            <div class="first compose-label" v-if="!set" for="to">New Email</div>
            <div class="email-compose-div">
            <label class="compose-label" v-if="!set" for="to">To:</label>
            <input class="compose-input" v-if="!set" type="email" pattern=".+@globex.com" size="30" required v-model="email.to"/>
            </div>
            <div class="email-compose-div">
            <label class="compose-label" v-if="!set" for="Cc">Cc:</label>
            <input class="compose-input" v-if="!set" type="text" v-model="email.cc"/>
            </div>
            <div class="email-compose-div">
            <label class="compose-label" v-if="!set" for="Bcc">Bcc:</label>
            <input class="compose-input" v-if="!set" type="text" v-model="email.bcc"/>
            </div>
            <div class="email-compose-div">
            <label class="compose-label" v-if="!set" for="Subject">Subject:</label>
            <input class="compose-input" v-if="!set" type="text" v-model="email.subject"/>
            </div>
            <div class="email-compose-div">
            <textarea class="last compose-textarea" v-if="!set" type="text" v-model="email.body"></textarea>
            </div>
            <div class="email-compose-div">
            <button :disabled="!isValid" v-if="!set" @click.prevent="logEmail"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
            </div>
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
                sentAt: new Date,
                isInbox: true,
                isStars: false,
                isDraft: false,
                isDelete: false
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
        isSaveToDraft(){
            this.email.isDraft = true;
            this.email.isInbox = false;
            this.logEmail();
        },
        logEmail() {
            this.set = !this.set;
            this.$emit('clicked', this.set);
            emailServices.sendEmail(this.email);
            setTimeout(() => {
                this.email = {
                    id: Utils.getRandomId(),
                    to: '',
                    cc: '',
                    bcc: '',
                    subject: '',
                    body: '',
                    isRead: false,
                    sentAt: new Date,
                    isInbox: true,
                    isStars: false,
                    isDraft: false,
                    isDelete: false
                }
            }, 0.3)
        }
    }
}