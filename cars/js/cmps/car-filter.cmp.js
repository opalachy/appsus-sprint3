

Vue.component('car-filter', {
    template: `
        <section>
            <h2 @click="$emit('click')">Search!</h2>
            <input type="text" placeholder="search?" v-model="filterBy.searchStr" @input="filter"/>
            <input type="number" placeholder="speed?" v-model.number="filterBy.speed" @input="filter"/>
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
        filter() {
            this.$emit('filter', this.filterBy);
        }
    }
})