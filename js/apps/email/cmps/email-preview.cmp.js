// import emailDetails from '../pages/email-details.cmp.js'
{/* <router-link :to="'/email/' + email.id">Details</router-link> |  */}

export default {
    props: ['email'],
    template: `
        <li class="email-preview">
        <h2>{{email.sentAt}} </h2>
        <h2>{{email.subject}} </h2>
        </li>
    `,
    data() {
        return {

        }
    },
    computed: {
      
    },
    components:{
        // emailDetails
    }
};
