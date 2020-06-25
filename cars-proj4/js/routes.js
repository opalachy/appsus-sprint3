import homePage from './pages/home-page.cmp.js';
import carApp from './pages/car-app.cmp.js';
import carDetails from './pages/car-details.cmp.js';
import userDetails from './pages/user-details.cmp.js';
import carEdit from './pages/car-edit.cmp.js';

const aboutUs = {
    template: `
        <section class="about-us app-main">
            <h2>About {{$route.params.who}}</h2>
            <nav>
                <router-link to="team">Our Team</router-link> | 
                <router-link to="service">Our Services</router-link> | 
            </nav>
            <router-view />
            <hr/>
            <h3>This is Us</h3>
        </section>
    `
}
const aboutTeam = {
    template: `
        <section class="about-team">
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione adipisci, libero, officia quia molestiae commodi, eius in vitae saepe facilis eaque? In totam excepturi quae repudiandae natus! Velit, cum?</p>
            <button @click="show = !show">
                Toggle
            </button>
            <transition name="fade1">
                <p v-if="show">Hola Animations</p>
            </transition>
        
        
            </section>
    `,
    data() {
        return {
            show: false
        }
    }
}
const aboutServices = {
    template: `
        <section class="about-services">
            <h2>Our Services</h2>
            <p>OUr Serrvices are bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione adipisci, libero, officia quia molestiae commodi, eius in vitae saepe facilis eaque? In totam excepturi quae repudiandae natus! Velit, cum?</p>
            <div id="myMap" ref="theMap"></div>
            <input ref="elInput"  />
            </section>
    `,
    created() {
        //     const elMap = document.querySelector('#myMap');
        //     console.log('elMap', elMap);
    },
    mounted() {
        // const elMap = document.querySelector('#myMap');
        // console.log('MOUNTED: elMap', elMap);
        console.log('this.$refs', this.$refs);
        console.log('MOUNTED', this.$refs.theMap);
        this.$refs.elInput.focus();
    }
}



const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/user',
        component: userDetails
    },
    {
        path: '/car',
        component: carApp
    },
    {
        path: '/car/edit/:theCarId?',
        component: carEdit
    },
    {
        path: '/car/:carId/:carVendor?',
        component: carDetails
    },
    {
        path: '/about/:who?',
        component: aboutUs,
        children: [
            {
                path: 'team',
                component: aboutTeam
            },
            {
                path: 'service',
                component: aboutServices
            },
        ]
    }
];

export const myRouter = new VueRouter({ routes: myRoutes })
