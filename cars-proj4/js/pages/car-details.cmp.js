import { carService } from "../services/car.service.js";


export default {
    template: `
        <section class="car-details" v-if="car">
        <h1 v-show="ok">Hello!</h1>
        <component :is="tagName" > Hola AMigos </component>

        <h2>{{car.vendor}}</h2>
            <router-link v-if="nextCarId" :to="'/car/' + nextCarId">Next Car</router-link>
            
            <router-link to="/car">Back</router-link>
            <button @click="close">Back</button>
            <pre>{{car}}</pre>
        </section>
    `,
    data() {
        return {
            tagName :'h2',
            ok: false,
            car: null,
            nextCarId: null
        }
    },
    created() {
        this.loadCar();
        console.log('CMP CarDetails Created');
    },
    destroyed() {
        console.log('CMP CarDetails Destroyed');
        
    },
    methods: {
        close() {
            this.$router.back()
        },
        loadCar() {
            const { carId } = this.$route.params;

            carService.getById(carId)
                .then(car => {
                    this.car = car;

                    carService.getNextCarId(this.car.id)
                        .then(carId => {
                            this.nextCarId = carId;
                        })
                })
        }

    },
    watch: {
        '$route.params.carId'(newCarId) {
            console.log('CAR ID CHANGED IN ROUTE', newCarId);
            this.loadCar();
        }
    }
}