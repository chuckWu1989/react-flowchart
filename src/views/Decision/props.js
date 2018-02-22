import PropTypes from 'prop-types';

export const TITLE = 'title';
export const WIDTH = 'width';
export const HEIGHT = 'height';
export const BKCOLOR = 'bkColor';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const CONTENTSTYLE = 'contentStyle';
export const defaultProps = {
  [TITLE]: 'Untitled',
  [WIDTH]: 150,
  [HEIGHT]: 100,
  [BKCOLOR]: '#d6e9ca',
  [STYLE]: {},
  [TITLESTYLE]: {},
  [CONTENTSTYLE]: {},
};
export const propTypes = {
  [TITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [WIDTH]: PropTypes.number,
  [HEIGHT]: PropTypes.number,
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
  [CONTENTSTYLE]: PropTypes.object,
};
