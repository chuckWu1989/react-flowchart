import PropTypes from 'prop-types';

export const NODE = 'node';
export const NODEWIDTH = 'nodeWidth';
export const NODEHEIGHT = 'nodeHeight';
export const PORTSIZE = 'portSize';
export const defaultProps = {
  [PORTSIZE]: 10,
};
export const propTypes = {
  [NODE]: PropTypes.any.isRequired,
  [NODEWIDTH]: PropTypes.number.isRequired,
  [NODEHEIGHT]: PropTypes.number.isRequired,
  [PORTSIZE]: PropTypes.number,
};

