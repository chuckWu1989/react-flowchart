import React from 'react';
import NodePorts from '../NodePorts';
import {
  TITLE,
  HREF,
  SIZE,
  BKCOLOR,
  STYLE,
  TITLESTYLE,
  defaultProps,
  propTypes,
} from './props';
import './style.less';

const Documents = (props) => {
  const {
    [TITLE]: title,
    [HREF]: href,
    [SIZE]: size,
    [BKCOLOR]: BKColor,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    ...others
  } = props;
  return (
    <div
      className="document-widget-style"
      style={{ width: size, height: size, ...style }}
    >
      <div className="document-title" style={titleStyle}>
        <a href={href} target="_blank">{title}</a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill={BKColor}
      >
        <defs>
          <filter id="filter" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="5" dy="7" />
            <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
          </filter>
        </defs>
        <path d="M 0 0 L 0 80 Q 20 90 45 80 Q 70 70 95 80 L 95 0" stroke="#ffffff" filter="url(#filter)" />
      </svg>
      <NodePorts nodeWidth={size} nodeHeight={size} {...others} />
    </div>
  );
};
Documents.defaultProps = defaultProps;
Documents.propTypes = propTypes;

export default React.createFactory(Documents);
