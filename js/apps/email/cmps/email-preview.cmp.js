{/* <button v-if="set" @click="isRecompose">Recompose</button>  */}
import { emailServices } from "../../email/service/email.service.js";

export default {
    props: ['email'],
    template: `
        <div class="email-preview email-preview-div" >
            <p class="text-media">Email was sent at: {{email.sentAt}}</p>
            <div class="email-preview-div">
                        <form class="email-preview-form flex">
                            <div class="preview-div">
                                <label class="preview-label" :class="isRead" for="to">To:</label>
                                <textarea disabled class="preview-input" :class="isRead" type="email" v-model="email.to"></textarea>
                            </div>
                            <div class="preview-div">
                                <label class="preview-label" :class="isRead" for="Subject">Subject:</label>
                                <textarea disabled class="preview-input" :class="isRead" type="text" v-model="email.subject"> </textarea>
                            </div>
                            <div class="preview-div">
                                <textarea disabled :class="isRead" class="preview-last"  type="text">{{email.body.substring(0, 100) + '...'}}</textarea>
                            </div>
                        </form>
            </div>
            <div class="bottom-button">
                <router-link @click.native="wasRead" :to="'/email/' + email.id + '/' + email.subject"><i class="fa fa-info-circle" aria-hidden="true"></i></router-link> 
                <button class="button-email-preview" v-if="notRead" @click="markNotRead"><i class="fa fa-envelope-open-o" aria-hidden="true"></i></button>
                <button class="button-email-preview" v-else @click="wasRead"><i class="fa fa-envelope" aria-hidden="true"></i></button>
                <button class="button-email-preview" @click="deleteEmail"><i class="fa fa-trash" aria-hidden="true"></i></button>
                <button class="button-email-preview" :class="isMarkStars" @click="markStar"><i class="fa fa-star" aria-hidden="true"></i></button>
                <button class="button-email-preview" v-if="set"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button> 
            </div>
        </div>
    `,
    data() {
        return {
            isStars: false,
            isInbox: true,
            isDelete: true,
            set: this.email.isDraft,
            notRead: this.email.isRead



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
            this.notRead = true;
            emailServices.markRead(this.email.id);
        },
        markNotRead() {
            this.notRead = false;
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
