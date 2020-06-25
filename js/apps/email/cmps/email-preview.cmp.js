
 import { emailServices } from "../../email/service/email.service.js";



export default {
    props: ['email'],
    template: `
        <div class="email-preview">
        <pre>New Email</pre>
        <pre :class="isRead"> Sent At: {{email.sentAt}} </pre>
        <pre :class="isRead"> Subject: {{email.subject}} </pre>
        <pre :class="isRead" class="last"> {{email.body.substring(0, 30) + '...'}} </pre>
        <router-link @click.native="wasRead" :to="'/email/' + email.id + '/' + email.subject">Open Email</router-link> | 

        <button @click="markNotRead">Mark Not Read</button>
        <button @click="wasRead">Mark Read</button>
        <button @click="deleteEmail">Delete</button>
        </div>
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
        },
        markNotRead(){
            emailServices.changedToNotRead(this.email.id);
        },
        deleteEmail(){
            emailServices.RemoveEmail(this.email.id);
        }
    }
};
