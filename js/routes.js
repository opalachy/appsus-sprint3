
import bookApp from './apps/book/pages/book-app.cmp.js';
import emailApp from './apps/email/pages/email-app.pages.js';
import keepApp from './apps/keep/pages/keep-app.pages.js';
import emailDetails from './apps/email/pages/email-details.pages.js';
import about from './about.js';



const myRoutes = [
    {
        path: '/about',
        component: about
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
    },
    {
        path: '/email/:emailId/:emailSubject?',
        component: emailDetails
    }

];

export const myRouter = new VueRouter({ routes: myRoutes })
