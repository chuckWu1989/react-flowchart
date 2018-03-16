import React from 'react';
import NodePorts from '../NodePorts';
import {
  TITLE,
  CONTENT,
  WIDTH,
  HEIGHT,
  BKCOLOR,
  STYLE,
  TITLESTYLE,
  CONTENTSTYLE,
  defaultProps,
  propTypes,
} from './props';
import './style.less';

const Data = (props) => {
  const {
    [TITLE]: title,
    [CONTENT]: content,
    [WIDTH]: width,
    [HEIGHT]: height,
    [BKCOLOR]: BKColor,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    [CONTENTSTYLE]: contentStyle,
    ...others
  } = props;
  const boxHeight = (height / width) * 100;
  return (
    <div
      className="data-widget-style"
      style={{ width, height, ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 100 ${boxHeight}`}
        fill={BKColor}
      >
        <path d={`M 10 0 L 0 ${boxHeight} L 90 ${boxHeight} L 100 0 L 10 0`} />
      </svg>
      <div className="data-container">
        <div className="data-title" style={titleStyle}>
          {title}
        </div>
        {
          content ?
          (
            <div className="data-content" style={contentStyle}>
              {content}
            </div>
          ) :
          undefined
        }
      </div>
      <NodePorts nodeWidth={width} nodeHeight={height} {...others} />
    </div>
  );
};
Data.defaultProps = defaultProps;
Data.propTypes = propTypes;

export default Data;
