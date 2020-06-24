
import { emailServices } from '../service/email.service.js'
import emailList from '../cmps/email-list.cmp.js';

export default {
    template: `
    <main>
        <h1>Hello</h1>
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
    computed: {
        emailsToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.emails;
            var filteredEmails = this.emails;

            if (filterBy.searchByTitle) {

                filteredEmails = filteredEmails.filter(email => {
                    return (email.title.toLowerCase().includes(filterBy.searchByTitle.toLowerCase()));
                });
            }

            if (filterBy.fromPrice) {
                filteredEmails = filteredEmails.filter(email => {
                    return (email.listPrice.amount >= filterBy.fromPrice)
                });
            }

            if (filterBy.toPrice) {
                filteredEmails = filteredEmails.filter(email => {
                    return (email.listPrice.amount <= filterBy.toPrice)
                });
            }
            return filteredEmails;
        }


    },
    components: {
        // emailFilter,
        emailList
    }
}