import React from 'react';
import Counter from '../../containers/CounterContainer';
import './style.less';

const CounterPage = () => (
  <div className="counter-page-style">
    <Counter id="myCounter" count={4} />
  </div>
);

export default CounterPage;
