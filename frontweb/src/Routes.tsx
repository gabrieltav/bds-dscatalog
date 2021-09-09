import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from './components/Navbar/index';
import Catalog from './pages/Catalog/index';
import Admin from './pages/Admin/index';
import ProductDetails from 'pages/ProductsDetails';

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
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
