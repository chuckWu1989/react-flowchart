import React from 'react';
import NodePorts from '../NodePorts';
import {
  defaultProps,
  propTypes,
  WIDTH,
  HEIGHT,
  TITLE,
  CONTENT,
  STYLE,
  TITLESTYLE,
  CONTENTSTYLE,
} from './props';
import './style.less';

const Progress = (props) => {
  const {
    [WIDTH]: width,
    [HEIGHT]: height,
    [TITLE]: title,
    [CONTENT]: content,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    [CONTENTSTYLE]: contentStyle,
    ...others
  } = props;
  return (
    <div
      className="progress-widget-style"
      style={{ width, height, ...style }}
    >
      <div className="progress-container">
        <div className="progress-title" style={titleStyle}>
          {title}
        </div>
        {
          content ?
          (
            <div className="progress-content" style={contentStyle}>
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
Progress.defaultProps = defaultProps;
Progress.propTypes = propTypes;

export default React.createFactory(Progress);
