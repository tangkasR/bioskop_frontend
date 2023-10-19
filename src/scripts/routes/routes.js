import Home from '../views/pages/home';
import Login from '../views/pages/AdminLogin';
import Register from '../views/pages/AdminRegister';
import Dashboard from '../views/pages/dashboard';
import Profil from '../views/pages/Profil';
import Product from '../views/pages/Product';
import AddMovie from '../views/pages/AddMovie';
import EditMovie from '../views/pages/EditMovie';
const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
  '/profil': Profil,
  '/product': Product,
  '/addmovie': AddMovie,
  '/editmovie/:id': EditMovie
};

export default routes;
