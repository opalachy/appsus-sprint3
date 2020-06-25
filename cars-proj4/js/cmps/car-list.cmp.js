
import carPreview from './car-preview.cmp.js';

export default {
    props: ['cars'],
    template: `
        <ul class="car-list clean-list flex wrap align-center space-around">
            <car-preview v-for="currCar in cars" @click.native="selectCar(currCar)" :car="currCar" :key="currCar.id"/>
        </ul>
    `,
    methods: {
        selectCar(car) {
            this.$emit('carSelected', car);
        }
    },
    components: {
        carPreview
    }
}