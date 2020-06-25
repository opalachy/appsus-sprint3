
import {carService} from '../services/car.service.js';

export default {
    template: `
    <section class="car-edit">
        <form  @submit.prevent="saveCar">
            <h2>{{(!carToEdit.id)? 'Add' : 'Edit'}} Car</h2>
            vendor: <input type="text" v-model.trim="carToEdit.vendor"/>
            <br/>
            speed: <input type="number" v-model.number="carToEdit.speed"/>
            <br/>
            isAuto: <input type="checkbox" v-model="carToEdit.isAuto"/>
            <br/>
            turbo: <input type="checkbox" value="turbo" v-model="carToEdit.features"/>
            waterProof: <input type="checkbox" value="waterProof" v-model="carToEdit.features"/>
            <br/>
            <select v-model="carToEdit.model">
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
            </select>
            <button :disabled="!isValid">Save</button>

            
            </form>
            <hr />
            <pre>{{carToEdit}}</pre> 
        </section>
    `,
    data() {
        return {
            carToEdit: carService.getEmptyCar()        
        }
    },
    created() {
        const carId = this.$route.params.theCarId;
        if (carId) {
            carService.getById(carId)
                .then(car => {
                    this.carToEdit = {...car};
                })
        }
    },
    computed: {
        isValid() {
            return (this.carToEdit.vendor && this.carToEdit.speed > 0)
        }
    },
    methods: {
        saveCar() {
            carService.saveCar(this.carToEdit)
                .then(savedCar => {
                    console.log('SAVED CAR: ', savedCar);
                    // this.$router.push('/car')
                })
        }
    },
}