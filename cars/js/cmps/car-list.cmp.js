
import './car-preview.cmp.js';

Vue.component('car-list', {
    props: ['cars'],
    template: `
        <ul class="car-list clean-list flex wrap align-center space-around">
            <car-preview v-for="car in cars" @click.native="selectCar(car)" :car="car" :key="car.id"/>
        </ul>
    `,
    methods: {
        selectCar(car) {
            this.$emit('carSelected', car);
        }
    }
})