import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
        <ul class="email-list clean-list flex wrap align-center space-around">
            <email-preview v-for="email in emails" @click.native="selectEmail(email)" :email="email" :key="email.id"/>
        </ul>
    `,
    methods: {
        selectEmail(email) {
            this.$emit('selected', email);
        }
    },
    components:{
        emailPreview
    }
}