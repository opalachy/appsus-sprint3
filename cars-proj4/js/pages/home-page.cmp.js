import {eventBus} from '../services/event-bus.service.js' 



export default {
    template: `
    <section class="home-page">
        <h1 @click="report">Home </h1>
        
    </section>    
    
    `,
    methods: {
        report() {
            eventBus.$emit('somethingChanged', 18)
            
        }
    }
}