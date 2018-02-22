import PropTypes from 'prop-types';

export const NAME = 'name';
export const NODE = 'node';
export const SIZE = 'portSize';
export const COLOR = 'portColor';
export const HOVERCOLOR = 'portHoverColor';
export const STYLE = 'portStyle';
export const defaultProps = {
  [SIZE]: 10,
  [COLOR]: '#3492ff',
  [HOVERCOLOR]: '#00c0ff',
  [STYLE]: {},
};
export const propTypes = {
  [NAME]: PropTypes.string.isRequired,
  [NODE]: PropTypes.any.isRequired,
  [SIZE]: PropTypes.number,
  [COLOR]: PropTypes.string,
  [HOVERCOLOR]: PropTypes.string,
  [STYLE]: PropTypes.object,
};
