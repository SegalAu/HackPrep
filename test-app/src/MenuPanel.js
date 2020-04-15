import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

//Material UI
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import App from './App';
import TestPage from './Pages/FeatureTogglePage';
import NotFoundPage from './Pages/NotFoundPage.js';

class MenuPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.toggleMenu = this.toggleMenu.bind(this);
    }


    toggleMenu() {      
        this.setState(state => ({
          menuOpen: !state.menuOpen
        }));
    }


            

    render() {
        return(
            <div>
                <Button onClick={this.toggleMenu}>Burger Menu</Button>
                <Router>
                    <Drawer anchor="left" open={this.state.menuOpen} 
                            onOpen={this.toggleMenu} onClose={this.toggleMenu}>
                    <List>
                        <ListItem>
                            <Link to="/"Home></Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/Pages/FeatureTogglePage">Feature Toggles</Link>
                        </ListItem>
                    </List>
                    </Drawer>
                    <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/Pages/FeatureTogglePage" component={TestPage}/>
                    <Route path="/Pages/FeatureTogglePage/:testNumber" component={TestPage}/>
                    <Route component={NotFoundPage}/>
                    </Switch>
                </Router>

            </div>
        )
    }

}

export default MenuPanel;