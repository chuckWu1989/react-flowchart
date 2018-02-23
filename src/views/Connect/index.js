import React from 'react';
import NodePorts from '../NodePorts';
import {
  TITLE,
  SIZE,
  BKCOLOR,
  STYLE,
  TITLESTYLE,
  defaultProps,
  propTypes,
} from './props';
import './style.less';

const Connect = (props) => {
  const {
    [TITLE]: title,
    [SIZE]: size,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    [BKCOLOR]: bkColor,
    ...others
  } = props;
  return (
    <div
      className="connect-widget-style"
      style={{ width: size, height: size, ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
      >
        <circle cx={50} cy={50} r={50} fill={bkColor} />
      </svg>
      <div className="connect-container">
        <div className="connect-title">
          <div style={{ paddingTop: (size / 2) - 12, ...titleStyle }}>
            {title}
          </div>
        </div>
      </div>
      <NodePorts nodeWidth={size} nodeHeight={size} {...others} />
    </div>
  );
};
Connect.defaultProps = defaultProps;
Connect.propTypes = propTypes;

export default React.createFactory(Connect);
