import PropTypes from 'prop-types';

export const TITLE = 'title';
export const WIDTH = 'width';
export const HEIGHT = 'height';
export const ROTATE = 'rotate';
export const BKCOLOR = 'bkColor';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const defaultProps = {
  [TITLE]: 'Untitled',
  [WIDTH]: 100,
  [HEIGHT]: 60,
  [ROTATE]: 0,
  [BKCOLOR]: '#f8b500',
  [STYLE]: {},
  [TITLESTYLE]: {},
};
export const propTypes = {
  [TITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [WIDTH]: PropTypes.number,
  [HEIGHT]: PropTypes.number,
  [ROTATE]: PropTypes.number,
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
};
