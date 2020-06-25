 import emailDetails from '../pages/email-details.pages.js'
 import { emailServices } from "../../email/service/email.service.js";
//  <router-link :to="'/email/' + email.id">Details</router-link> | 


export default {
    props: ['email'],
    template: `
        <li class="email-preview">
        <h2 :class="isRead"> {{email.sentAt}} </h2>
        <h2 :class="isRead"> {{email.subject}} </h2>
        <router-link @click.native="wasRead" :to="'/email/' + email.id + '/' + email.subject">Details</router-link> | 
        </li>
    `,
    data() {
        return {

        }
    },
    computed: {
        isRead(){
            return (this.email.isRead)? 'normal': 'bold';
        }
      
    },
    methods:{
        wasRead(){
            emailServices.changedToRead(this.email.id);
 
        }
    },
    components:{
        emailDetails
    }
};
