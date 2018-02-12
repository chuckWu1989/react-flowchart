import React from 'react';
import { defaultProps, propTypes } from './props';
import './style.less';

class Counter extends React.Component {
  componentWillMount() {
    this.props.willMount();
  }
  componentWillUnmount() {
    this.props.onDispose();
  }
  render() {
    return (
      <div className="counter-style">
        <div className="count">
          <span>{this.props.count}</span>
        </div>
        <div className="buttons">
          <button onClick={this.props.increase}>Increase</button>
          <button onClick={this.props.decrease}>Decrease</button>
        </div>
      </div>
    );
  }
}
Counter.defaultProps = defaultProps;
Counter.propTypes = propTypes;

export default Counter;
