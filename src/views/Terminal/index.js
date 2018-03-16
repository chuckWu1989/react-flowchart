import React from 'react';
import NodePorts from '../NodePorts';
import {
  CATEGORY,
  STARTTITLE,
  ENDTITLE,
  WIDTH,
  HEIGHT,
  STYLE,
  TITLESTYLE,
  defaultProps,
  propTypes,
} from './props';
import './style.less';

const Terminal = (props) => {
  const {
    [CATEGORY]: category,
    [STARTTITLE]: startTitle,
    [ENDTITLE]: endTitle,
    [WIDTH]: width,
    [HEIGHT]: height,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    ...others
  } = props;
  return (
    <div
      className="terminal-widget-style"
      style={{ width, height, ...style }}
    >
      <div className="terminal-container">
        <div className="terminal-title" style={titleStyle}>
          {
            category === 'start' ? startTitle : endTitle
          }
        </div>
      </div>
      <NodePorts nodeWidth={width} nodeHeight={height} {...others} />
    </div>
  );
};
Terminal.defaultProps = defaultProps;
Terminal.propTypes = propTypes;

export default Terminal;
