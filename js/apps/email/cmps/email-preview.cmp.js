{/* <button v-if="set" @click="isRecompose">Recompose</button>  */}
import { emailServices } from "../../email/service/email.service.js";

export default {
    props: ['email'],
    template: `
        <div class="email-preview" flex wrap>
            Email was sent at: {{email.sentAt}}
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
            <button @click="markNotRead"><i class="fa fa-envelope-o" aria-hidden="true"></i></button>
            <button @click="wasRead"><i class="fa fa-envelope-open-o" aria-hidden="true"></i></button>
            <button @click="deleteEmail"><i class="fa fa-trash" aria-hidden="true"></i></button>
            <button :class="isMarkStars" @click="markStar"><i class="fa fa-star-o" aria-hidden="true"></i></button>
            <button v-if="set">Recompose</button> 
           
        </div>
    `,
    data() {
        return {
            isStars: false,
            isInbox: true,
            isDelete: true,
            set: this.email.isDraft



        }
    },
    computed: {
        isRead() {
            return (this.email.isRead) ? 'normal' : 'bold';
        },
        isMarkStars() {
            return (this.email.isStars) ? 'Stars' : '';
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
            emailServices.removeEmail(this.email.id);
        },
        markStar() {
            this.isStars = !this.isStars;
            this.isInbox = !this.isInbox;
            this.email.isStars = this.isStars;
            this.email.isInbox = this.isInbox;
        }
    }
};
