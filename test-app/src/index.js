import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

//Material UI
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Pages / Resources
import './index.css';
import App from './App';
import TestPage from './Pages/FeatureTogglePage';
import NotFoundPage from './Pages/NotFoundPage.js';
import * as serviceWorker from './serviceWorker';

this.state = {menuOpen: false};

const toggleMenu = () => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  this.setState(state => ({
    menuOpen: !state.menuOpen
  }));
}

const menuList = (anchor) => (
  <List>
    <ListItem>
      <Link to="/"Home></Link>
    </ListItem>
    <ListItem>
      <Link to="/Pages/FeatureTogglePage">Feature Toggles</Link>
    </ListItem>
  </List>
);

const routing = (
  <Router>
    <div>
      <Button onClick={toggleMenu}>{anchor}</Button>
      <Drawer anchor="left" open={this.state.menuOpen} 
              onOpen={toggleMenu} onClose={toggleMenu}>
        {menuList}
      </Drawer>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/Pages/FeatureTogglePage" component={TestPage}/>
        <Route path="/Pages/FeatureTogglePage/:testNumber" component={TestPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
