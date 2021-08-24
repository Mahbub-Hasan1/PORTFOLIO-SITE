import BlogPage from '../Pages/BlogPage';
import ContactPage from '../Pages/ContactPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import PageNotFound from '../Pages/PageNotFound';
import PortfolioPage from '../Pages/PortfolioPage';
import ResumePage from '../Pages/ResumePage';

const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/Portfolio',
        component: PortfolioPage,
    },
    {
        path: '/resume',
        component: ResumePage,
    },
    {
        path: '/blog',
        component: BlogPage,
    },
    {
        path: '/contact',
        component: ContactPage,
    },
    {
        path: '/Login',
        component: LoginPage,
    },
    {
        path: '*',
        component: PageNotFound,
    },
];

export default routes;
