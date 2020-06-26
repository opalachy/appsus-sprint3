import { emailServices } from "../../email/service/email.service.js";


export default {
    template: `
        <section class="email-details" v-if="email">
                <section>
                        <form class="email-compose flex">
                            <label class="first" for="Email">Email</label>
                            <div>
                            <label for="to">To:</label>
                            <input type="email" v-model="email.to"/>
                            </div>
                            <div>
                            <label for="Cc">Cc:</label>
                            <input type="text" v-model="email.cc"/>
                            </div>
                            <div>
                            <label for="Bcc">Bcc:</label>
                            <input type="text" v-model="email.bcc"/>
                            </div>
                            <div>
                            <label for="Subject">Subject:</label>
                            <input type="text" v-model="email.subject"/>
                            </div>
                            <div>
                            <textarea class="last" type="text" v-model="email.body"></textarea>
                            </div>
                        </form>
                </section>

                <router-link v-if="nextEmailId" @click.native="wasRead" :to="'/email/' + nextEmailId">Next Email</router-link>    
                <router-link to="/email">Back</router-link>
                <button @click="close">Undo</button>
                <button @click="deleteEmail"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </section>
    `,
    data() {
        return {
            email: null,
            nextEmailId: null
        }
    },
    created() {
        this.loadEmail();
    },
    methods: {
        close() {
            this.$router.back()
        },
        loadEmail() {
            const { emailId } = this.$route.params;
            emailServices.getById(emailId)
                .then(email => {
                    this.email = email;
                    emailServices.getNextEmail(this.email.id)
                        .then(emailId => {
                            this.nextEmailId = emailId;
                        })
                })
        },
        deleteEmail(){
            emailServices.removeEmail(this.email.id);
            this.$router.back()
        },
        wasRead() {
            emailServices.markRead(this.email.id);
        },
    },
    watch: {
        '$route.params.emailId'(newEmailId) {
            this.loadEmail();
        }
    }
}