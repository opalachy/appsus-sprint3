
import {CarService} from '../services/car.service.js';


Vue.component('car-edit', {
    template: `
        <form class="car-edit" v-on:submit.prevent="saveCar">
            <h2>Add Car</h2>
            vendor: <input type="text" v-model.trim="carToEdit.vendor"/>
            <br/>
            speed: <input type="number" v-model.number="carToEdit.speed"/>
            <br/>
            isAuto: <input type="checkbox" v-model="carToEdit.isAuto"/>
            <br/>
            turbo: <input type="checkbox" value="turbo" v-model="carToEdit.features"/>
            waterProof: <input type="checkbox" value="waterProof" v-model="carToEdit.features"/>
            <br/>
            <select v-model="carToEdit.model" multiple>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
            </select>
            <pre>{{carToEdit}}</pre> 
            
            <button v-bind:disabled="isDisabled">Save</button>
        </form>
    `,
    data() {
        return {
            carToEdit: {
                vendor: '',
                speed: 20,
                isAuto: false,
                features: [],
                model: [2005]
            },
        }
    },
    computed: {
        isDisabled() {
            return (this.carToEdit.vendor)? false : true;
        }
    },
    methods: {
        saveCar() {
            CarService.saveCar(this.carToEdit);

            this.carToEdit = {
                vendor: '',
                speed: 20,
                isAuto: false,
                features: [],
                model: [2005]
            };
        }
    }
})