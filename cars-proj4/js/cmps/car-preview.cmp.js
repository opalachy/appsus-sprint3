
import {eventBus} from '../services/event-bus.service.js'; 

export default {
    props: ['car'],
    template: `
        <li class="car-preview">
            {{car.vendor}}
            {{car.speed}}
            {{car.features}}
            <router-link :to="'/car/' + car.id + '/' + car.vendor">Details</router-link> | 
            <router-link :to="'/car/edit/' + car.id">Edit</router-link>
            <button @click="send(car.vendor)">Send msg</button>
        </li>
    `,
    methods: {
        send(vendor) {
            eventBus.$emit('showMsg', `car: ${vendor}, was clicked`);
        }
    }
};