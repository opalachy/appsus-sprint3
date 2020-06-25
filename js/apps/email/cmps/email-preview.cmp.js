
import { emailServices } from "../../email/service/email.service.js";

 // <button @click="markStar">Star</button> //need to add function

export default {
    props: ['email'],
    template: `
        <div class="email-preview" flex wrap>
     
        <div>
                    <form class="email-preview flex">
                        <div>
                        <label :class="isRead" for="to">To:</label>
                        <input :class="isRead" type="email" v-model="email.to"/>
                        </div>
                        <div>
                        <label :class="isRead" for="Subject">Subject:</label>
                        <input :class="isRead" type="text" v-model="email.subject"/> 
                        </div>
                        <div>
                        <textarea :class="isRead" class="preview-last"  type="text">{{email.body.substring(0, 100) + '...'}}</textarea>
                        </div>
                    </form>
        </div>
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
        isRead() {
            return (this.email.isRead) ? 'normal' : 'bold';
        }

    },
    methods: { //to move the functions to the parent
        wasRead() {
            emailServices.markRead(this.email.id);
        },
        markNotRead() {
            emailServices.markNotRead(this.email.id);
        },
        deleteEmail() {
            emailServices.RemoveEmail(this.email.id);
        }
    }
};
