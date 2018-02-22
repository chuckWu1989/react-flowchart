import React from 'react';
import NodePorts from '../NodePorts';
import {
  TITLE,
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

const Decision = (props) => {
  const {
    [TITLE]: title,
    [WIDTH]: width,
    [HEIGHT]: height,
    [BKCOLOR]: bkColor,
    [STYLE]: style,
    [TITLESTYLE]: titleStyle,
    [CONTENTSTYLE]: contentStyle,
    ...others
  } = props;
  return (
    <div
      className="decision-widget-style"
      style={{ width, height, ...style }}
    >
      <div className="backgroud-color" style={{ backgroundColor: bkColor }} />
      <div className="shape-outside-left" />
      <div className="shape-outside-right" />
      <p className="decision-title" style={{ lineHeight: `${height / 2}px`, ...titleStyle }}>
        {title}
      </p>
      <NodePorts nodeWidth={width} nodeHeight={height} {...others} />
    </div>
  );
};
Decision.defaultProps = defaultProps;
Decision.propTypes = propTypes;

export default React.createFactory(Decision);
