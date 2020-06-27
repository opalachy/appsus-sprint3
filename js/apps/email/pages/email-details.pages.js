import { emailServices } from "../../email/service/email.service.js";


export default {
    template: `
        <section class="email-details container" v-if="email">
                <section>
                        <form class="email-details flex">
                            <label class="first details-label" for="Email">Email</label>
                            <div class="email-details-div">
                            <label class="details-label" for="to">To:</label>
                            <input class="details-input" type="email" v-model="email.to"/>
                            </div>
                            <div class="email-details-div">
                            <label class="details-label" for="Cc">Cc:</label>
                            <input class="details-input" type="text" v-model="email.cc"/>
                            </div>
                            <div class="email-details-div">
                            <label class="details-label" for="Bcc">Bcc:</label>
                            <input class="details-input" type="text" v-model="email.bcc"/>
                            </div>
                            <div class="email-details-div">
                            <label class="details-label" for="Subject">Subject:</label>
                            <input class="details-input" type="text" v-model="email.subject"/>
                            </div>
                            <div class="email-details-div">
                            <textarea class="last" type="text" v-model="email.body"></textarea>
                            </div>
                        </form>
                </section>

                <router-link class="button-details"  v-if="nextEmailId" @click.native="wasRead" :to="'/email/' + nextEmailId"><i class="fa fa-reply" aria-hidden="true"></i></router-link>    
                <router-link class="button-details"  to="/email"><i class="fa fa-sign-out" aria-hidden="true"></i></router-link>
                <button class="button-details"  @click="close"><i class="fa fa-share" aria-hidden="true"></i></button>
                <button class="button-details" @click="deleteEmail"><i class="fa fa-trash" aria-hidden="true"></i></button>
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