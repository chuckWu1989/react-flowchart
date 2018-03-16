import React from 'react';
import NodePorts from '../NodePorts';
import {
  defaultProps,
  propTypes,
  TITLE,
  CONTENT,
  WIDTH,
  HEIGHT,
  BKCOLOR,
  STYLE,
  TITLESTYLE,
  CONTENTSTYLE,
} from './props';
import './style.less';

const SubRoutine = (props) => {
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
      className="subroutine-widget-style"
      style={{ width, height, ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 100 ${boxHeight}`}
      >
        <g fill={BKColor}>
          <path d={`M 0 0 L 0 ${boxHeight} L 100 ${boxHeight} L 100 0 L 0 0`} />
        </g>
        <g>
          <path d={`M 10 0 L 10 ${boxHeight}`} strokeWidth={1.5} stroke="#ffffff" />
          <path d={`M 90 0 L 90 ${boxHeight}`} strokeWidth={1.5} stroke="#ffffff" />
        </g>
      </svg>
      <div className="subroutine-container">
        <div className="subroutine-title" style={titleStyle}>
          {title}
        </div>
        {
          content ?
          (
            <div className="subroutine-content" style={contentStyle}>
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
SubRoutine.defaultProps = defaultProps;
SubRoutine.propTypes = propTypes;

export default SubRoutine;
