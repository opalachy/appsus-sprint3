

Vue.component('car-preview', {
    props: ['car'],
    template: `
 
        <li class="car-preview" >
            {{car.vendor}}
            {{car.speed}}
            {{car.features}}
        </li>
    
    `,
});