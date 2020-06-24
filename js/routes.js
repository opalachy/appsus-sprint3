// import homePage from './pages/home-page.cmp.js';
import bookApp from './apps/book/pages/book-app.cmp.js';
import bookDetails from './apps/book/pages/book-details.cmp.js';
import emailApp from './apps/email/pages/email-app.pages.js';
import keepApp from './apps/keep/pages/keep-app.pages.js';
// import userDetails from './pages/user-details.cmp.js';
// import carEdit from './pages/car-edit.cmp.js';

// const aboutUs = {
//     template: `
//         <section class="about-us app-main">
//             <h2>About {The book shop was founded in 1980. You can find almost any book in the market!}</h2>
//         </section>
//     `
// }



const myRoutes = [
    // {
    //     // path: '/',
    //     // component: homePage
    // },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep',
        component: keepApp
    }
    // {
    //     // path: '/car/edit/:theCarId?',
    //     // component: carEdit
    // },
    // {
    //     // path: '/car/:carId',
    //     // component: carDetails
    // },
    // {
    //     // path: '/about',
    //     // component: aboutUs
    // }
];

export const myRouter = new VueRouter({ routes: myRoutes })
