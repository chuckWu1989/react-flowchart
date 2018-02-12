import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import lazyLoading from '../hocs/lazyLoading';
import './style.less';

const MyRouter = () => (
  <Router>
    <div className="router-style">
      <div className="header">
        <div>DRC Starter Kit</div>
      </div>
      <div className="navigator">
        <span className="item"><Link to="/">Home</Link></span>
        <span className="item"><Link to="/counter">Counter Example</Link></span>
      </div>
      <div className="content-body">
        <Switch>
          <Route exact path="/" component={lazyLoading(() => import('./HomePage'))} />
          <Route exact path="/counter" component={lazyLoading(() => import('./CounterPage'))} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default MyRouter;
