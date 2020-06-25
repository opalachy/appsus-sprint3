
import { emailServices } from '../service/email.service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filiter.cmp.js';

export default {
    template: `
    <main class="email-app">
        <h1>Hello</h1>
        <email-filter @filtered="setFilter" ></email-filter>
        <email-list :emails="emailsToShow" ></email-list >
    </main>   
`,
    data() {
        return {
            emails: [],
            currEmail: null,
            filterBy: null
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
               const stateRead = (filterBy.isRead === 'Read')? true: false;
                
                filteredEmails = filteredEmails.filter(email => {
                    return email.isRead === stateRead;
                });
            }
            return filteredEmails;
        }


    },
    components: {
        emailFilter,
        emailList
    }
}