
import { eventBus } from '../services/event-bus.service.js';

import userMsg from './user-msg.cmp.js' 

export default {
    template: `
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/user">User Profile</router-link> |
        <router-link to="/car">Car App</router-link> | 
        <router-link to="/about/us">About Us</router-link> | 
        <router-link to="/about/me">About Me</router-link> | 
    
        <user-msg />
    </nav>
    `,
    components: {
        userMsg
    }
}