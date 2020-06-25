

import carList from '../cmps/car-list.cmp.js';
import carFilter from '../cmps/car-filter.cmp.js';
import { carService } from '../services/car.service.js';


export default {
    template: `
        <main class="app-main car-app">
            <router-link to="/car/edit">New Car</router-link>
            <car-filter @filtered="setFilter"/>
            <car-list :cars="carsToShow"></car-list>
        </main>
    `,
    data() {
        return {
            cars: [],
            currCar: null,
            filterBy: {
                searchStr: '',
                speed: 0
            }
            // filterBy: null
        }
    },
    computed: {
        carsToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.cars;

            var filteredCars = this.cars.filter(car => {
                return car.vendor.toLowerCase().includes(filterBy.searchStr.toLowerCase());
            });
            filteredCars = filteredCars.filter(car => {
                return (filterBy.speed) ? car.speed === filterBy.speed : true;
            });

            return filteredCars;
        },
    },
    created() {
        carService.getCars()
            .then(cars => {
                this.cars = cars;
            })
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
     
       
    },
    components: {
        carList,
        carFilter,
    }

}