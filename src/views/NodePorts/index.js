import React from 'react';
import Port from '../Port';
import {
  NODE,
  NODEWIDTH,
  NODEHEIGHT,
  PORTSIZE,
  defaultProps,
  propTypes,
} from './props';
import { RIGHT, LEFT, TOP, BOTTOM } from '../../models/PortModel/props';
import './style.less';

const NodePorts = (props) => {
  const {
    [NODE]: node,
    [NODEWIDTH]: nodeWidth,
    [NODEHEIGHT]: nodeHeight,
    [PORTSIZE]: portSize,
    ...others
  } = props;
  return (
    <span>
      {
        LEFT in node.ports ?
        (
          <div
            className="progress-port"
            style={{
              top: ((nodeHeight - portSize) / 2),
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
              top: ((nodeHeight - portSize) / 2),
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
              left: ((nodeWidth - portSize) / 2),
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
              left: ((nodeWidth - portSize) / 2),
            }}
          >
            <Port name={BOTTOM} node={node} portSize={portSize} {...others} />
          </div>
        ) :
        undefined
      }
    </span>
  );
};
NodePorts.defaultProps = defaultProps;
NodePorts.propTypes = propTypes;

export default NodePorts;
