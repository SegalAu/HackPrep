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
import FeatureTogglePage from './Pages/FeatureTogglePage';
import ModalPage from './Pages/ModalPage';
import NotFoundPage from './Pages/NotFoundPage.js';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Pages/FeatureTogglePage">Feature Toggle</Link>
        </li>
        <li>
          <Link to="/Pages/ModalPage">Modal Page</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/Pages/FeatureTogglePage" component={FeatureTogglePage} />
      <Route path="/Pages/ModalPage" component = {ModalPage}/>
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
