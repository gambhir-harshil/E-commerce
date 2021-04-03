import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';


import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/product/:id' component={ProductScreen}/>
            <Route exact path='/cart' component={CartScreen}/>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
