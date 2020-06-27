
import { emailServices } from '../service/email.service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filiter.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    template: `
    <main class="email-app">
        <email-compose @clicked="setCompose" > Compose</email-compose>
        <email-filter v-if="isCompose" @filtered="setFilter" ></email-filter>
        <email-list v-if="isCompose" :emails="emailsToShow" ></email-list >
    </main>   
`,
    data() {
        return {
            isCompose: true,
            emails: [],
            currEmail: null,
            filterBy: {
                searchBySubject:'',
                isRead: 'All',
                isInbox: true,
                isStars: false,
                isDraft: false,
                isDelete: false
            }
        }
    },
    created() {
        emailServices.getEmails()
            .then(emails => {
                this.emails = emails;
            })
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setCompose(isSet) {
            this.isCompose = isSet
        }

    },
    computed: {
        emailsToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.emails;
            var filteredEmails = this.emails;

            if (filterBy.searchBySubject) {

                filteredEmails = filteredEmails.filter(email => {
                    return (email.subject.toLowerCase().includes(filterBy.searchBySubject.toLowerCase()));
                });
            }

            if (filterBy.isRead !== 'All') {
                const stateRead = (filterBy.isRead === 'Read') ? true : false;

                filteredEmails = filteredEmails.filter(email => {
                    return email.isRead === stateRead;
                });
            }

            if (filterBy.isDelete) {

                filteredEmails = filteredEmails.filter(email => {
                    return email.isDelete === true;
                });
            }

            if (filterBy.isDraft) {

                filteredEmails = filteredEmails.filter(email => {
                    return email.isDraft === true && email.isDelete === false;
                });
            }

            if (filterBy.isStars) {

                filteredEmails = filteredEmails.filter(email => {
                    return email.isStars === true && email.isDelete === false;
                });
            }

            if (filterBy.isInbox) {

                filteredEmails = filteredEmails.filter(email => {
                    return email.isDelete === false && email.isDraft === false;
                });
            }


            return filteredEmails;
        }


    },
    components: {
        emailFilter,
        emailList,
        emailCompose
    }
}