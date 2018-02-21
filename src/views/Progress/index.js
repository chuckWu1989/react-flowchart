import React from 'react';
import Port from '../Port';
import {
  NODE,
  defaultProps,
  propTypes,
  WIDTH,
  HEIGHT,
  PORTSIZE,
  TITLE,
  CONTENT,
} from './props';
import { RIGHT, LEFT, TOP, BOTTOM } from '../../models/PortModel/props';
import './style.less';

const Progress = (props) => {
  const {
    [WIDTH]: width,
    [HEIGHT]: height,
    [PORTSIZE]: portSize,
    [NODE]: node,
    [TITLE]: title,
    [CONTENT]: content,
    ...others
  } = props;
  return (
    <div
      className="progress-widget-style"
      style={{ width, height }}
    >
      <div className="progress-container">
        <div className="progress-title">
          {title}
        </div>
        {
          content ?
          (
            <div className="progress-content">
              {content}
            </div>
          ) :
          undefined
        }
      </div>
      {
        LEFT in node.ports ?
        (
          <div
            className="progress-port"
            style={{
              top: ((height - portSize) / 2),
              left: -portSize - 10,
            }}
          >
            <Port name={LEFT} node={node} portSize={portSize} {...others} />
          </div>
        ) :
        undefined
      }
      {
        RIGHT in node.ports ?
        (
          <div
            className="progress-port"
            style={{
              top: ((height - portSize) / 2),
              right: -portSize - 10,
            }}
          >
            <Port name={RIGHT} node={node} portSize={portSize} {...others} />
          </div>
        ) :
        undefined
      }
      {
        TOP in node.ports ?
        (
          <div
            className="progress-port"
            style={{
              top: -portSize - 10,
              left: ((width - portSize) / 2),
            }}
          >
            <Port name={TOP} node={node} portSize={portSize} {...others} />
          </div>
        ) :
        undefined
      }
      {
        BOTTOM in node.ports ?
        (
          <div
            className="progress-port"
            style={{
              bottom: -portSize - 10,
              left: ((width - portSize) / 2),
            }}
          >
            <Port name={BOTTOM} node={node} portSize={portSize} {...others} />
          </div>
        ) :
        undefined
      }
    </div>
  );
};
Progress.defaultProps = defaultProps;
Progress.propTypes = propTypes;

export default React.createFactory(Progress);
