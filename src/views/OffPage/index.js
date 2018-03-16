import React from 'react';
import NodePorts from '../NodePorts';
import {
  TITLE,
  WIDTH,
  HEIGHT,
  ROTATE,
  BKCOLOR,
  STYLE,
  TITLESTYLE,
  defaultProps,
  propTypes,
} from './props';
import './style.less';

const OffPage = (props) => {
  const {
    [TITLE]: title,
    [WIDTH]: width,
    [HEIGHT]: height,
    [ROTATE]: rotate,
    [BKCOLOR]: bkColor,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    ...others
  } = props;
  const boxWidth = (width / height) * 100;
  return (
    <div
      className="offpage-widget-style"
      style={{ width, height, ...style }}
    >
      <div style={{ transform: `rotate(${rotate}deg)` }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={`0 0 ${boxWidth} 100`}
        >
          <g fill={bkColor}>
            <path d={`M 0 0 L 0 70 L ${boxWidth / 2} 100 L ${boxWidth} 70 L ${boxWidth} 0 L 0 0`} />
          </g>
        </svg>
        <div className="offpage-container">
          <div className="offpage-title" style={{ transform: `rotate(-${rotate}deg)`, ...titleStyle }}>
            {title}
          </div>
        </div>
      </div>
      <NodePorts nodeWidth={width} nodeHeight={height} {...others} />
    </div>
  );
};
OffPage.defaultProps = defaultProps;
OffPage.propTypes = propTypes;

export default OffPage;
