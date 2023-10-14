import Home from '../views/pages/home';
import Login from '../views/pages/AdminLogin';
import Register from '../views/pages/AdminRegister';
import Dashboard from '../views/pages/dashboard';
const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard
};

export default routes;
