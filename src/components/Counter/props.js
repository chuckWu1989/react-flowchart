import PropTypes from 'prop-types';

export const defaultProps = {
  count: 0,
};
export const propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number,
  willMount: PropTypes.func,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  onDispose: PropTypes.func,
};
