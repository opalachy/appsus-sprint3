

Vue.component('car-details', {
    props: ['car'],
    template: `
        <section class="car-details">
            <button @click="close">X</button>
            <pre>{{car}}</pre>
        </section>
    `,
    methods: {
        close() {
            this.$emit('close', null);
        }
    }
})