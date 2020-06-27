
import { emailService } from './apps/email/service/email.service.js';
import { keepService } from './apps/keep/service/keep-service.js';

export default {
    props:['txt'],
    template: `
        <section>
                <router-link to="/email">Back</router-link>
                <router-link to="/keep">Back</router-link>
                
                <long-text :txt="email.body"></long-text>
      
            
        </section>
    `,
    data() {
        return {
            email: null,
            keep: null
        }
    },
    created() {
        const {emailId} = this.$route.params;
        emailService.getById(emailId)
            .then(email => {
                this.email = email;
            })
    },
    methods: {
        close() {
            this.$emit('close', null);
            this.$router.push('/email')
        }
    },
    computed: {
       
    },
    components:{
 
    }
}