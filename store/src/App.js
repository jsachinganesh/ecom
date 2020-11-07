import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header.jsx';
import signInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={signInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
