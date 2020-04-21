import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import PropTypes from 'prop-types';

import Repositories from './tabsComponents/Repositories';

class Tabs extends React.Component {
  render() {
    return (
      <Router>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to="/" className='nav-link' activeClassName='active' exact>Repositories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gists" className='nav-link' activeClassName='active'>Gists</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/subscriptions" className='nav-link' activeClassName='active'>Subscriptions</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/">
              <Repositories userId={this.props.userId} />
            </Route>
            <Route path="/gists">
              Gists
            </Route>
            <Route path="/subscriptions">
              Subscriptions
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

Tabs.propTypes = {
  userId: PropTypes.string,
};

export default Tabs;
