
import bookApp from './apps/book/pages/book-app.cmp.js';
import bookDetails from './apps/book/pages/book-details.cmp.js';
import emailApp from './apps/email/pages/email-app.pages.js';
import keepApp from './apps/keep/pages/keep-app.pages.js';
import emailDetails from './apps/email/pages/email-details.pages.js';
// import emailCompose from './apps/email/cmps/email-compose.cmp.js';


const myRoutes = [
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
    // {
    //     path: '/email',
    //     component: emailCompose
    // },
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
