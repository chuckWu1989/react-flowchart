import PropTypes from 'prop-types';

export const CATEGORY = 'category';
export const STARTTITLE = 'startTitle';
export const ENDTITLE = 'endTitle';
export const WIDTH = 'width';
export const HEIGHT = 'height';
export const STYLE = 'style';
export const TITLESTYLE = 'titleStyle';
export const STARTBKCOLOR = 'startBKColor';
export const defaultProps = {
  [STARTTITLE]: 'Start',
  [ENDTITLE]: 'End',
  [WIDTH]: 100,
  [HEIGHT]: 50,
  [STYLE]: {},
  [TITLESTYLE]: {},
};
export const propTypes = {
  [CATEGORY]: PropTypes.string.isRequired,
  [STARTTITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [ENDTITLE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  [WIDTH]: PropTypes.number,
  [HEIGHT]: PropTypes.number,
  [STYLE]: PropTypes.object,
  [TITLESTYLE]: PropTypes.object,
};
