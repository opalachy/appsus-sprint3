import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
        <ul class="email-list clean-list flex wrap align-center column space-around"> 
            <email-preview v-for="email in emails" :email="email" :key="email.id"/>
        </ul>
    `,
    components:{
        emailPreview
    }
}