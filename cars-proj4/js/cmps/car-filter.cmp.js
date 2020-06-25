
export default {
    template: `
        <section class="car-filter">
            <h2 @click="$emit('click')">Search!</h2>
            <input type="text" placeholder="search?" v-model="filterBy.searchStr" @input="emitFilter"/>
            <input type="number" placeholder="speed?" v-model.number="filterBy.speed" @input="emitFilter"/>
        </section>
    `,
    data() {
        return {
            filterBy: {
                searchStr: '',
                speed: 0
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}