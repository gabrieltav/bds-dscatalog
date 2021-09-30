import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from './components/Navbar/index';
import Catalog from './pages/Catalog/index';
import Admin from './pages/Admin/index';
import ProductDetails from 'pages/ProductsDetails';
import Auth from 'pages/Admin/Auth';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/products" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
