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

const DataBase = (props) => {
  const {
    [TITLE]: title,
    [CONTENT]: content,
    [WIDTH]: width,
    [HEIGHT]: height,
    [BKCOLOR]: bkColor,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    [CONTENTSTYLE]: contentStyle,
    ...others
  } = props;
  const boxWidth = (width / height) * 100;
  return (
    <div
      className="database-widget-style"
      style={{ width, height, ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${boxWidth} 100`}
      >
        <g fill={bkColor}>
          <path d={`M 0 10 L 0 90 Q ${boxWidth / 2} 110 ${boxWidth} 90 L ${boxWidth} 10 Q ${boxWidth / 2} -10 0 10`} />
        </g>
        <g fill="none">
          <path d={`M 0 12 Q ${boxWidth / 2} 32 ${boxWidth} 12`} stroke="#ffffff" strokeWidth={2} />
          <path d={`M 0 20 Q ${boxWidth / 2} 40 ${boxWidth} 20`} stroke="#ffffff" strokeWidth={2} />
          <path d={`M 0 30 Q ${boxWidth / 2} 50 ${boxWidth} 30`} stroke="#ffffff" strokeWidth={2} />
        </g>
      </svg>
      <div className="database-container">
        <div className="database-title" style={titleStyle}>
          {title}
        </div>
        {
          content ?
          (
            <div className="database-content" style={contentStyle}>
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
DataBase.defaultProps = defaultProps;
DataBase.propTypes = propTypes;

export default React.createFactory(DataBase);
