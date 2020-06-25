import { emailServices } from "../../email/service/email.service.js";


export default {
    template: `
        <section class="email-details" v-if="email">
                <h2>{{email.subject}}</h2>
                <h2>{{email.body}}</h2>
                <h2>{{email.sentAt}}</h2>
                <pre>{{email}}</pre>

                <router-link v-if="nextEmailId" :to="'/email/' + nextEmailId">Next Email</router-link>    
                <router-link to="/email">Back</router-link>
                <button @click="close">Back</button>
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
                    emailServices.getNextEmailId(this.email.id)
                        .then(emailId => {
                            this.nextEmailId = emailId;
                        })
                })
        }

    },
    watch: {
        '$route.params.emailId'(newEmailId) {
            console.log('EMAIL ID CHANGED IN ROUTE', newEmailId);
            this.loadEmail();
        }
    }
}