import React from 'react';
import { propTypes, defaultProps, NAME, NODE, SIZE, COLOR, HOVERCOLOR, STYLE } from './props';
import './style.less';

class Port extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = { color: this.props[COLOR] };
  }
  onMouseEnter() {
    this.setState({ color: this.props[HOVERCOLOR] });
  }
  onMouseLeave() {
    this.setState({ color: this.props[COLOR] });
  }
  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className="port port-style"
        style={{
          width: this.props[SIZE],
          height: this.props[SIZE],
          backgroundColor: this.state.color,
          ...this.props[STYLE],
        }}
        data-name={this.props[NAME]}
        data-nodeid={this.props[NODE].id}
      />
    );
  }
}
Port.defaultProps = defaultProps;
Port.propTypes = propTypes;

export default Port;
