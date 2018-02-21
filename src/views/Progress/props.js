import PropTypes from 'prop-types';

export const NODE = 'node';
export const WIDTH = 'width';
export const HEIGHT = 'height';
export const PORTSIZE = 'portSize';
export const TITLE = 'title';
export const CONTENT = 'content';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const CONTENTSTYLE = 'contentStyle';
export const defaultProps = {
  [WIDTH]: 150,
  [HEIGHT]: 100,
  [PORTSIZE]: 16,
  [TITLE]: 'Untitled',
  [CONTENT]: undefined,
  [STYLE]: {},
  [TITLESTYLE]: {},
  [CONTENTSTYLE]: {},
};
export const propTypes = {
  [NODE]: PropTypes.any.isRequired,
  [WIDTH]: PropTypes.number,
  [HEIGHT]: PropTypes.number,
  [PORTSIZE]: PropTypes.number,
  [TITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [CONTENT]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
  [CONTENTSTYLE]: PropTypes.object,
};
