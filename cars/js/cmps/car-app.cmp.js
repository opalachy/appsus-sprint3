

import './car-list.cmp.js';
import './car-edit.cmp.js';
import './car-filter.cmp.js';
import './car-details.cmp.js';

import {CarService} from '../services/car.service.js';


Vue.component('car-app', {
    template: `
        <main class="app-main car-app">
            <car-filter @click.native="sayWoW" @filter="setFilter"/>
            <car-details @close="setCurrCar" v-if="currCar" :car="currCar"/>
            <car-list @carSelected="setCurrCar" v-else v-bind:cars="carsToShow"></car-list>
            <car-edit></car-edit>
        </main>
    `,
    data() {
        return {
            cars: CarService.getCars(),
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
                return (filterBy.speed)? car.speed === filterBy.speed : true;
            });

            return filteredCars;
        },
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setCurrCar(car) {
            this.currCar = car;
        },
        sayWoW() {
            // alert('WOW');
        }
    }
});