import PropTypes from 'prop-types';

export const TITLE = 'title';
export const CONTENT = 'content';
export const WIDTH = 'width';
export const HEIGHT = 'height';
export const BKCOLOR = 'bkColor';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const CONTENTSTYLE = 'contentStyle';
export const defaultProps = {
  [TITLE]: 'Untitled',
  [CONTENT]: undefined,
  [WIDTH]: 80,
  [HEIGHT]: 100,
  [BKCOLOR]: '#007bbb',
  [STYLE]: {},
  [TITLESTYLE]: {},
  [CONTENTSTYLE]: {},
};
export const propTypes = {
  [TITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [CONTENT]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [WIDTH]: PropTypes.number,
  [HEIGHT]: PropTypes.number,
  [BKCOLOR]: PropTypes.string,
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
  [CONTENTSTYLE]: PropTypes.object,
};
